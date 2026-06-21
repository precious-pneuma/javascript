//a function to fetch live blockchain data from a free public api
async function getLiveCryptoPrice(){
    console.log("fetching live data from the internet ......");
    //using a stable public endpoint
    const url = "https://cryptocompare.com";
    try{
    //sending request to the server
       const response = await fetch(url);
       
       const rawtext = await response.text();
       console.log("-----RAW SERVER OUTPUT RECORDED-----");
       console.log(rawtext.substring(0, 300));
       //try parsing
       const data = json.parse(rawtest);
       console.log("CURRENT ETH PRICE : $ " + data.USD);
    }catch(error){
         console.log(" API CONNECTION FAILED!");
         console.log("reason : " + error.message);
    }
}
    /*/defensive check if the server returns an error status
        if (!response.ok){
           throw new Error("server sent back an http error: " +  response);
        }
    
    //turning the raw reponse into a reusable javascript object 
        const data = await response.json();
        console.log("----LIVE FEED SUCCESS-----");
       
    //pringing out the raw data so we can know what it looks like 
        console.log("Raw Api Response: ", data);
        console.log("current Eth price: $" + data.USD);
    } catch (error) {
      //if the internet drops or server block these block will run
         console.log("⚠️ API CONNECTION FAILED!");
         console.log("reason " + error.message);
    }*/
 
 
 


getLiveCryptoPrice()