window.addEventListener('load', botOneTurn);

let answer = Math.floor(Math.random() * 20) + 1;

const question = document.querySelector('.question');
const submitBtn = document.querySelector('.submit');
const userInputField = document.getElementById('inputUser');

userInputField.disabled = true;

const botOneStatus = document.getElementById("bot1status");
const userStatus = document.getElementById("userStatus");
const botTwoStatus = document.getElementById("bot2status");
const botThreeStatus = document.getElementById("bot3status");

let min = 1;
let max = 20;

let userScore = localStorage.getItem('userScore');
let botOneScore = localStorage.getItem('botOneScore');
let botTwoScore = localStorage.getItem('botTwoScore');
let botThreeScore = localStorage.getItem('botThreeScore');

let botOneCard = document.getElementById('bot-one-card');
let userCard = document.getElementById('user-card');
let botTwoCard = document.getElementById('bot-two-card');
let botThreeCard = document.getElementById('bot-three-card');


// Retrieves local storage username
document.getElementById("playerNameFromLS").innerHTML = localStorage.getItem("createUsername");

// Generates a random time for T-1001 (bow two)
function randomizeTime() {
  let randomTime = Math.floor(Math.random() * (10000 - 3000)) + 3000;
  return randomTime;
}

//Game starts with bot one guessing
function botOneTurn() {

  botOneCard.style = 'opacity: 100%';
  userCard.style = 'opacity: 50%';
  botTwoCard.style = 'opacity: 50%';
  botThreeCard.style = 'opacity: 50%';
  
  setTimeout(() => {
    let botOneGuess = Math.floor(Math.random() * (max - min)) + min;
  
    //checks if answer ic correct
    if(botOneGuess == answer){
      question.innerHTML = `Schmickle is the winner`;  
      botOneScore++;
      localStorage.setItem('botOneScore', botOneScore);
      document.getElementById("bot1Answer").innerHTML = botOneGuess;
      botOneStatus.innerHTML = '<p style="color:green; font-weight:bold;">Winner!</p>';
      setTimeout(() => {
        document.location.href = '../gameOver.html';
      }, 2000);
  
    } else if (botOneGuess < answer) {
        question.innerHTML = `Schmickle's answer is too low`; 
        document.getElementById("bot1Answer").innerHTML = botOneGuess;
        botOneStatus.innerHTML = '<p style="color:red; font-weight:bold;">Too low</p>';
        min = botOneGuess + 1;  
        userTurn();   
  
    } else {
        question.innerHTML = `Sorry Schmickle! That is too high`;
        document.getElementById("bot1Answer").innerHTML = botOneGuess;
        botOneStatus.innerHTML = '<p style="color:red; font-weight:bold;">Too high</p>';
        max = botOneGuess - 1;
        userTurn();
    }
    return botOneGuess;
  }, 6000);
}


function userTurn() {

  botOneCard.style = 'opacity: 50%';
  userCard.style = 'opacity: 100%';
  botTwoCard.style = 'opacity: 50%';
  botThreeCard.style = 'opacity: 50%';

  userInputField.disabled = false;
  submitBtn.disabled = false;

  startTimer();

  function startTimer() {
    let sec = 15;
    let timer = setInterval( () => {
      if (sec <= 9) {
        document.getElementById('timer').innerHTML='00:0'+sec;
      } else {
        document.getElementById('timer').innerHTML='00:'+sec;
      }
      sec--;
      // if time gets to less than 0
      if (sec < 0) {
        clearInterval(timer);
        document.getElementById('timer').innerHTML="00:15";
        botTwoTurn();
      }
  
    }, 1000);

    // Enter trigger for user input
    userInputField.addEventListener("keyup", function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        submitBtn.click();
        submitBtn.disabled = true;
      }
    });
    
    // listener for click
    submitBtn.addEventListener('click', () => {

      submitBtn.disabled = true;
      
      let userGuess = parseInt(document.getElementById('inputUser').value);

      // if user guesses higher than max lower than min
      if (userGuess < min || userGuess > max) {
        if (userGuess < min) {
          userGuess = min - 1;
        }
        if (userGuess > max && max == 20) {
          userGuess = max;
        } else if (userGuess > max && max != 20) {
          userGuess = max + 1;
        }
      }
  
      //checks if answer is correct
      if(userGuess == answer){
          question.innerHTML = `You are the winner`;
          userStatus.innerHTML = '<p style="color:green; font-weight:bold;">Winner!</p>';  
          
          userScore++;
          localStorage.setItem('userScore', userScore);
          
          document.getElementById("playerAnswer").innerHTML = userGuess;
          clearInterval(timer);
          document.getElementById('timer').innerHTML="00:15";
          
          userInputField.disabled = true;
          
          setTimeout(() => {
            document.location.href = '../gameOver.html';
          }, 2000);
    
      } else if (userGuess < answer) {
          question.innerHTML = `Your answer is too low`; 
          userStatus.innerHTML = '<p style="color:red; font-weight:bold;">Too low</p>';
          min = userGuess + 1; 
          clearInterval(timer);
          document.getElementById("playerAnswer").innerHTML = userGuess;
          document.getElementById('timer').innerHTML="00:15"
          botTwoTurn();   
    
      } else {
          question.innerHTML = `Sorry! That is too high`;
          userStatus.innerHTML = '<p style="color:red; font-weight:bold;">Too high</p>';
          document.getElementById("playerAnswer").innerHTML = userGuess;
          max = userGuess - 1;
          clearInterval(timer);
          document.getElementById('timer').innerHTML="00:15"
          botTwoTurn();
      }
    })     
  }
}


function botTwoTurn() {

  botOneCard.style = 'opacity: 50%';
  userCard.style = 'opacity: 50%';
  botTwoCard.style = 'opacity: 100%';
  botThreeCard.style = 'opacity: 50%';

  userInputField.disabled = true;
  submitBtn.disabled = false;
  
  setTimeout(() => {

    let botTwoGuess = Math.floor(Math.random() * (max - min)) + min;
  
    //checks if answer is correct
    if(botTwoGuess == answer){
        question.innerHTML = `T-1001 is the winner`;
        botTwoStatus.innerHTML = '<p style="color:green; font-weight:bold;">Winner!</p>';    
        botTwoScore++;
        localStorage.setItem('botTwoScore', botTwoScore);
        document.getElementById("bot2Answer").innerHTML = botTwoGuess;
        setTimeout(() => {
          document.location.href = '../gameOver.html';
        }, 2000);
  
    } else if (botTwoGuess < answer) {
        question.innerHTML = `T-1001's answer is too low`;
        botTwoStatus.innerHTML = '<p style="color:red; font-weight:bold;">Too low</p>'; 
        min = botTwoGuess + 1;  
        document.getElementById("bot2Answer").innerHTML = botTwoGuess;
        botThreeTurn();   
  
    } else {
        question.innerHTML = `Sorry T-1001! That is too high`;
        botTwoStatus.innerHTML = '<p style="color:red; font-weight:bold;">Too high</p>';
        max = botTwoGuess - 1;
        document.getElementById("bot2Answer").innerHTML = botTwoGuess;
        botThreeTurn();
    }

  }, randomizeTime());

}

function botThreeTurn() {

  botOneCard.style = 'opacity: 50%';
  userCard.style = 'opacity: 50%';
  botTwoCard.style = 'opacity: 50%';
  botThreeCard.style = 'opacity: 100%';
  
  setTimeout(() => {

    let botThreeGuess = Math.floor(Math.random() * (max - min)) + min;
  
    //checks if answer is correct
    if(botThreeGuess == answer){
        botThreeStatus.innerHTML = '<p style="color:green; font-weight:bold;">Winner!</p>';  
        question.innerHTML = `Dicy Dyed die is the winner!`;  
        botThreeScore++;
        localStorage.setItem('botThreeScore', botThreeScore);
        document.getElementById("bot3Answer").innerHTML = botThreeGuess;

        setTimeout(() => {
          document.location.href = '../gameOver.html';
        }, 2000);
  
    } else if (botThreeGuess < answer) {
        question.innerHTML = `Dicy Dyed Die's answer is too low`;
        botThreeStatus.innerHTML = '<p style="color:red; font-weight:bold;">Too low</p>'; 
        min = botThreeGuess + 1;
        document.getElementById("bot3Answer").innerHTML = botThreeGuess;   
        botOneTurn();   
  
    } else {
        question.innerHTML = `Sorry Dicy Dyed Die! That is too high`;
        botThreeStatus.innerHTML = '<p style="color:red; font-weight:bold;">Too high</p>';
        max = botThreeGuess - 1;
        document.getElementById("bot3Answer").innerHTML = botThreeGuess;
        botOneTurn();
    }
    
  }, 2000);

}