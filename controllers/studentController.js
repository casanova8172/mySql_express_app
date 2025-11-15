const Student = require("../models/student");

// ➤ Add Student
const addStudent = async (req, res) => {
    try {
        const { name, email, age } = req.body;

        const student = await Student.create({ name, email, age });

        res.status(201).json({
            message: "Student created successfully",
            userId: student.id
        });

    } catch (error) {
        console.error("Insert Error:", error);
        res.status(500).json({ message: "Database insert failed", error });
    }
};

// ➤ Update Student by ID
const updateStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;

        const student = await Student.findByPk(id);

        if (!student) {
            return res.status(404).send("Student not found");
        }

        await student.update({ name, email });

        res.status(200).send("Student updated successfully");

    } catch (error) {
        console.error(error);
        res.status(500).send("Database error");
    }
};

// ➤ Delete Student by ID
const deleteStudentById = async (req, res) => {
    try {
        const { id } = req.params;

        const deleted = await Student.destroy({ where: { id } });

        if (!deleted) {
            return res.status(404).send("Student not found");
        }

        res.status(200).send(`Student with id=${id} deleted successfully`);

    } catch (error) {
        console.error(error);
        res.status(500).send("Database error");
    }
};

// ➤ Get All Students
const getAllStudent = async (req, res) => {
    try {
        const students = await Student.findAll();

        res.status(200).json(students);

    } catch (error) {
        console.error(error);
        res.status(500).send("Database error");
    }
};

// ➤ Get Student By ID
const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;

        const student = await Student.findByPk(id);

        if (!student) {
            return res.status(404).send("Student not found");
        }

        res.status(200).json(student);

    } catch (error) {
        console.error(error);
        res.status(500).send("Database error");
    }
};

module.exports = {
    addStudent,
    updateStudentById,
    deleteStudentById,
    getAllStudent,
    getStudentById
};
