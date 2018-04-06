export default (sequelize, DataTypes) => {
  const Center = sequelize.define('Center', {
    name: {
      type: DataTypes.STRING
    },
    location: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please select a location for your center'
      }
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Kindly input the size/seats of your center'
      }
    },
    facilities: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: {
        args: false,
        msg: 'Please specify the facilities available in your center'
      }
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: {
        args: false,
        msg: 'Please upload the images of your center for users to see'
      }
    },
    price: {
      type: DataTypes.REAL,
      allowNull: {
        args: false,
        msg: 'Kindly input the price of your center'
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
  Center.associate = (models) => {
    Center.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  }
  return Center
}
