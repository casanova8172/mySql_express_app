const express = require('express');
const db = require('./utils/db-connection'); 
const studentRoutes = require('./routes/studentRoutes');

const app = express();


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});


app.use('/students', studentRoutes);


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
