'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('employees', [
      {
        id: 1,
        nik: '11012',
        name: 'Budi',
        is_active: true,
        start_date: '2022-12-12',
        end_date: '2029-12-12',
        created_by: 'admin',
        updated_by: 'admin',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        nik: '11013',
        name: 'Jarot',
        is_active: true,
        start_date: '2021-09-01',
        end_date: '2028-09-01',
        created_by: 'admin',
        updated_by: 'admin',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('employees', null, {});
  }
};
