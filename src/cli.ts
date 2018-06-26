'use strict';

import { Core } from './core';
import  { dbman } from './dbman';
import { WSAEUSERS } from 'constants';
import { AsyncResource } from 'async_hooks';
const core = Core();
const dbMan = dbman();

// Get transactions from the current block and insert them into db
async function lockStoreTxfromB(number:number) {
    let blockInfo = await core.getBlockInfo(number);
    console.log("From block: ", number);


    for(var i=0; i< blockInfo.transactions.length; i++){
        //console.log("tx hash: ", blockInfo.transactions[i]);\
        
        let txHash = blockInfo.transactions[i];
        let tx = await core.getTx(txHash);
        // console.log("tx info : ", tx);
        dbMan.insert(tx);
    }
}


async function getLatestBlock(){
    let latestBln = await core.getLatestBlock()
    console.log("latest block: ", latestBln);
}
//lockStoreTxfromB(0);
// Get transactions from block 4000000 to 4000005
for(var i=3000000;i<3002000; i++){

    var number = i;

    lockStoreTxfromB(number);

}
// getLatestBlock()