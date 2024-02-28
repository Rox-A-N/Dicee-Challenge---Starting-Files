// Generate a random number from 1 to 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Get the dice image element- create new variable to select image element
var diceImage1 = document.querySelector('.img1');
var diceImage2 = document.querySelector('.img2');

// Set the source of the image based on the random number
diceImage1.setAttribute('src', './images/dice' + randomNumber1 + '.png');
diceImage2.setAttribute('src', './images/dice' + randomNumber2 + '.png');


// Display which player won, or that it was a draw
var result = document.querySelector('h1');

if (randomNumber1 === randomNumber2) {
    result.innerHTML="Draw!";
}
else if (randomNumber1 >  randomNumber2) {
    result.innerHTML="🚩 Player 1 Wins!";
}
else {
    result.innerHTML="Player 2 Wins! 🚩"
}

// Button to reroll
document.getElementById("rollButton").addEventListener("click", function() {
    location.reload();
});
