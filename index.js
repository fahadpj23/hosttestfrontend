var express=require("express");
var app=express();
var cors=require("cors");
const upload=require('express-fileupload')
const path = require('path')
app.use(upload())
app.use(cors());

var bodyParser=require("body-parser");
var jsonParser=bodyParser.json();
var parseUrlencoded = bodyParser.urlencoded({ extended: true });
app.use(express.static('public')); 
app.use('products/images', express.static('images'));
app.use(express.static(path.join(__dirname, 'products')))



const con=require('./database')

app.get("/fake",function(req,res)
 {
   
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
})
// res.json({"dsd":"HIiiiiiiiiiiiiiii"})   
  
app.post("/imageAdd",parseUrlencoded,(req,res)=>{
    
    // let file= req.files.image
                
    // file && file.mv(`products/images/${Math.round(new Date().getTime()/1000)}${file.name}`)
    // bannerimageAdd=`insert into image (productImage) values ( '${Math.round(new Date().getTime()/1000)}${file.name}')`
    // con.query(bannerimageAdd,(err,result)=>{
    //     if(err) throw (err)
    //     else
           
                res.json({"success":"image added successfully"})
            
    // })
})



    

app.listen(process.env.PORT || 9000,function(){
    console.log("server started")
})


