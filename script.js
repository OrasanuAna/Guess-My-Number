'use strict';

//console.log(document.querySelector('.message').textContent);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#4caf50';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    // When quess is too high
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 'You lost the game';
    }

    // When quess is too low
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 'You lost the game';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  let score = 20;
  document.querySelector('.score').textContent = score;
  //document.querySelector('.guess').textContent = ' ';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
