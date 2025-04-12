import db from '../config/database.js';
import { Sequelize } from 'sequelize';

const employeeProfile = db.define('employee_profile', {
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
        }
    },
    place_of_birth: {
        type: Sequelize.STRING,
        allowNull: true
    },
    date_of_birth:{
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
    freezeTableName: true,
});

export default employeeProfile;