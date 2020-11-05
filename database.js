const Sequelize = require('sequelize');
require('dotenv/config');



//DESSA MANEIRO DEU ERRADO
/* const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PWD, {
    host: process.env.HOST,
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});
console.log(process.env.DATABASE);
console.log(process.env.HOST);
console.log(process.env.PWD);
console.log(process.env.USER); */


//E RESOLVEU ASSIM
const sequelize = new Sequelize(process.env.DATABASE_URL,{
    define: {
        timestamps: false
    }
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};







