var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const insert = function (value:any){
      let InsertDB = MongoClient.connect(url, function(err:any, db:any) {
        if (err) throw err;
        var dbo = db.db("ethdb");
        dbo.collection("promise").insertOne(value, function(err:any, res:any) {
          if (err) throw err;
          console.log("value inserted");
          db.close();
        });
      });
}

export const dbman = function(){
    return {
        insert
    }
}