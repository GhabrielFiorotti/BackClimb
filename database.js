const Sequelize = require('sequelize');
require('dotenv/config');

const sequelize = new Sequelize(process.env.DATABASE_URL,{
    define: {
        timestamps: false
    }
});

//host: process.env.HOST,
//dialect: 'mysql',
console.log(process.env.DATABASE);
console.log(process.env.HOST);
console.log(process.env.PWD);
console.log(process.env.USER);
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};







