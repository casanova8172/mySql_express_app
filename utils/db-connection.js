const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sah123@##',
    database: 'testdb'
});

connection.connect((error) => {
    if (error) {
        console.error('Error connecting to the database:', error);
        return;
    }
    console.log('Connected to the MySQL database.');

    const creationQuery = `
        CREATE TABLE IF NOT EXISTS Student (
            id INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(255),
            email VARCHAR(255)
        )
    `;

    connection.execute(creationQuery, (error) => {
        if (error) {
            console.error('Error creating table:', error);
            return;
        }
        console.log('Table created successfully.');
    });
});

module.exports = connection;
