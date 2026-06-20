const cryptoMarket= [
      {name:"BITCOIN", ticker: "BTC", price: 65000 , isLayer1:true},
      {name:"SOLANA", ticker:"SOL", price:6677, isLayer1 :true},
      {name: "chainlink", ticker:"LINK", price: 3657, isLayer1:false}
      ]
function maeket(marketlist){     
   for (let coins of marketlist){
    console.log("---RUNNING BLOCKCHAIN FILTER");
    
    if (coins.price > 1000){
       console.log("ALERT TIME TO INVEST IN " + coins.name + coins.price);
    }
   } 
}  

maeket(cryptoMarket);
