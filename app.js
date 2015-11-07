var express = require("express");
var app     = express();
var path    = require("path");

app.use(express.static('public'));

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
  //__dirname : It will resolve to your project folder.
});

var port = process.env.PORT || 3000;

app.listen(port);

console.log("Running at Port 3000");

// need to use ejs to make templates. templates are NOT STATIC. similar to 
// how you use <?php echo $namevar ?> to fill in a value based on who 
// is logged in