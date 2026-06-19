// an array (list ) filled with objects (structured data)
const cryptoMarket = [{ name : "Bitcoin", ticker : "BTC", price:65000}, {name :"Ethereum", ticker:"ETH", price :3500}, {name :"Solana", ticker :"SOL", price:140}
];
/*reading  a specific item out of the list lets grab
etherrum position 1, since bitcoin is position 0)*/
const ethData = cryptoMarket[1];
//prinitng it out to see th values
console.log("Found Asset:", ethData.name);
console.log("Current Price: $", ethData.price);