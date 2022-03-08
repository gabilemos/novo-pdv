const Sequelize     = require('sequilize');
const database      = require('./systemBaseMgr');

const Usuario = database.define('system_usuario',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    login:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    active:{
        type:Sequelize.BOOLEAN,
        defaultValue: true,
    }
});

module.exports = Usuario;