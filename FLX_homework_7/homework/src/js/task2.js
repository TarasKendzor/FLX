'use strict';
let gameStart = confirm('Do you want to play a game?');
let maxTries = 3;
let max = 5;
let gain = 0;
let userNumb, randomNumber, nextLevel;
let prize = 10;
if (gameStart) {
  while (maxTries) {
      if (maxTries === 3) {
        nextLevel = prize;
      }
      randomNumber = Math.floor(Math.random() * (max + 1));
      userNumb = parseInt(prompt(' Enter a number from 0 to ' +
      (max) + '\n Attempts left: ' + (maxTries--) + '\n Total prize: ' +
       gain + ' $' + '\n Possible prize on current attempt: ' + prize + ' $',''));
      if (randomNumber === userNumb) {
          max *= 2;
          gain += prize;
          prize = nextLevel * 3;
          maxTries = 3;
          alert('Congratulation! Your prize is: ' + gain + '$' + ' Do you want to continue?')
      } else {
        prize = Math.floor(prize / 2);
      }
      if (maxTries === 0) {
        alert('Thank you for a game. Your prize is: ' + gain + '$');
        gameStart = confirm('Do you want to play again?');
        if (gameStart) {
            maxTries = 3;
            gain = 0;
            max = 5;
            prize = 10;
        }
    }
  }
} else {
  alert('You did not become a millionaire, but can');
}














