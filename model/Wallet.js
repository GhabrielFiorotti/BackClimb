const database = require('../database.js');


const wallets = database.sequelize.define('wallets', {
    user_id : {type: database.Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    name : {type : database.Sequelize.STRING(50), allowNull : false},
    tel : {type : database.Sequelize.STRING(20), allowNull : false},
    cpf_cnpj : {type : database.Sequelize.STRING(14),allowNull : false},
    password : {type : database.Sequelize.STRING(60),allowNull : false},
    email : {type : database.Sequelize.STRING(50), allowNull : false},
    profile : {type : database.Sequelize.STRING(15)}
}); 


console.log("RODANDO wallets");
wallets.sync({force: false});
module.exports = wallets

