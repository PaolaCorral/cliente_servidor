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

app.use(express.static(path.resolve(__dirname,"public")));
app.get('/clases',(request,response) => response.render('clases'));
app.get('/armas',(request,response) => response.render('armas'));
//app.get('/victimas',(request,response) => response.render('victimas'));

var ip_bloq = "127.12.25.45";

app.get('/victimas', function(request, response){
    var ips = ["192.168.0.1"];
    var request_ip = request.connection.remoteAddress;
    if(ips.indexOf(request_ip) >= 0){
        response.status(401).send("Acceso no autorizado");
        console.log(request_ip);
    } else{
        response.render("victimas");
        console.log(request_ip)
    }
});
app.use((request,response) => response.status(404).render('404'));

http.createServer(app).listen(3000, () =>
console.log('Corriendo en el puerto 3000')
);