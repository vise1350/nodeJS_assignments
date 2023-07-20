const http=require("http");

const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.write("Welcome men and women to see your dummy data")
        
    
    res.end();
}






    else if(req.url=="/men"){


        const options={
            hostname:"fakestoreapi.com",
            path:"/products?limit=10",
            method:"GET"
        }
        
        const apiReq=http.request(options,(apiReq)=>{
            apiReq.on("data",(data)=>{
    
                res.statusCode=200;
                res.end(JSON.stringify(data.toString()))
            })
            apiReq.on("error",()=>{
                console.log(e)
            })
        
        })


        
        apiReq.end();}


    else if(req.url=="/women"){



            const options={
                hostname:"fakestoreapi.com",
                path:"/products?limit=10",
                method:"GET"
            }
                
            const apiReq=http.request(options,(apiReq)=>{
                apiReq.on("data",(data)=>{
            
                    res.statusCode=200;
                    res.end(JSON.stringify(data.toString()))
                })
                apiReq.on("error",()=>{
                    console.log(e)
                })
            })
                apiReq.end();
        }


        else{
            res.write("page not found")
        }
        res.end();



    })
server.listen(4001);
console.log("listening on 4001");



   