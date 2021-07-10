'use strict';

  function getRandomIntInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    } 


  function getRandomString(length) {
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for ( let i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
     return result;
    }}
   
    
  document.getElementById('btn').addEventListener("click", function(){
    console.log(getRandomString(4));
    console.log(getRandomIntInRange(10, 1000)); 

});


 //const bandnumber = ;
  
 // const bandname = document.querySelector(".bandname");

 // bandname.innerText=;


