window.addEventListener('load', gameOver)

let userScore = localStorage.getItem('userScore');
let botOneScore = localStorage.getItem('botOneScore');
let botTwoScore = localStorage.getItem('botTwoScore');
let botThreeScore = localStorage.getItem('botThreeScore');
let createUsername = localStorage.getItem('createUsername');
// let answer;  // kanske kan sätta i answer i LS eller SS för att hämta det här??
let currentPlayer = 0;
let currentScore = 0;
// let userGuess;

function gameOver() {
  // displayWinOrLoseText();
  displayHighScore();
}

// function displayWinOrLoseText() {
//   // men answer finns inte i LS??? hmmm
//   // om userScore ökar 
//   if (userGuess === answer) {
//     document.getElementById("winOrLoseText").innerHTML = "YAY you win";
//   } else {
//     document.getElementById("winOrLoseText").innerHTML = "Buu try again";
//   }
// }

function displayHighScore() {
  const highScoreArray = [ 
    { 
      playerName: createUsername,
      score: userScore,
    },
    {
      playerName: "Schmickle",
      score: botOneScore,
    },
    { 
      playerName: "T-1001",
      score: botTwoScore, 
    },
    { 
      playerName: 'Dicy Dyed Die',
      score: botThreeScore, 
    },   
  ]
  
  // Sort array after amount of score 
  let sortedPlayers = highScoreArray.sort(function(a, b){
    return b.score - a.score;
  });
  console.log(highScoreArray)
  console.log(sortedPlayers)

  // Displays all names
  document.getElementById("displayPlayerName0").innerHTML = sortedPlayers[currentPlayer].playerName;
  document.getElementById("displayPlayerName1").innerHTML = sortedPlayers[currentPlayer = 1].playerName;
  document.getElementById("displayPlayerName2").innerHTML = sortedPlayers[currentPlayer = 2].playerName;
  document.getElementById("displayPlayerName3").innerHTML = sortedPlayers[currentPlayer = 3].playerName;

  // Displays all scores
  document.getElementById("displayPlayerScore0").innerHTML = sortedPlayers[currentScore].score;
  document.getElementById("displayPlayerScore1").innerHTML = sortedPlayers[currentScore = 1].score;
  document.getElementById("displayPlayerScore2").innerHTML = sortedPlayers[currentScore = 2].score;
  document.getElementById("displayPlayerScore3").innerHTML = sortedPlayers[currentScore= 3].score;
}