
module.exports = function(app){
    app.get('/', function(req,res){
        //res.end("<html><body>Site da Fatec Sorocaba</body></html>")
        res.render("home/index");
    })
}