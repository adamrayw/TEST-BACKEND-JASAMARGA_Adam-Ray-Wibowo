const { employee, employee_profile, employee_family, education, sequelize } = require("../models");

async function getAllEmployees() {
    return await employee.findAll({
        attributes: {
            exclude: ['created_by', 'updated_by', 'created_at', 'updated_at']
        },
        raw: true
    });
}

async function getEmployeeById(id) {
    return await employee.findOne({
      where: { id },
      include: [
        {
          model: employee_profile,
        },
        {
          model: employee_family,
        },
        {
          model: education,
        }
      ]
    });
  }

async function createEmployee(data) {
    return await sequelize.transaction(async (t) => {
        const emp = await employee.create({
            nik: data.nik,
            name: data.name,
            is_active: data.is_active,
            start_date: data.start_date,
            end_date: data.end_date,
            created_by: "system",
            updated_by: "system"
        }, { transaction: t });

        await employee_profile.create({
            employee_id: emp.id,
            ...data.employee_profile,
            created_by: "system",
            updated_by: "system"
        }, { transaction: t });

        if (data.employee_family?.length) {
            const families = data.employee_family.map(fam => ({
                ...fam,
                employee_id: emp.id,
                created_by: "system",
                updated_by: "system"
            }));
            await employee_family.bulkCreate(families, { transaction: t });
        }

        if (data.educations?.length) {
            const edus = data.educations.map(edu => ({
                ...edu,
                description: edu.description || null,
                employee_id: emp.id,
                created_by: "system",
                updated_by: "system"
            }));
            console.log("edis:", edus)
            await education.bulkCreate(edus, { transaction: t });
        }

        return emp;
    });
}

async function updateEmployee(id, data) {
    return await sequelize.transaction(async (t) => {
        // Update main employee
        await employee.update({
            nik: data.nik,
            name: data.name,
            is_active: data.is_active,
            start_date: data.start_date,
            end_date: data.end_date,
            updated_by: 'system'
        }, {
            where: { id },
            transaction: t
        });

        const profile = await employee_profile.findOne({ where: { employee_id: id }, transaction: t });
        if (profile) {
            await employee_profile.update({
                ...data.employee_profile,
                updated_by: 'system'
            }, {
                where: { employee_id: id },
                transaction: t
            });
        } else {
            await employee_profile.create({
                ...data.employee_profile,
                employee_id: id,
                created_by: 'system',
                updated_by: 'system'
            }, { transaction: t });
        }

        await employee_family.destroy({ where: { employee_id: id }, transaction: t });

        if (data.employee_family?.length) {
            const families = data.employee_family.map(fam => ({
                ...fam,
                employee_id: id,
                created_by: 'system',
                updated_by: 'system'
            }));
            await employee_family.bulkCreate(families, { transaction: t });
        }

        await education.destroy({ where: { employee_id: id }, transaction: t });

        if (data.educations?.length) {
            const educations = data.educations.map(edu => ({
                ...edu,
                description: edu.description || '',
                employee_id: id,
                created_by: 'system',
                updated_by: 'system'
            }));
            await education.bulkCreate(educations, { transaction: t });
        }

        return await employee.findByPk(id, {
            include: [employee_profile, employee_family, education],
            transaction: t
        });
    });
}

async function deleteEmployee(id) {
    return await sequelize.transaction(async (t) => {
       
        // delete related data first
        await employee_profile.destroy({ where: { employee_id: id }, transaction: t });
        await employee_family.destroy({ where: { employee_id: id }, transaction: t });
        await education.destroy({ where: { employee_id: id }, transaction: t });

        // then delete the employee
        const deleted = await employee.destroy({ where: { id }, transaction: t });

        if (!deleted) {
            throw new Error('Employee not found');
        }

        return { message: 'Employee and related data deleted successfully' };
    });
}

module.exports = {
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getAllEmployees,
    getEmployeeById
};