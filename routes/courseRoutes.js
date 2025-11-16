const express = require('express');
const courseController = require('../controllers/coursesController');
const router = express.Router();

router.post('/addcourses', courseController.addCourse);
router.get('/addStudentCourses', courseController.addStudentsToCourses);

module.exports = router;

