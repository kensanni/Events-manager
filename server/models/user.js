import bcrypt from 'bcrypt'

export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullname: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Kindly input your full name'
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please input your email to continue'
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Kindly input a valid email address'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Oops, you forgot to input your password'
      },
      validate: {
        isNotShort: (value) => {
          if (value.length < 8) {
            throw new Error('Password should be at least 8 characters')
          }
        }
      }
    },
    role: {
      type: DataTypes.ENUM,
      values: ['superadmin', 'admin', 'user'],
      defaultValue: 'user'
    }
  }, {
    hooks: {
      beforeCreate: (user) => {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync())
      }
    }
  })
  User.associate = (models) => {
    User.hasMany(models.Center, {
      foreignKey: 'userId'
    })
    User.hasMany(models.Event, {
      foreignKey: 'userId'
    })
  }
  return User
}
