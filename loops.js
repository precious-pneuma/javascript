// an array (list ) filled with objects (structured data)
const cryptoMarket = {
       1:["Bitcoin",  "BTC", 65000 ,true], 
      2:["Ethereum", "ETH", 3500,true],
      3:["Solana","SOL", 140 ,true],
      4:["Chainlink", "LINK",  15, false]
};
//the loop : for "every single item (let coin) inside the list of cryptos
for (let coin of Object.values(cryptoMarket)){
    //check if the coins price is greater than 1000
    if (coin[2] > 10000){
        console.log("EXPENSIVE ASSET : " + coin[0] + " ($" + coin[2] + ")");
    }
}
/*  console.log("-------------------");
    console.log("Asset ticker : " + coin.ticker);
    console.log("Asset price : " , coin.name);
    };*/
    