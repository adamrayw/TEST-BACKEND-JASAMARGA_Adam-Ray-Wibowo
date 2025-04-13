'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('employee_families', [
      {
        id: 1,
        employee_id: 1,
        name: 'Marni',
        identifier: '32100594109960002',
        job: 'Ibu Rumah Tangga',
        place_of_birth: 'Denpasar',
        date_of_birth: '1995-10-17',
        religion: 'Islam',
        is_life: true,
        is_divorced: false,
        relation_status: 'Istri',
        created_by: 'admin',
        updated_by: 'admin',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        employee_id: 1,
        name: 'Clara',
        identifier: '32100594109200004',
        job: 'Pelajar',
        place_of_birth: 'Bangka',
        date_of_birth: '2008-10-17',
        religion: 'Islam',
        is_life: true,
        is_divorced: false,
        relation_status: 'Anak',
        created_by: 'admin',
        updated_by: 'admin',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        employee_id: 1,
        name: 'Stephanie',
        identifier: '32100594109200005',
        job: 'Pelajar',
        place_of_birth: 'Bangka',
        date_of_birth: '2008-10-17',
        religion: 'Islam',
        is_life: true,
        is_divorced: false,
        relation_status: 'Anak',
        created_by: 'admin',
        updated_by: 'admin',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('employee_families', null, {});
  }
};
