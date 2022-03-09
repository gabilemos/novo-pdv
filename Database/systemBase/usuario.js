const Sequelize     = require('sequelize');
const database      = require('./systemBaseMgr');

const Usuario = database.define('system_usuario',{
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
    login:{
        type:Sequelize.STRING(30),
        allowNull:false,
        unique:true,
    },
    password:{
        type:Sequelize.STRING(16),
        allowNull:false
    },
    email:{
        type:Sequelize.STRING(30),
        allowNull:false,
        unique:true
    },
    active:{
        type:Sequelize.TINYINT(1),
        defaultValue: true,
    }
});

module.exports = Usuario;