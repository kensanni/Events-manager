import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { APP_SECRET, getUserId } from '../utils'

class User {
  static async signup(parent, args, context, info) {
    const password = await bcrypt.hashSync(args.password, 10)

    const user = await context.db.mutation.createUser({
      data: { ...args, password }
    })

    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    return {
      token,
      user
    }
  }

  static async login(parent, args, context, info) {
    const users = await context.db.query.users({
        where: { 
          OR: [
            {email: args.email}, {username: args.username } 
          ]
        }
    })

    const user = users[0]

    if(!user) {
      throw new Error('No such User')
    }

    const validateUser = bcrypt.compareSync(args.password, user.password)

    if(!validateUser) {
      throw new Error('Invalid password')
    }

    const payload = { userId: user.id }
    const token = jwt.sign(payload, APP_SECRET )

    return {
      user,
      token
    }
  }

  static async getUsers(parent, args, context, info) {
    return context.db.query.users({ }, info)
  }
}

export default User