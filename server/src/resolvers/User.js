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

  static async getUsers(parent, args, context, info) {
    return context.db.query.users({ }, info)
  }
}

export default User