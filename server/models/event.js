export default (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Kindly input the name of your event'
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please input a description for your event'
      }

    },
    status: {
      type: DataTypes.ENUM,
      values: ['Open', 'Closed', 'Cancelled'],
      defaultValues: 'Open'
    },
    date: {
      type: DataTypes.DATE,
      allowNull: {
        args: false,
        msg: 'Please select a date for your event'
      }
    },
    centerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Center',
        key: 'id',
        as: 'centerId'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
        as: 'userId'
      }
    }
  })
  Event.associate = (models) => {
    Event.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
    Event.belongsTo(models.Center, {
      foreignKey: 'centerId',
      onDelete: 'CASCADE'
    })
  }
  return Event
}
