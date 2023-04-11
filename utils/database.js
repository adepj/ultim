const { Sequelize } = require ('sequelize')

const db = new Sequelize({
    database : "api_db",
    host : 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    dialect: 'postgres',
});

module.exports = db;