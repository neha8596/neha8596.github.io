var express =require("express");
var app=express();

app.set("view engine","ejs");
app.use(express.static('public'));


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


//URL of the application :- https://infinite-lowlands-88093.herokuapp.com/
app.listen(process.env.PORT||3000,function(){
	console.log("Server listening on port 3000");
});