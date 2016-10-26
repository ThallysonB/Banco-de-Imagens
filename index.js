var http = require('http')
    ,app = require('./config/express')
    db = require('./config/database');

http.createServer(app).listen(5000, function() {
    console.log('Servidor estutando na porta: ' + this.address().port);
});

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


