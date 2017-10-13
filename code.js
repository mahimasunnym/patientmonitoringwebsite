var mysql = require('mysql');
var express = require('express');
var app = express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'mahima',
  database : 'MedicalData'
});
connection.connect();
//alan
var queryString = 'SELECT * FROM Readings';
//getdata
function getData(callback) {
    connection.query(queryString, function(err, rows, fields) {
        if (err) throw err;
        callback(rows);
    });
}

module.exports = getData;
