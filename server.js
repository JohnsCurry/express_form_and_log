var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res){
  var options = {
    root: __dirname + '/'
  }
  res.sendFile('index.html', options);
});

app.get('/info', function(req, res){
  res.write("Hi there. Information is processed I think...");
})

app.post('/login', function(req, res){
  var user_name = req.body.user;
  var password = req.body.password;
  console.log("User name = "+user_name+", password is "+password);
  //res.write("yes");
  res.redirect('/info');
});

app.listen(3000,function(){
  console.log('started on PORT 3000');
});

