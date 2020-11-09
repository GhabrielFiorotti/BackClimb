const database = require('../database.js');


const wallets = database.sequelize.define('wallets', {
    wallet_id : {type: database.Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    user_id: {
        type: database.Sequelize.INTEGER,
        allowNull : false,
        references: {
            model: users,
            key: 'user_id'
        }
    },
    name : {type : database.Sequelize.STRING(30)},
    description : {type : database.Sequelize.STRING(100)}
}); 


console.log("RODANDO wallets");
wallets.sync({force: false});
module.exports = wallets

