var mysql=require("mysql")
var con=mysql.createConnection({
    host     : 'remotemysql.com',
    user     : '8JsZgb4KH8',
    password : 'pJCkYopx4u',
    database : '8JsZgb4KH8'
   


})
con.connect((err)=>{
    if(err) throw err
     console.log("database connected")
})
module.exports=con;