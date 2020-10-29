const Sequelize = require('sequelize');
require('dotenv/config');

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, "n4*vl5cPo_", {
    host: process.env.HOST,
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});
console.log(process.env.DATABASE);
console.log(process.env.HOST);
console.log(process.env.PWD);
console.log(process.env.USER);
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};







