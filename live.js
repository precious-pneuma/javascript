async function getLiveChain(){
      console.log("---ACCESSING THE WEB---");//printing these to the scrreen first
      
      const url = "https://blockchain.info";//my const that hold the url 
      try{
          const rawForm = await fetch(url);
          
          const rawText = await rawForm.text();
          
          const deepText = Number(rawText);
          const deepNo = parseFloat(rawText);
          
          console.log("here are the total No,s : " + deepText);
          console.log("found float " + deepNo );
       }
       catch (error){
             console.log("SORRY UNABLE TO REACH THE INTERNET NOW __");
             console.log("error that occurred must be " + error.message);
       }
}

getLiveChain()