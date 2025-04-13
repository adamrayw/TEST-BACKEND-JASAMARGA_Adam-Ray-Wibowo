'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.sequelize.query(`
      CREATE TYPE "enum_employee_families_relation_status" AS ENUM ('Suami', 'Istri', 'Anak', 'Anak Sambung');
    `);

    await queryInterface.createTable('employee_families', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      employee_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'employees',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      identifier: {
        type: Sequelize.STRING,
        allowNull: true
      },
      job: {
        type: Sequelize.STRING,
        allowNull: true
      },
      place_of_birth: {
        type: Sequelize.STRING,
        allowNull: true
      },
      date_of_birth: {
        type: Sequelize.DATE,
        allowNull: true
      },
      religion: {
        type: Sequelize.ENUM('Islam', 'Katolik', 'Buda', 'Protestan', 'Konghucu')
      },
      is_life: {
        type: Sequelize.BOOLEAN
      },
      is_divorced: {
        type: Sequelize.BOOLEAN
      },
      relation_status: {
        type: Sequelize.ENUM('Suami', 'Istri', 'Anak', 'Anak Sambung')
      },
      created_by: {
        type: Sequelize.STRING,
        allowNull: true
      },
      updated_by: {
        type: Sequelize.STRING,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('employee_families');
  }
};