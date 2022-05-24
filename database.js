var mysql=require("mysql")
var con=mysql.createConnection({
    host:"localhost",
    user:"8JsZgb4KH8",
    password:" UQMAuGGDZS",
    database:" UQMAuGGDZS"

})
con.connect((err)=>{
    if(err) throw err
     console.log("database connected")
})
module.exports=con;