const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'mydb',
  });

  connection.connect(function(err) {
    if (err){
      console.log("Error while connecting to database: ",err);
      throw err;
    }else{
      console.log("Connected with mysql db!...");
    }
    
  });


// connection.query(`SELECT  * FROM fse_lead WHERE lead_id=1`,(error,list)=>{
//     if(error){
//         console.log("error occured",error);
//     }else{
//         console.log(list);
//     }
// })

module.exports=connection;