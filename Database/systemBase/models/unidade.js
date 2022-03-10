const Sequelize     = require('sequelize');
const database      = require('../systemBaseMgr');
const Grupo         = require('./grupo');

const Unidade = database.define('unidade',{
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
    fiscalId:{
        type:Sequelize.STRING(60),
        allowNull:false
    },
    abreviacao:{
        type:Sequelize.STRING(4),
        allowNull:false
    }
});

Unidade.belongsTo(Grupo,{constrait:true});

module.exports = Unidade;