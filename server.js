var express = require('express');
var app = express();
var port = 3000;

var middleware=require('./middleware.js');

// app.get('/',function(req , res){
// 	res.send('hello express!');
// });

app.use(middleware.logger);
//app.use(middleware.requireAuthentication);

app.get('/about',middleware.requireAuthentication,function(req , res){
	res.send('about us!!!!');
});

app.use(express.static(__dirname +'/public'));

app.listen(port,function(){
	console.log('Express server started :'+ port);
});