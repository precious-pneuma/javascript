// an array (list ) filled with objects (structured data)
const cryptoMarket = [
      { name : "Bitcoin", ticker : "BTC", price:65000 ,isLayer1:true}, 
      {name :"Ethereum", ticker:"ETH", price :3500,isLayer1:true},
      {name :"Solana",ticker :"SOL", price:140 ,isLayer1:true},
      {name:"Chainlink", ticker :"LINK", price: 15, isLayer1:false}
];
//the loop : for "every single item (let coin) inside the list of cryptos
for (let coin of cryptoMarket){
    //check if the coins price is greater than 1000
    if (coin.price > 10000){
        console.log("EXPENSIVE ASSET : " + coin.name + " ($" + coin.price + ")");
    }
}
/*  console.log("-------------------");
    console.log("Asset ticker : " + coin.ticker);
    console.log("Asset price : " , coin.name);
    };*/
    