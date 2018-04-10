import model from '../../models'

const { User } = model

/**
 * @class User
 */
class Users {
  /**
   * @description allow a user to create an account
   *
   * @returns {object} object
   */
  static async signup ({ fullname, email, password, image, role }) {
    console.log('$$$$$$$$$$$$$$$', fullname)
    const createUser = await User.create({
      fullname,
      email,
      password,
      role,
      image
    })
    return createUser
  }
}

export default Users
