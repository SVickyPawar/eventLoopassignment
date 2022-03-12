const express=require("express");

const app=express();


app.get("/home",(req,res)=>{
    res.send("Hello");
});

app.get("/books",(req,res)=>{
    res.send({
        ikigai:"Japanese book",
        number:"Now discovered",
        harryPotter:"Massive success",
        richDad:"Financial literacy"
    });
})

app.listen(4000,function(){
    console.log("Listening port 4000");
})