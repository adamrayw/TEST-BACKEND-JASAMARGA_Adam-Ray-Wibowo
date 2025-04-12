'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employee_profile extends Model {

    static associate(models) {
      employee_profile.belongsTo(models.employee, {
        foreignKey: 'employee_id',
      })
    }
  }
  employee_profile.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    place_of_birth: {
      type: DataTypes.STRING,
      allowNull: true
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gender: {
      type: DataTypes.ENUM('Laki-laki', 'Perempuan'),
      allowNull: true
    },
    is_married: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    prof_pict: {
      type: DataTypes.STRING,
      allowNull: true
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
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'employee_profile',
    tableName: 'employee_profiles',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });


  return employee_profile;
};