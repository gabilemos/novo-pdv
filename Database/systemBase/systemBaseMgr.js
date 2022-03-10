const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:'./Database/systemBase/systemBase.db'
});

module.exports = sequelize; 