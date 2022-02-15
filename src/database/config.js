const Sequelize = require('sequelize');
const sequelize = new Sequelize('crud_db', 'root', 'crud_db', {dialect: 'mysql', host: '127.0.0.1'});

//verifica conexão
var conn = sequelize.authenticate()
    .then(()=>{
        console.log('Connection established!');
    })
    .catch(()=>{
        console.log('Connection fail!');
    })

var db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;