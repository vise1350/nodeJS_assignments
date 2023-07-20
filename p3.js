const express=require("express");
const app=express();


app.get("/",(req,res)=>{
    res.send("I am homepage")
})
app.get("/about",(req,res)=>{
    res.send("I am about page")
})
app.get("/contact",(req,res)=>{
    res.send("email: @pwskills.com")
})

app.listen(4002);
console.log("server running successfully on 4002")