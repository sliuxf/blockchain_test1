'use strict';

import { Core } from './core';
const core = Core();
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// Use getBlockInfo to get transactionHash in Blocks
async function lockStoreTxfromB(number:number) {
    let blockInfo = await core.getBlockInfo(number);

    for(var i=0; i< blockInfo.transactions.length; i++){
        console.log("tx from block: ", blockInfo.transactions[i])
        //txHash.push(blockInfo.transactions[i])
    }
    //return txHash;
}

// Get transactions from block 3000000 to 3000020
for(var i=3000000;i<3000020; i++){
    var number = i;
    lockStoreTxfromB(number);
    
}

// Store transaction hash into Mongodb
// TBC...

// console.log("block number is: ", i)
    // MongoClient.connect(url, function(err, db) {
    //     if (err)  throw err;
    //     var txHash = StoreTxfromBlock(number);
    //     for (var j = 0; j < txHash.length; j++) {
    //         dbo.collection("day2").insert(txHash[j], function(err, res) {
    //             if (err) throw err;
    //             //console.log("Number of documents inserted: " + res.insertedCount);
    //             db.close();
    //             });
    //     }
    // })



