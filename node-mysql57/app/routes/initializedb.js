var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res, next) {

      var sql = "CREATE DATABASE IF NOT EXISTS testedb";
      res.locals.connection.query(sql , function (error, results, fields) {
                if (error) throw error;
      });

      var sql = "USE testedb";
      res.locals.connection.query(sql , function (error, results, fields) {
                if (error) throw error;
      });

      var sql = "CREATE TABLE IF NOT EXISTS customers (name VARCHAR(255), address VARCHAR(255))";
      res.locals.connection.query(sql , function (error, results, fields) {
                if (error) throw error;
      });

      var sql = "CREATE TABLE IF NOT EXISTS users (id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY (id), name VARCHAR(255))";
      res.locals.connection.query(sql , function (error, results, fields) {
                if (error) throw error;
      });

      var sql = "INSERT INTO users (name) VALUES ('john')";
      res.locals.connection.query(sql , function (error, results, fields) {
                if (error) throw error;
      });

      var sql = "INSERT INTO users (name) VALUES ('mary')";
      res.locals.connection.query(sql , function (error, results, fields) {
                if (error) throw error;
      });

      var sql = "INSERT INTO customers (name, address) VALUES ('Company One Inc', 'Highway 1001')";
      res.locals.connection.query(sql , function (error, results, fields) {
                if (error) throw error;
      });

      var sql = "INSERT INTO customers (name, address) VALUES ('Company Two Inc', 'Highway 1002')";
      res.locals.connection.query(sql , function (error, results, fields) {
                if (error) throw error;
      });

      var sql = "INSERT INTO customers (name, address) VALUES ('Company Three Inc', 'Highway 1003')";
      res.locals.connection.query(sql , function (error, results, fields) {
                if (error) throw error;
                res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
      });


});

module.exports = router;
