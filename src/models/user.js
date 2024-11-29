const { DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true,
    },
}, {
    tableName: 'user',
    timestamps: false,
});

module.exports = User;	