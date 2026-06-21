async function getlivetime(){
      console.log("-----GETTING LIVE TIME");
      console.log("----- A LITTLE BIT OF PATIENCE");
      //i have async now lets get our url = 
      const url = "https://weather.gov";
      try{
         console.log("---ABOUT TO FETCH");
         const mettle = await fetch(url, {
             headers:{
                      "User-Agent" : "MyLearningApp/1.0 (contact: test@example.com)"
                     }
             });
         
         const mettle3 = await mettle.text();
         console.log(mettle3.substring(0,300));
         const mettle4 = JSON.parse(mettle3);
       //const mettle2 = await  mettle.json();
         console.log("I AM PARSING MANAULLY MY ID IS  "+ mettle4.id);
         console.log("here we are ! the time zone is : " + mettle4.properties.timeZone);
         console.log("i am parsing it manaully", mettle4.datetime);
        // console.log("here we are " + mettle2.datetime); 
      }catch(error){
           console.log("here we are  CONNECTTION FAILED");
           console.log("the errror is " + error.message);
      }
}
getlivetime()
        
       
         