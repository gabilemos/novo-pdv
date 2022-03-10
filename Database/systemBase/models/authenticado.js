const Sequelize     = require('sequelize');
const database      = require('../systemBaseMgr');
const Usuario       = require('./usuario');
//chave estrangeira

const Authenticado = database.define('authenticado',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    Connection:{
        type:Sequelize.DATETIME,
        allowNull:false,
    }
});

Authenticado.belongsTo(Usuario,{constrait:true});

module.exports = Authenticado;