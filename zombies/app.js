var http = require('http');
var path = require('path');
var express = require('express');
var logger = require('morgan');
var  bodyParser = require('body-parser');

var app  = express();
app.set('views', path.resolve(__dirname,'views'));
app.set('view engine','ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(request,response) => response.render('index'));

app.get('/clases',(request,response) => response.render('clases'));
app.get('/armas',(request,response) => response.render('armas'));
app.get('/victimas',(request,response) => response.render('victimas'));

app.use((request,response) => response.status(404).render('404'));

http.createServer(app).listen(3000, () =>
console.log('Corriendo en el puerto 3000')
);