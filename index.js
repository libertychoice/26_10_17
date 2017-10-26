console.log("hello");
const os = require('os');
const a = () =>{
    return 5
}

module.exports = {
    test: a,
    test_3: 3
}

//console.log(os);

const express = require("express");
const app = express();


app.all("/",(req,res,next)=>{
   // res.json({
   //          hello:"world"
   //      })

   req.test_field = "Test Field";
   next();
})



app.get("/",(req,res,next)=>{
    res.status(200);
    res.setHeader("Content-type","text/html")
    //res.setHeader("Content-type","plain/text") //try to save text
    res.send(
        `<h1>TEEEST</h1>`
    )
   // res.json({
   //     hello:"world"
   // })
})
//app.all
//app.get
//app.post
//app.put
//app.delete

app.listen(3000,()=>{
    console.log("Server starts on 3000 port");
})
//app.listen("0.0.0.0:3000")

//module.exports = () => {}