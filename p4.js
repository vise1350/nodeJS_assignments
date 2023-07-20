const express=require("express");
const app=express();


let x= (Math.random());
let y=Math.floor(x*10);

const z=(y*y)

app.get("/random",(req,res)=>{
    res.send(`{random:"${z}"}`)
})

app.listen(8081);
console.log("Server listening on port 8081")