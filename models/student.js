const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const Student = sequelize.define('Student', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },

    email: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false
    },

    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'student',
    timestamps: false   // No createdAt / updatedAt
});

module.exports = Student;
