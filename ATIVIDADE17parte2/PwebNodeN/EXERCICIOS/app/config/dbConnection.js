const {options} = require('../config/server')
var sql = require('mssql')
module.exports = function(){
    const sqlConfig = {
        user: 'BD2213033',
        password: '240603qwe.,',
        database:'BD',
        server: 'APOLO',
        options:{
            encrypt: false,
            trustServerCertificate: true
        }
    } 
    return sql.connect(sqlConfig)
}