const { employeeSchema } = require("../middlewares/validationMiddleware");
const { createEmployee, updateEmployee, deleteEmployee, getAllEmployees, getEmployeeById } = require("../services/employeeService");

async function getAllEmployeesController(req, res) {
    try {
        const employees = await getAllEmployees();
        res.status(200).json(employees);
    } catch (error) {
        console.error('Get All Employees Error:', error);
        res.status(500).json({ message: 'Failed to get employees' });
    }
}

async function getEmployeeByIdController(req, res) {
    try {
        const { id } = req.params;
        const employee = await getEmployeeById(id);

        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        res.status(200).json(employee);
    } catch (error) {
        console.error('Get Employee Error:', error);
        res.status(500).json({ message: 'Failed to get employee' });
    }
}

async function createEmployeeController(req, res) {
    try {
        const { error, value } = employeeSchema.validate(req.body, { abortEarly: false });
        if (error) {
            return res.status(400).json({ errors: error.details.map(e => e.message) });
        }

        const result = await createEmployee(value);
        return res.status(201).json({ message: "Employee created", data: result });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

async function updateEmployeeController(req, res) {
    const id = req.params.id;

    const { error } = employeeSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        const updated = await updateEmployee(id, req.body);
        res.status(200).json({
            message: 'Employee updated successfully',
            data: updated
        });
    } catch (err) {
        console.error('Update Employee Error:', err);
        res.status(500).json({ message: 'Failed to update employee', error: err.message });
    }
}

async function deleteEmployeeController(req, res) {
    const id = req.params.id;

    try {
        const result = await deleteEmployee(id);
        res.status(200).json(result);
    } catch (err) {
        console.error('Delete Employee Error:', err);
        res.status(500).json({
            message: 'Failed to delete employee',
            error: err.message
        });
    }
}

module.exports = {
    createEmployeeController,
    updateEmployeeController,
    deleteEmployeeController,
    getAllEmployeesController,
    getEmployeeByIdController
};
