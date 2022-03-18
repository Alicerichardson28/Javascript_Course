'use strict';


// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// create random number
let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When guess is no input
    if(!guess) {
        document.querySelector('.message').textContent = '⛔️ No Number!';

    // When player wins
    }else if (guess === secretNumber){
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        // change the color of the page
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        
    // When guess is too high
    }else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too high!';
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '🎇 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    // When guess is too low
    }else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '🎇 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
});

// Implement a game rest functionality, so that the player can make a new guess!
document.querySelector('.again').addEventListener('click', function() {
    // reassign variable
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';

    // reset the value to empty string
    document.querySelector('.guess').value = '';
    
    // change the background color
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})