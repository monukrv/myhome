const mysql =require('mysql');
const { urll } = require('../myhome/src/variable');

module.exports = mysql.createConnection({
  host              : "128.199.16.143",
  user              : "root",
  password          : "MkmkShiva@95",
  database          : "user_data",
  multipleStatements:true
});