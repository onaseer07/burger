//importing the mysql package;
var mysql = require('mysql');
//creating a config object pointing to mysql server
var connection = mysql.createConnection(
    {
        host:'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'burgers_db'
    }
);
//creating a connection to mysql and logging an error if failed to connect
connection.connect(function(err){
    if (err) {
        console.error('error connection: ' + err.stack);
        return;
    }
    console.log('connected as id: ' + connection.threadId);
});
//exporting the connection module to be used for orm, models and controller
module.exports  = connection;