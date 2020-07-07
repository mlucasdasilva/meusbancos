var mysql = require('mysql');

var con = mysql.createConnection({
  host: "db",
  user: "root",
  password: "password"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  con.query("CREATE DATABASE IF NOT EXISTS testedb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });

  con.query("USE testedb", function (err, result) {
    if (err) throw err;
    console.log("Use Database");
  });

  var sql = "CREATE TABLE IF NOT EXISTS customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

  var sql = "INSERT INTO customers (name, address) VALUES ('Company One Inc', 'Highway 1001')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  var sql = "INSERT INTO customers (name, address) VALUES ('Company Two Inc', 'Highway 1002')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  var sql = "INSERT INTO customers (name, address) VALUES ('Company Three Inc', 'Highway 1003')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

});
