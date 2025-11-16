const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const courses = sequelize.define('courses', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    tableName: 'courses',
    timestamps: false
});

module.exports = courses;
