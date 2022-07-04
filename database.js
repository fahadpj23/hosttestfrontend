var mysql=require("mysql")
var con=mysql.createConnection({
    host     : 'remotemysql.com',
    user     : '8JsZgb4KH8',
    password : 'XF8jeAgL9E',
    database : '8JsZgb4KH8'
   


})
con.connect((err)=>{
    if(err) throw err
     else console.log("database connected successfully")
})
module.exports=con;