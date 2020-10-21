const Sequelize = require('sequelize');
require('dotenv/config');

const sequelize = new Sequelize("climb_app", "climb_app", "n4*vl5cPo_", {
    host: "climb_app.mysql.dbaas.com.br",
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};







