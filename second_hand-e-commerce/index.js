const express = require("express");
const path = require("path");//contains methods to help with path concatenation
const { title } = require("process");

//set up express app
const app = express();//express() is a function to initialize an express app
//initiate an express app
const port = process.env.PORT || "8888";

//set up template engine
app.set("views", path.join(__dirname,"templates"));
//set views to use the <app_directory>/templates folder to store template file
app.set("view engine","pug");//set express to use pug as the template(view) engine

//set up folder for static files(css,client-side js)
app.use(express.static(path.join(__dirname,"public")));

//Test app path
app.get("/",(request,response)=>{
    //response.status(200).send("Test");
    response.render("index",{title:"Home"});
});
app.get("/about",(request,response)=>{
    response.render("about",{title:"About us"});
})

//set up server listening
app.listen(port,()=>{
    console.log(`Listening at http://localhost:${port}`);
})