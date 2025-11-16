const Course = require('../models/courses');
const Student = require('../models/student');
const StudentCourse = require('../models/StudentCourse');

// ✅ Add new Course
const addCourse = async (req, res) => {
    try {
        const {name} = req.body;
        const course = await Course.create({"name":name});
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({"error": error.message });
    }
};

const addStudentsToCourses = async (req, res) => {
    // {"StudentId":1,"courseId":[1,2]} // this will only work like 1 student to many courses
    try {
        const {StudentId, courseId} = req.body;
        const student = await Student.findByPk(StudentId);

        const course = await Course.findAll({
            where:{
                id:courseId
            }
        });
        await student.addCourses(course);

        const updatedStudent = await Student.findByPk(StudentId, {include:Course});

        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}


// ✅ Get all courses
const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.status(200).json({ success: true, courses });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// ✅ Get single course by ID
const getCourseById = async (req, res) => {
    try {
        const course = await Course.findByPk(req.params.id);

        if (!course) {
            return res.status(404).json({ success: false, message: "Course not found" });
        }

        res.status(200).json({ success: true, course });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// ✅ Update course by ID
const updateCourse = async (req, res) => {
    try {
        const course = await Course.findByPk(req.params.id);

        if (!course) {
            return res.status(404).json({ success: false, message: "Course not found" });
        }

        await course.update(req.body);

        res.status(200).json({ success: true, course });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// ✅ Delete course by ID
const deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByPk(req.params.id);

        if (!course) {
            return res.status(404).json({ success: false, message: "Course not found" });
        }

        await course.destroy();

        res.status(200).json({ success: true, message: "Course deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// ⭐ Optional: Get all students in a course
const getStudentsInCourse = async (req, res) => {
    try {
        const course = await Course.findByPk(req.params.id, {
            include: Student
        });

        if (!course) {
            return res.status(404).json({ success: false, message: "Course not found" });
        }

        res.status(200).json({ success: true, course });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = {
    addCourse,
    addStudentsToCourses
};
