const { DataTypes } = require('sequelize');
const sequelize = require('../connection');

const SneakerModel = sequelize.define('sneaker', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha_lanzamiento: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    precio: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'zapatilla',
    timestamps: false,
});

module.exports = SneakerModel;