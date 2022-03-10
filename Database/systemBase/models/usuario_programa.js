const Sequelize         = require('sequelize');
const database          = require('../systemBaseMgr');
//chave estrangeira

const UsuarioPrograma   = database.define('usuario_programa',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    }
});

module.exports = UsuarioPrograma;