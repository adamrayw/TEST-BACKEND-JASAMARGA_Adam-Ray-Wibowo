'use strict';
const {
  Model
} = require('sequelize');
const employee = require('./employee');
module.exports = (sequelize, DataTypes) => {
  class employee_profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    // define association here
    // }
  }
  employee_profile.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    employee_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    place_of_birth: {
      type: Sequelize.STRING,
      allowNull: true
    },
    date_of_birth: {
      type: Sequelize.DATE,
      allowNull: true
    },
    gender: {
      type: Sequelize.ENUM('Laki-laki', 'Perempuan'),
      allowNull: true
    },
    is_married: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    },
    prof_pict: {
      type: Sequelize.STRING,
      allowNull: true
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
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    }
  }, {
    sequelize,
    modelName: 'employee_profile',
    tableName: 'employee_profiles',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });

  employee_profile.belongsTo(employee, {
    foreignKey: 'employee_id',
  })

  employee.hasOne(employee_profile, {
    foreignKey: 'employee_id',
  })

  return employee_profile;
};