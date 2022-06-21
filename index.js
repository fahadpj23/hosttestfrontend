var express=require("express");
var app=express();
var cors=require("cors");
const upload=require('express-fileupload')
app.use(upload())
app.use(cors());
var bodyParser=require("body-parser");
var jsonParser=bodyParser.json();
var parseUrlencoded = bodyParser.urlencoded({ extended: true }); 


const con=require('./database')
app.get("/fake",function(req,res)
 {
    // searchqr=`SELECT name,image,mrp,price FROM headset`
    // con.query(searchqr,(err,result,fields)=>{

    //   if(err) throw(err);
    //   res.json( [result] )
      
//   }) 
res.json({"dsd":"dsdsvggcgc"})
  
})
app.get("/first",function(req,res)
 {
    // searchqr=`SELECT name,image,mrp,price FROM headset`
    // con.query(searchqr,(err,result,fields)=>{

    //   if(err) throw(err);
    //   res.json( [result] )
      
//   }) 
res.json({"dsd":"HIiiiiiiiiiiiiiii"})   
  
})

app.get("/second",function(req,res)
 {
    searchqr=`SELECT * from user`
    con.query(searchqr,(err,result,fields)=>{

      if(err) throw(err);
      res.json( result )
      
  }) 
// res.json({"dsd":"HIiiiiiiiiiiiiiii"})   
  
})

app.get("/userlogin",function(req,res)
 {
    searchqr=`SELECT * from user`
    con.query(searchqr,(err,result,fields)=>{

      if(err) throw(err);
      res.json( result )
      
  }) 
// res.json({"dsd":"HIiiiiiiiiiiiiiii"})   
  
})
app.post("/login",(req,res)=>{
    logincheck=`select COUNT(*) as count from user where username='${req.body.username}' and password='${req.body.password}'`
    console.log(logincheck)
    con.query(logincheck,(err,result)=>{
        if(err) throw (err)
        else
        {
                if(result[0].count==0)
                {
                    res.json({"error":"login failed"})
                }
                else
                {
                    res.json({"success":"login success"})
                }
        }
    })
})

    

app.listen(process.env.PORT || 9000,function(){
    console.log("server started")
})


