const express = require('express');
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sah123@##',
    database: 'testdb'
})

connection.connect((error) => {
    if (error) {
        console.error('Error connecting to the database:', error);
        return;
    }
    console.log('Connected to the MySQL database.');

    const creationQuery = `create table Student (
        id int primary key auto_increment,
        name varchar(20),
        email varchar(20)
    )`

    connection.execute(creationQuery, (error, results) => {
        if (error) {
            console.error('Error creating table:', error);
            connection.end();
            return;
        }
        console.log('Table created successfully.');
    });
})

app.get('/', (req, res) => {
    res.send('Hello, World!');
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});     
