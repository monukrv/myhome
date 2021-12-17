const mysql =require('mysql')

module.exports = mysql.createConnection({
  host              : "localhost",
  user              : "root",
  password          : "MkmkShiva@95",
  database          : "user_data",
  multipleStatements:true
});