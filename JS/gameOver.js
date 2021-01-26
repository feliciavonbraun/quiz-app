
// function gameOver() {
//     displayWinOrLoseText();
//     displayHighScore();
// }

// function displayWinOrLoseText() {

//     const winOrLoseText = document.getElementById('winOrLoseText');

//     if (GameIsWon) {
//         winOrLoseText('You Won!');
//     } else {
//         winOrLoseText('Buu you lose, tyr again!');
//     }
// }

// const restartBtn = document.getElementById('resartBtn').addEventListener('click', restartGame);

// const clickedButton = event.target;   

// function restartGame() {
//     if (clickedButton.id == 'restartBtn') {
//         // skicka till startgame igen
//     }

// }

function presentWinner() {

  let winnerText = document.getElementById('winOrLoseText');

  if (gameIsWon == true) {
    winnerText.innerHTML = 'Congratulations! You Win!';
  } else {
    winnerText.innerHTML = '${botName} is the winner!';
  }

}

function restartGame() {
  let restartButton = document.getElementById('restartBtn');

  restartButton.addEventListener('click', () => {
    //skicka till index.html
    //kanske byta knapp till <a> med href till index.html
  });
}

//TODO:

//gameIsWon variabel
//funktion för att se vems tur det är
//Fungerande restart-button
//spara vinnande bots namn i variabel
//statistik av botar (localstorage)
//ranking av botar (localstorage)