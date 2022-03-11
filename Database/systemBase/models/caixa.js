const Sequelize     = require('sequelize');
const database      = require('../systemBaseMgr');

const Caixa = database.define('caixa',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nome:{
        type:Sequelize.STRING(20),
        allowNull:false
    },
    gerenciadorId:{
        type:Sequelize.STRING(4),
        allowNull:false
    }
});

module.exports = Caixa;