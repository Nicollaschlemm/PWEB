var sql = require('mssql');

var connSQLServer = function(){
//module.exports = function(){
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
    return sql.connect(sqlConfig);
}

//exportando a função e quando chamar a página ele conecta
module.exports = function(){
    console.log('O autoload carregou o módulo de conexão com o bs');
    return connSQLServer;
}