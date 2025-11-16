const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const IdentityCard = sequelize.define('IdentityCard', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cardNo: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
    }
},{
    tableName: 'IdentityCard',
    timestamps: false
});

module.exports = IdentityCard;
