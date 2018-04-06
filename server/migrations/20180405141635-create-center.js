module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Centers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      location: {
        allowNull: false,
        type: Sequelize.STRING
      },
      capacity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      facilities: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      images: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      price: {
        allowNull: false,
        type: Sequelize.REAL
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Centers')
  }
}
