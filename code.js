var mysql = require('mysql');
var express = require('express');
var app = express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'MedicalData'
});
connection.connect();

var queryString = 'SELECT * FROM Readings';
 



function getData(callback) {
    connection.query(queryString, function(err, rows, fields) {
        if (err) throw err;
        callback(rows);
    });
}

module.exports = getData;