//import newly imported module
const axios = require("axios");
async function getBitcoinData(){
      console.log("    --QUERYING MEMPOOL NODES VIA AXIOS PACKAGE----");
      const url = "https://mempool.space";
      try{
         const response = await axios.get(url);
         const feeData = response.data;
         
         console.log("----NETWORK FEED STATUS:  SUCCESS");
         console.log("minimum transaction fee rate:  " + feeData.minimumFee  + " sat/vB");
         console.log("fastest priority fee rate :  " + feeData.fastestFee + "  sart/vB");
         if (feeData.minimumFee < 15 ){
             console.log(" 🟢 BLOCKCHAIN NOTICE: Gas is cheap! Perfect Time To Deploy A Smart Contract");
             }else{
             console.log(" 🔴 BLOCKCHAIN NOTICE: Gas is expensive;  congestion detected stand down ");
             }
       }
        catch (error){
             console.log(" ❌ PIPELINE DIVERTION ERROR ENCOUNTERED ");
             console.log("details :  " + error.message);
        }
        
}
getBitcoinData();