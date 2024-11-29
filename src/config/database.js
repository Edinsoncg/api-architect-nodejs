const { Sequelize } = require ('sequelize');

const sequelize = new Sequelize('user_db', 'root', 'Onepiece', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    logging: false,
});

module.exports = sequelize;