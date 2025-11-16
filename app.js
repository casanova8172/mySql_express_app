const express = require('express');
const sequelize = require('./utils/db-connection');
//const StudentModel = require('./models/student');
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');

// models
require('./models');


const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Sequelize ORM Connected!');
});


app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);

// Sync models (Creates table if not exists)
sequelize.sync({ force: false }).then(() => {
    app.listen(3000, () => {
        console.log(`Server is running on http://localhost:3000`);
    });
    console.log("All tables synced successfully")
}).catch(err => console.error("Sync error:", err));




