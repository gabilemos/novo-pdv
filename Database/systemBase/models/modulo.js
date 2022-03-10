const Sequelize     = require('sequelize');
const database      = require('../systemBaseMgr');
//chave estrangeira

const UsuarioPrograma = database.define('modulo',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nome:{
        type:Sequelize.STRING(40),
        allowNull:false
    }
});
module.exports = UsuarioPrograma;