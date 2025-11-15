const db = require('../utils/db-connection');

const addStudent = (req, res) => {
    const { name, email, age } = req.body;

    const insertQuery = `INSERT INTO student (name, email, age) VALUES (?, ?, ?)`;

    db.execute(insertQuery, [name, email, age], (error, results) => {
        if (error) {
            console.error("Insert Error:", error);
            return res.status(500).json({ message: "Database insert failed" });
        }
        console.log(`student ${name}, ${email}, ${age} inserted successfully`);
        res.status(201).json({
            message: `User inserted successfully`,
            userId: results.insertId
        });
    });
};

const updateStudentById = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).send("Name and email is required");
    }

    const updateQuery = `UPDATE student SET name = ?, email = ? WHERE id = ?`;

    db.execute(updateQuery, [name, email, id], (error, result) => {
        if (error) {
            console.log(error);
            return res.status(500).send(error.message);
        }

        if (result.affectedRows === 0) {
            return res.status(404).send('Student not found');
        }
        console.log(`student ${name}, ${email} updated successfully`);

        res.status(200).send('Student updated successfully');
    });
};

const deleteStudentById = (req, res) => {
    const { id } = req.params;

    const deleteQuery = `DELETE FROM student WHERE id = ?`;

    db.execute(deleteQuery, [id], (error, result) => {
        if (error) {
            console.error(error);
            return res.status(500).send("Database error");
        }

        if (result.affectedRows === 0) {
            return res.status(404).send("Student not found");
        }

        console.log(`student ${id} deleted successfully`);

        res.status(200).send(`Student wiht id=${id} deleted successfully`);
    });
};

const getAllStudent = (req, res) => {
    const getQuery = `SELECT * FROM student`;

    db.execute(getQuery, (error, result) => {
        if (error) {
            console.error(error);
            return res.status(500).send('Database error');
        }

        console.log('Here is list of all student:', result);
        res.status(200).json(result);
    })
};

const getStudentById = (req, res) => {
    const { id } = req.params;

    const getByIdQuery = `SELECT * FROM student where id = ?`;

    db.execute(getByIdQuery, [id], (error, result) => {
        if (error) {
            console.error(error);
            return res.status(500).send("Database error");
        }

        if (result.affectedRows === 0) {
            return res.status(404).send("Student not found");
        }

        console.log(`got student by Id=${id}`, result);

        res.status(200).json(result);
    });
};

module.exports = {
    addStudent,
    updateStudentById,
    deleteStudentById,
    getAllStudent,
    getStudentById
};
