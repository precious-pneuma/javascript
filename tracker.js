async function trackEthereumGas(){
       console.log(" STARTING LIVE BLOCKCHAIN GAS TRACKER.....");
       
       const url = "https://blocknative.com";
       const testurl = "https://githubusercontent.com";
       
       try{
           console.log("REACHING OUT TO THE PUBLIC DEVELOPER REGISTRIES");
           const response= await fetch(testurl);
           //capture raw text safely
           const rawText = await response.text();
           console.log(" ----RAW PACKET INTERCEPTED");
           console.log(
      rawText.substring(0,400));
           //parse the text stream into a smart serachable array 
           const text1=JSON.parse(rawText);
           console.log("---ANALYSIS PIPELINE ALIVE ----");
           console.log("TOTAL DEVELOPERS TRACKED ON CHAIN : " + text1.length);
           //looping through to find matching custom 
           for (let dev of text1){
               if (dev.name.toUpperCase().startsWith("A")){
               console.log(" FOUND PREMIUM VALIDATOR: " + dev.name + "(" + dev.twitter+")");
                   }
               }
        } catch (error){
            console.log(" ===RADAR LOSS: CHAIN DATA DISCONNECTED");
            console.log(" the diagnostic reason is :  " + error.message);
        }
}
trackEthereumGas();
