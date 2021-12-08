const mysql =require('mysql')

module.exports = mysql.createConnection({
  host              : "localhost",
  user              : "root",
  password          : "Abcd@1234",
  database          : "user_data",
  multipleStatements:true
});