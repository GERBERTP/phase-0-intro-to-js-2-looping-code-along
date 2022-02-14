// Code your solutions in this file
/*
for ([initialization]; [condition]; [iteration]) {
  [loop body]
} 
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }
*/
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    } ;
    return gifts;
};
wrapGifts(gifts);

const cards = ["Blue", "Green", "Purple"]

function writeCards(cards) {
    let writeCardsNew = []
  for (let g = 0; g < cards.length; g++) {
    
    writeCardsNew.push(`Thank you, ${cards[g]}, for the wonderful surprise gift!`)
 };
 
 return writeCardsNew
};
function countDown () {
let countDown = 10
    while (countDown > -1) {
        console.log(countDown -- );
    };
};