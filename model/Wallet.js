const database = require('../database.js');


const wallets = database.sequelize.define('wallets'); 


console.log("RODANDO wallets");
wallets.sync({force: false});
module.exports = wallets

