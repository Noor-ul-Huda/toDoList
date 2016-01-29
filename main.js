var app = require('express')();
var http = require('http').Server(app);
var mysql = require('mysql');
var day;
var sql= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hudasiddiq',
    database: 'todolist'
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/home.html');
});



http.listen(3000, function(){
    console.log('listening on *:3000');
});

