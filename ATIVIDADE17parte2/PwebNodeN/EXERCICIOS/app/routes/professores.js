var dbConnection = require('../config/dbConnection');
module.exports = function(app){
    app.get('/informacao/professores', function(req, res){
        const sql = require ('mssql');
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
        async function getProfessores(){
            try{
                
                const pool = await dbConnection();

                const results = await pool.request().query('SELECT * FROM PROFESSORES');
                res.render('informacao/professores', {profs: results.recordset});
            }
            catch(err){
                console.log(err);
            }
            //res.render('informacao/professores');
            }
            getProfessores();
        });
    }