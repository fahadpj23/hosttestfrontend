var mysql=require("mysql")
var con=mysql.createConnection({
    host:"127.0.0.1",
    user:"8JsZgb4KH8",
    password:" UQMAuGGDZS",
    database:" 8JsZgb4KH8",
    dialect:"mysql"

})
con.connect((err)=>{
    if(err) throw err
     console.log("database connected")
})
module.exports=con;