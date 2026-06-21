async function trackEthereumGas(){
           console.log("------ TRACKING GOING THROUGH SERVER---- /n -----");
      //create ny url
           const web = "https://githubusercontent.com";
      
           try{
               console.log("---REACHING OUT TO PUBLIC DEVELOPER REGISTRIES");
          //we need to fetch and parse
               const web1 = await fetch(web);
               const web2 = await web1.text();
               console.log(web2.substring(0,50));
          //parsing
               const web3 = JSON.parse(web2);
          
               console.log("----GETTING DEPENDENCIES----");
          
               const web4 = web3.dependencies;
               console.log("---- SCANNING FOR PLUGINS");
          
               for (let webhats of object.keys(web4)){
          
                 if (webhats.includes ("hardhat") || webhats.includes("ethers")){
                     console.log(" --FOUND WEB3 / EVM MODULE: " + webhats);
                 }
               }
           } catch (error){
          console.log("something went wrong");
          console.log("reason is :  " + error.message);
             }
     } 
     
 trackEthereumGas();                     