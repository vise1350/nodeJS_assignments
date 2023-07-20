const express=require("express")
const app=express();
let count=0
app.get("/",(req,res)=>{
    res.send(`{counter}:${count}`)
})

app.get("/increment",(req,res)=>{
    res.send(`{counter}:${count+1}`)
})

app.get("/decrement",(req,res)=>{
    res.send(`{counter}:${count-1}`)
})

app.listen(3003)
console.log("Working fine on port 3003")




