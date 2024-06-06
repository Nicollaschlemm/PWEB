module.exports = function(app){
    app.get('/informacao/historia', function(req,res){
        //res.end("<html><body>História da Fatec Sorocaba</body></html>");
        res.render("informacao/historia")});
    
}