// Adding default img into the game

let img1 = (document.getElementById("img1").src = "/images/dice6.png");
let img2 = (document.getElementById("img2").src = "/images/dice6.png");

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
console.log(randomNumber2);

document.getElementById("img1").src = `/images/dice${randomNumber1}.png`;
document.getElementById("img2").src = `/images/dice${randomNumber2}.png`;

if (randomNumber1 > randomNumber2) {
  document.getElementById("heading").innerHTML = `🚩Player 1 wins!`;
} else if (randomNumber2 > randomNumber1) {
  document.getElementById("heading").innerHTML = `Player 2 wins!🚩`;
} else {
  document.getElementById("heading").innerHTML = `Draw!📍`;
}
