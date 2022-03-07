// const path = require('path');
const express = require('express')
const app = express();

app.get("/", (req,res)=>{
res.send("Hello world from my side")
});
app.get("/books", (req,res)=>{
res.send({ route: "/books"})
});
app.get("/libraries", (req,res)=>{
res.send({ route: "/libraries", permission: true})
});
app.get("/authors", (req,res)=>{
res.send( { route: "/authors", permission: true})
});


function checkPermission(req,res,next){
    if(req.path == "/libraries"){
      return res.send('/libraries')
    }
    
    if(req.path == "/authors"){
     return res.send('/authors')
    }
    else{
        return("404 error page is not found")
    }
    
    next();

}




function logger(req,res,next){
    console.log("Before route handler logger")
    next();
    console.log("after route handler logger")
}
app.listen(3050,()=>{
    console.log("listening the port at 3050")
})

