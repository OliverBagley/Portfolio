var express = require('express');
var app = express();

//port
var port = process.env.PORT || 8080


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(__dirname + "/public"));

//routes
app.get("/", function(req, res) {
    res.render("index");
})

app.listen(port, function() {
    console.log("portfolio running");
})