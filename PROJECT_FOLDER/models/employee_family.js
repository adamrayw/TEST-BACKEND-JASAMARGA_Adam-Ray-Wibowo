'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class employee_family extends Model {
    static associate(models) {
      employee_family.belongsTo(models.employee, {
        foreignKey: 'employee_id',
      });
    }
  }
  
  employee_family.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    identifier: {
      type: DataTypes.STRING,
      allowNull: true
    },
    job: {
      type: DataTypes.STRING,
      allowNull: true
    },
    place_of_birth: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: true
    },
    religion: {
      type: DataTypes.ENUM('Islam', 'Katolik', 'Buda', 'Protestan', 'Konghucu')
    },
    is_life: {
      type: DataTypes.BOOLEAN
    },
    is_divorced: {
      type: DataTypes.BOOLEAN
    },
    relation_status: {
      type: DataTypes.ENUM('Suami/Istri', 'Anak', 'Anak Sambung')
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'employee_family',
    tableName: 'employee_families',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });

  return employee_family;
};