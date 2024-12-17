const express=require("express");
const app=express()
app.use(express.json());

app.get('/',(req,res)=>{
    res.json( "hi there");
});

app.listen(3000,()=>{
    console.log("server is started on 3000 port")
});
