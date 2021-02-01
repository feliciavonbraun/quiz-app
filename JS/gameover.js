window.addEventListener('load', gameOver)

let userScore = localStorage.getItem('userScore');
let botOneScore = localStorage.getItem('botOneScore');
let botTwoScore = localStorage.getItem('botTwoScore');
let botThreeScore = localStorage.getItem('botThreeScore');
let createUsername = localStorage.getItem('createUsername');

function gameOver() {
  // displayWinOrLoseText();
  displayHighScore();
}

function displayWinOrLoseText() {
  // men answer finns inte i LS??? hmmm
  // om userScore ökar 
  // if (userScore == answer) {
  //   document.getElementById("winOrLoseText").innerHTML = "YAY you win";
  // } else {
  //   document.getElementById("winOrLoseText").innerHTML = "Buu try again";
  // }
}


function displayHighScore() {

  // 3 4 3 3
  const highScoreArray = [userScore + createUsername, botOneScore + 'Bot 1', botTwoScore + 'Bot 2', botThreeScore + 'Bot 3']
  
  // const highScoreArray[] = 
  // { score: userScore,
  //   name: createUsername },
  // { score: botOneScore,
  //   name: 'Bot 1' },
  // { score: botTwoScore, 
  //   name: 'Bot 2' },
  // { score: botThreeScore, 
  //   name: 'Bot 3'}, 
  
  document.getElementById("displayPlayerScore1").innerHTML = highScoreArray.sort() //0
  document.getElementById("displayPlayerScore2").innerHTML = highScoreArray.sort() //1
  document.getElementById("displayPlayerScore3").innerHTML = highScoreArray.sort() //2 
  document.getElementById("displayPlayerScore4").innerHTML = highScoreArray.sort() //3

  console.log(highScoreArray)
  

  // document.getElementById("displayPlayerName").innerHTML = localStorage.getItem("XXXX");
}
