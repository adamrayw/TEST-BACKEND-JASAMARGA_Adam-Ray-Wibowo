const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.get('/:id', employeeController.getEmployeeByIdController);
router.get('/', employeeController.getAllEmployeesController);
router.get('/employee-report/:id', employeeController.employeeReportController);
router.post('/', employeeController.createEmployeeController);
router.put('/:id', employeeController.updateEmployeeController);
router.delete('/:id', employeeController.deleteEmployeeController);

module.exports = router;