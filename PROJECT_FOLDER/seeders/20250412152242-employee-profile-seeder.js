'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('employee_profiles', [
      {
        id: 1,
        employee_id: 1,
        place_of_birth: 'Jakarta',
        date_of_birth: '1997-05-02',
        gender: 'Laki-laki',
        is_married: true,
        prof_pict: 'default.jpg',
        created_by: 'admin',
        updated_by: 'admin',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        employee_id: 2,
        place_of_birth: 'Sukabumi',
        date_of_birth: '1996-05-02',
        gender: 'Laki-laki',
        is_married: false,
        prof_pict: 'default.jpg',
        created_by: 'admin',
        updated_by: 'admin',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('employee_profiles', null, {});
  }
};
