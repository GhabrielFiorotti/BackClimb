const Sequelize = require('sequelize');
require('dotenv/config');

const sequelize = new Sequelize('mysql://climb_app:n4*vl5cPo_@climb_app.mysql.dbaas.com.br/climb_app',{
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







