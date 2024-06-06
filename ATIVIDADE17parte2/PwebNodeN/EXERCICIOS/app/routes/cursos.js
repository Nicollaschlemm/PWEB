module.exports = function(app){
    app.get('/informacao/cursos', function(req, res){
        //res.end("<html><body>Cursos da Fatec Sorocaba</body></html>")
        res.render("informacao/cursos")});
}