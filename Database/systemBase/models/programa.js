const Sequelize     = require('sequelize');
const database      = require('../systemBaseMgr');
//FK
const Modulo        = require('./modulo');

const Programa = database.define('programa',{
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
    controller:{//or page component
        type:Sequelize.STRING(40),
        allowNull:false
    },
});

Programa.belongsTo(Modulo,{constrait:true});

module.exports = Programa;