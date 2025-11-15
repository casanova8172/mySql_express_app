const express = require('express');
const studentController = require('../controllers/studentController');
const router = express.Router();

router.post('/', studentController.addStudent);
router.get('/' , studentController.getAllStudent);
router.get('/:id', studentController.getStudentById)
router.put('/:id', studentController.updateStudentById);
router.delete('/:id', studentController.deleteStudentById);


module.exports = router;