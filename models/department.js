const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const Department = sequelize.define('Department', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'department',
    timestamps: false
});

module.exports = Department;
