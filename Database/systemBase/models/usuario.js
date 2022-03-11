const Sequelize         = require('sequelize');
const database          = require('../systemBaseMgr');
//chave estrangeira
const Unidade           = require('./unidade');
const Programa          = require('./programa');
const UsuarioPrograma   = require('./usuario_programa');
const UsuarioModulo     = require('./usuario_modulo');
const Modulo            = require('./modulo');

const Usuario = database.define('usuario',{
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
    },
    programa_inicial:{
        type:Sequelize.INTEGER,
    }
});

//usuario->unidade
Usuario.belongsTo(Unidade,{
    constraint:true,
    foreingKey:'programa_inicial'
});

Usuario.belongsTo(Programa,{constraint:true})

//usuario->usuarioPrograma->Programa
Usuario.hasMany (UsuarioPrograma);
UsuarioPrograma.belongsTo(Usuario);
Programa.hasMany(UsuarioPrograma);
UsuarioPrograma.belongsTo(Programa);

//usuario->usuarioModulo->modulo
Usuario.hasMany (UsuarioModulo);
UsuarioModulo.belongsTo(Usuario);
Modulo.hasMany(UsuarioModulo);
UsuarioModulo.belongsTo(Modulo);

module.exports = Usuario;