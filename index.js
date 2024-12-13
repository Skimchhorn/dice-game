function randomDice(){
 return Math.floor(Math.random()*6)+1;
}
console.log(dicePlayer1);

var dicePlayer1 = randomDice();
var dicePlayer2 = randomDice();
document.querySelector(".img1").setAttribute("src", "./images/dice" + dicePlayer1 + ".png" ); 
document.querySelector(".img2").setAttribute("src", "./images/dice" + dicePlayer2 + ".png" );
console.log(dicePlayer1);
console.log(dicePlayer2);
if(dicePlayer1 > dicePlayer2){
    document.querySelector("h1.text").textContent= "Player 1 is the winner";
}
else if(dicePlayer1 < dicePlayer2){
    document.querySelector(".text").textContent= "Player 2 is the winner";
}
else {
    document.querySelector(".text").textContent="Draw!!";
}