'use strict';
// const ps = require("prompt-sync");
// const prompt = ps();

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log('Hello world')

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

let displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When There is No Input

  if (!guess) {
      displayMessage('❌ Please Enter a Number MF');
  } else if (guess > 20 || guess < 1) {
      displayMessage('Please Enter a number between 1 and 20...');
  }

  //When Player Wins
  else if (guess === secretNumber) {
    displayMessage('Correct Number! 🎉');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //When Guess is Wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too High' : '📉Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost The Game👎');
      document.querySelector('.score').textContent = 0;
    }
}
// else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too Low!📈';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You Lost The Game👎';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
