const db = require('../utils/db-connection');

const addStudent = (req, res) => {
    const { name, email } = req.body;

    const insertQuery = `INSERT INTO student (name, email) VALUES (?, ?)`;

    db.execute(insertQuery, [name, email], (error, results) => {
        if (error) {
            console.error("Insert Error:", error);
            return res.status(500).json({ message: "Database insert failed" });
        }
        console.log(`student ${name}, ${email} inserted successfully`)
        res.status(201).json({
            message: `User inserted successfully`,
            userId: results.insertId
        });
    });
};

const updateEntry = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).send("Name and email is required");
    }

    const updateQuery = `UPDATE student SET name = ?, email = ? WHERE id = ?`;

    db.execute(updateQuery, [name,email, id], (error, result) => {
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

const deleteEntry = (req, res) => {
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

module.exports = { 
    addStudent,
    updateEntry,
    deleteEntry
};
