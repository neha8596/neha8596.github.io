var express =require("express");
var app=express();

var bodyParser=require("body-parser");
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
	res.render("home");
});

app.get("/education",function(req,res){
	res.render("education");
});

app.get("/projects",function(req,res){
	res.render("projects");
});

app.get("/experience",function(req,res){
	res.render("experience");
});

app.get("/contact",function(req,res){
	res.render("contact");
});

app.listen(process.env.PORT||3000,function(){
	console.log("Server listening on port 3000");
});