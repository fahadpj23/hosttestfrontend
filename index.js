var express=require("express");
var app=express();
var cors=require("cors");
const upload=require('express-fileupload')
app.use(upload())
app.use(cors());



app.get("/fake",function(req,res)
 {
    // searchqr=`SELECT name,image,mrp,price FROM headset`
    // con.query(searchqr,(err,result,fields)=>{

    //   if(err) throw(err);
    //   res.json( [result] )
      
//   }) 
res.json({"dsd":"dsds"})
  
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

    

app.listen(process.env.PORT || 9000,function(){
    console.log("server started")
})


