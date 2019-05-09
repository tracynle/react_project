// This file connects to your mysql workbench along with your jawsdb from heroku
var mysql = require('mysql');

var connection;
if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local. Be sure to change the password so you can connect the db to your workbench
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: process.env.MSQL_PASS,
        database: process.env.MYSQL_DB
    })
};

var mysql = require('mysql');