

const express = require("express");
const app = express();


app.set('view engine','pug');
app.set('views','./views');

app.use("/static", express.static("public"))

app.get(("/",function(req,res){
    res.render('index',{title:'hey',message:"hello"})
}))



app.get(("/about",function(req,res){
    res.render('index',{title:'hey',message:"hello about"})
}))



app.get(("/test/:name",function(req,res){
    res.render('index',{title:'hey',message:`hello ${req.params['params']}`})
}))

app.use((req,res)=>{
    res.status(404);
    res.send("Not found");
})


app.listen(3000,()=>{
    console.log("Server starts on 3000 port");
})
//app.listen("0.0.0.0:3000")

//module.exports = () => {}