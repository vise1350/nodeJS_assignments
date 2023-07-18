const http=require("http");


const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.write(" <h1>I am happy to learn Full Stack Web Dev from PW SKILLS !!!!</h1>")
        

    }
    res.end();
 
})
server.listen(5000);
console.log("server working properly")


