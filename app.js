var express = require('express');


var app = express();


app.get('/', function(req, res){
  res.sendfile(__dirname + '/views/login.html');
});
app.listen(3000);
console.log("Servidor Express escuchando en modo %s", app.settings.env);