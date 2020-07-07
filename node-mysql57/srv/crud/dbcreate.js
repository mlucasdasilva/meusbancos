var mysql = require('mysql');

var con = mysql.createConnection({
  host: "db",
  user: "root",
  password: "password"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  con.query("CREATE DATABASE IF NOT EXISTS learners", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });

  con.query("USE learners", function (err, result) {
    if (err) throw err;
    console.log("Use Database");
  });

  var sql = "DROP TABLE IF EXISTS `learnerdetails`;";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table droped");
  });

  var sql = "";
  var sql = sql + " CREATE TABLE IF NOT EXISTS learnerdetails ("
  var sql = sql + "    learner_id INT NOT NULL AUTO_INCREMENT,"
  var sql = sql + "    learner_name VARCHAR(255),"
  var sql = sql + "    learner_email VARCHAR(255),"
  var sql = sql + "    course_id INT,"
  var sql = sql + "    PRIMARY KEY(learner_id)"
  var sql = sql + "  );"
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

  var sql = ' INSERT INTO learnerdetails ( learner_name, learner_email, course_id ) VALUES ("john","john@mail.com",50);';
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  var sql = ' INSERT INTO learnerdetails ( learner_name, learner_email, course_id ) VALUES ("mary","mary@mail.com",50);';
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  var sql = ' INSERT INTO learnerdetails ( learner_name, learner_email, course_id ) VALUES ("peter","peter@mail.com",50);';
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  var sql = "DROP PROCEDURE IF EXISTS `learnerAddOrEdit`;";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Store Procedure droped");
  });

  var sql = "";
//  var sql = sql + " DELIMITER $$";
  var sql = sql + " CREATE DEFINER=`root`@`localhost` PROCEDURE `learnerAddOrEdit`(";
  var sql = sql + "   IN _learner_id INT,";
  var sql = sql + "   IN _learner_name VARCHAR(255),";
  var sql = sql + "   IN _learner_email VARCHAR(255),";
  var sql = sql + "   IN _course_id INT";
  var sql = sql + " )";
  var sql = sql + " BEGIN";
  var sql = sql + "   IF _learner_id = 0 THEN";
  var sql = sql + "   INSERT INTO learnerdetails(learner_name,learner_email,course_id)";
  var sql = sql + "   VALUES (_learner_name,_learner_email,_course_id);";
  var sql = sql + "   SET _learner_id = last_insert_id();";
  var sql = sql + "   ELSE";
  var sql = sql + "   UPDATE learnerdetails";
  var sql = sql + "   SET";
  var sql = sql + "   learner_name = _learner_name,";
  var sql = sql + "   learner_email = _learner_email,";
  var sql = sql + "   course_id = _course_id";
  var sql = sql + "   WHERE learner_id = _learner_id;";
  var sql = sql + "   END IF;";
  var sql = sql + "   SELECT _learner_id AS 'learner_id';";
  var sql = sql + " END ";
//  var sql = sql + " END $$";
//  var sql = sql + " DELIMITER ;";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Store Procedure created");
  });

  con.query("SELECT * FROM learnerdetails", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

});

