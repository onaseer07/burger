//importing the orm module;
var orm = require('../config/orm.js');

//create burgers db function to perform CRUD operations
var burgers = {

    selectAll: function(cb){
        orm.selectAll('burgers',function(res){
            cb(res);
        });
    },

    insertOne: function(burgerNameVal,cb){
        orm.insertOne('burgers',burgerNameVal,function(res){
            cb(res);
        })
    },

    updateOne: function(idEqualTo,cb){
        orm.updateOne('burgers',idEqualTo,function(res){
            cb(res);
        })
    }
};
//Exporting db operations
module.exports = burgers;