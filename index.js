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
res.json({"dsd":"sdds"})
  
})

    

app.listen(process.env.PORT || 9000,function(){
    console.log("server started")
})


