'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class education extends Model {
    static associate(models) {

      education.belongsTo(models.employee, {
        foreignKey: 'employee_id',
      });

    }
  }

  education.init({
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
      type: DataTypes.STRING
    },
    level: {
      type: DataTypes.ENUM('Tk', 'Sd', 'Smp', 'Sma', 'Strata 1', 'Strata 2', 'Doktor', 'Profesor')
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.STRING,
      allowNull: false
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
    modelName: 'education',
    tableName: 'educations',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });


  return education;
};