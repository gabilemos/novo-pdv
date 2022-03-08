const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:'./systemBase.db'
});

module.exports = sequelize;