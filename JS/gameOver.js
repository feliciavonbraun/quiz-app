window.addEventListener('load', gameOver)

function gameOver() {
    displayWinOrLoseText();
    displayHighScore();
}

function displayWinOrLoseText() {

    const winOrLoseText = document.getElementById('winOrLoseText');

    if (GameIsWon) {
        winOrLoseText('You Won!');
    } else {
        winOrLoseText('Buu you lose, tyr again!');
    }
}

const restartBtn = document.getElementById('resartBtn').addEventListener('click', restartGame);

const clickedButton = event.target;   

function restartGame() {
    if (clickedButton.id == 'restartBtn') {
        // skicka till startgame igen
    }

}