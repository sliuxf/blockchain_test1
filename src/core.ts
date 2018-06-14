'use strict';

const Web3 = require("web3");		// recommand use require() instead of import here
const web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('http://127.0.0.1:8545'));


//the most recent block number
const getCurrentBlockNumber = async function() {
    let n
    try {
        n = await web3.eth.getBlockNumber()
        console.log("block number", n)

    } catch (e) {
        console.log(e);
        return [];
    }
    return n;
};

// Get the block with certain block number
const getBlockInfo = async function(blkNum: number){
    let blockInfo = await web3.eth.getBlock(blkNum)
    return blockInfo
}

// Get the 3741936th block for testing
const getBlock = async function(){
   let blockInfo = await web3.eth.getBlock(3741936);
   return blockInfo
}



export const Core = function () {
    return {
      eth: web3.eth,
      getCurrentBlockNumber,
      getBlockInfo,
      getBlock
    };
  };




// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("ethdb");
//     var n = 20000;
//     var i;
//     var myobj = [];
//     for (i=0;i<n;i++) {
//         // myobj.push(web3.eth.getBlock(i));
//         //web3.eth.getBlock(i).then(console.log);
        
       
//         dbo.collection("day2").insert(web3.eth.getBlock(i), function(err, res) {
//         if (err) throw err;
//         //console.log("Number of documents inserted: " + res.insertedCount);
//         db.close();
//         });
//     }
//   });