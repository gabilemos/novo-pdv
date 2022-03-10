const Sequelize     = require('sequelize');
const database      = require('../systemBaseMgr');

const Unidade       = require('./unidade');

const Instalacao    = database.define('instalacao',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nome:{
        type:Sequelize.STRING(40),
        allowNull:false
    },
    hashCode:{
        type:Sequelize.UUID,
        unique:true,
        allowNull:false
    }
});

Instalacao.belongsTo(Unidade,{constrait:true});

module.exports = Instalacao;