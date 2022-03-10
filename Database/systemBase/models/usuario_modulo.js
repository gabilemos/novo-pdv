const Sequelize     = require('sequelize');
const database      = require('../systemBaseMgr');
//chave estrangeira

const UsuarioModulo = database.define('usuario_modulo',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    }
});

module.exports = UsuarioModulo;