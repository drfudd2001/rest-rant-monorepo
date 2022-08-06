'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('users', 'role', {
      type: Sequelize.DataTypes.ENUM,
      values: [
        'reviewer',
        'admin'
      ],
      defaultValue: 'reviewer'
    })
  },
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('users', 'role');
  }
};