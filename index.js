'use strict';

function getRandomIntInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    } 

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
function getRandomString(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }   
    return result;
}

let randomBandName = document.getElementById('btn').addEventListener("click", () => {
    document.getElementById('bandname').innerHTML = getRandomString(3) + getRandomIntInRange(0, 1000);
});


