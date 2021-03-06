//importing the connection module from same directory
var connection = require('./connection.js');
//creating an orm structure object with method to call the functions in models 
var orm = {
    //select all burgers info from the db with params table and callBack
    selectAll:function(){
        var queryString = 'SELECT * FROM burgers';
        connection.query(queryString,function(err, result){
            if (err) throw err;
            console.log(result);
        });
    },
    //setting up insert method with params table , values
    insertOne:function(burgerNameVal,callBack){
        var queryString = 'INSERT INTO burgers VALUES(?,false)'; 
        connection.query(queryString,burgerNameVal.toString(),function(err,result){
            if(err) throw err;
            console.log(result);
            // callBack(result);
        }); 
    },
    //updating the db by creating params table, column with WHERE clause = valequalto(id)
    updateOne:function(idEqualTo,callBack){
            var queryString = 'UPDATE burgers SET devoured = true WHERE id = ?';
            connection.query(queryString,idEqualTo,function(err,result){
                if(err) throw err;
                console.log(result);
                // callBack(result);
            });
    },
};
//exporting the orm modules to be used in models
module.exports = orm;