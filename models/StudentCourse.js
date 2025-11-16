const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const StudentCourse = sequelize.define('StudentCourse', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, {
    tableName: 'StudentCourse',
    timestamps: false
});

module.exports = StudentCourse;
