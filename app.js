var express = require('express');
var app     = express();
var path    = require('path');

app.use(express.static('public'));

app.get('/',function(req,res){
  res.sendFile(__dirname+'/pages'+'/index.html');
  //__dirname : It will resolve to your project folder.
});

app.get('/loginInfo', function(req, res){
	res.sendFile(__dirname+'/pages'+'/loginInfo.html');
});

app.get('/profile', function(req, res){
	res.sendFile(__dirname+'/pages'+'/profile_page.html');
});

app.post('/profile', function(req, res){
	res.sendFile(__dirname+'/pages/'+'/profile_page.html');
});

app.get('/index',function(req,res){
  res.sendFile(__dirname+'/pages'+'/index.html');
  //__dirname : It will resolve to your project folder.
});

app.get('/search', function(req, res){
	res.sendFile(__dirname+'/pages'+'/search.html');
});

app.get('/selection_page', function(req, res){
	res.sendFile(__dirname+'/pages'+'/selection_page.html');
});

app.post('/selection_page', function(req, res){
	res.sendFile(__dirname+'/pages'+'/selection_page.html');
});

app.get('/create', function(req, res){
	res.sendFile(__dirname+'/pages'+'/create.html');
});

app.post('/map_search', function(req, res){
	
});

var port = process.env.PORT || 3000;

app.listen(port);

console.log("Running at Port 3000");

// need to use ejs to make templates. templates are NOT STATIC. similar to 
// how you use <?php echo $namevar ?> to fill in a value based on who 
// is logged in
