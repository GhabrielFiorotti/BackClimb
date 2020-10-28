const Sequelize = require('sequelize');
require('dotenv/config');

const sequelize = new Sequelize(process.ENV.DATABASE, process.ENV.USER, process.ENV.PWD, {
    host: process.ENV.HOST,
    dialect: 'mysql',
    port: 3306,
    define: {
        timestamps: false
    }
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};







