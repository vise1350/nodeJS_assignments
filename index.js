const fs=require("fs");

let data="Node js is a open source run time env for javascript ."
fs.writeFile("nodeJS_architecture.txt",data,(err)=>{
    if(err){
        console.log("error in writing file")
    }
    console.log("file written successfully")
})


fs.appendFile("nodeJS_architecture.txt" ,"It is event driven and handles blocking and non blocking I/O requests",(err)=>{
    if(err){
        console.log("error in appending")
    }
    console.log("appended successfully")
})


fs.readFile("nodeJS_architecture.txt","UTF-8",(err,data)=>{
    if(err){
        console.log("error in reading fie")
    }
    console.log(data)
})

fs.unlink("nodeJS_architecture.txt",(err)=>{
    if(err){
        console.log("error in deleting the file ")
    }
    console.log("file deleted successfully")
})