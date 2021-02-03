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
let userGuess;

let botOneCard = document.getElementById('bot-one-card');
let userCard = document.getElementById('user-card');
let botTwoCard = document.getElementById('bot-two-card');
let botThreeCard = document.getElementById('bot-three-card');


// Retrieves local storage username
document.getElementById("playerNameFromLS").innerHTML = localStorage.getItem("createUsername");

console.log('CORRECT ANSWER IS: ' + answer);

function randomizeTime() {
  let randomTime = Math.floor(Math.random() * (10000 - 3000)) + 3000;
  // console.log('random time is: ' + randomTime)
  return randomTime;
}

function botOneTurn() {

  botOneCard.style = 'opacity: 100%';
  userCard.style = 'opacity: 50%';
  botTwoCard.style = 'opacity: 50%';
  botThreeCard.style = 'opacity: 50%';
  
  setTimeout(() => {
    let botOneGuess = Math.floor(Math.random() * (max - min)) + min;

    console.log('Bot 1 guesses: ' + botOneGuess);
  
    if(botOneGuess == answer){
      question.innerHTML = `Schmickle is the winner`;  
      botOneScore++;
      localStorage.setItem('botOneScore', botOneScore);
      document.getElementById("bot1Answer").innerHTML = botOneGuess;
      console.log(botOneScore);
      botOneStatus.innerHTML = '<p style="color:green; font-weight:bold;">Winner!</p>';
      console.log(`Bot 1 is the winner`); 
      setTimeout(() => {
        document.location.href = '../gameOver.html';
      }, 2000);
  
    } else if (botOneGuess < answer) {
        question.innerHTML = `Schmickle's answer is too low`; 
        document.getElementById("bot1Answer").innerHTML = botOneGuess;
        botOneStatus.innerHTML = '<p style="color:red; font-weight:bold;">Too low</p>';
        console.log(`Bot 1's answer is too low`);  
        min = botOneGuess + 1;  
        console.log('NEW RANGE IS: ' + min + '-' + max)
        userTurn();   
  
    } else {
        question.innerHTML = `Sorry Schmickle! That is too high`;
        document.getElementById("bot1Answer").innerHTML = botOneGuess;
        botOneStatus.innerHTML = '<p style="color:red; font-weight:bold;">Too high</p>';
        console.log(`Sorry Bot 1! That is too high`); 
        max = botOneGuess - 1;
        console.log('NEW RANGE IS: ' + min + '-' + max)
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

  console.log('====================')

  userInputField.disabled = false;
  submitBtn.disabled = false;

  startTimer();

  function startTimer() {

    // TIMER
    let sec = 15;
    let timer = setInterval( () => {
      if (sec <= 9) {
        document.getElementById('timer').innerHTML='00:0'+sec;
      } else {
        document.getElementById('timer').innerHTML='00:'+sec;
      }
      sec--;

      //om tiden blir mindre än noll
      if (sec < 0) {
        clearInterval(timer);
        document.getElementById('timer').innerHTML="00:15";
        botTwoTurn();
      }
  
    }, 1000);

    //KOLLAR OM SVARET ÄR KORREKT, FÖR LÅGT ELLER FÖR HÖGT

    console.log('USER, it is your turn')

    userInputField.addEventListener("keyup", function(event) {
      if (event.key === 'Enter') {
        console.log('ENTER WAS CLICKED');
        event.preventDefault();
        submitBtn.click();
        submitBtn.disabled = true;
      }
    });
    
    submitBtn.addEventListener('click', () => {

      submitBtn.disabled = true;
      console.log('ANSWER SUBMITTED')
      
      let userGuess = parseInt(document.getElementById('inputUser').value);

      if (userGuess < min || userGuess > max) {
        console.log('EJ GODKÄND GISSNING')
        if (userGuess < min) {
          userGuess = min - 1;
        }
        if (userGuess > max && max == 20) {
          userGuess = max;
        } else if (userGuess > max && max != 20) {
          userGuess = max + 1;
        }
      }

      console.log('User guesses: ' + userGuess);
  
      if(userGuess == answer){
          question.innerHTML = `You are the winner`;
          userStatus.innerHTML = '<p style="color:green; font-weight:bold;">Winner!</p>';  
          console.log(`User is the winner`); 
          
          userScore++;
          localStorage.setItem('userScore', userScore);
          console.log(userScore);
          
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
          console.log(`User's answer is too low`);   
          min = userGuess + 1; 
          console.log('NEW RANGE IS: ' + min + '-' + max)
          clearInterval(timer);
          document.getElementById("playerAnswer").innerHTML = userGuess;
          document.getElementById('timer').innerHTML="00:15"
          botTwoTurn();   
    
      } else {
          question.innerHTML = `Sorry! That is too high`;
          userStatus.innerHTML = '<p style="color:red; font-weight:bold;">Too high</p>';
          console.log(`Sorry User! That is too high`); 
          document.getElementById("playerAnswer").innerHTML = userGuess;
          max = userGuess - 1;
          console.log('NEW RANGE IS: ' + min + '-' + max)
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

    console.log('Bot 2 guesses: ' + botTwoGuess)
  
    if(botTwoGuess == answer){
        question.innerHTML = `T-1001 is the winner`;
        botTwoStatus.innerHTML = '<p style="color:green; font-weight:bold;">Winner!</p>';    
        console.log(`Bot 2 is the winner`);
        botTwoScore++;
        localStorage.setItem('botTwoScore', botTwoScore);
        document.getElementById("bot2Answer").innerHTML = botTwoGuess;
        console.log(botTwoScore); 
        setTimeout(() => {
          document.location.href = '../gameOver.html';
        }, 2000);
  
    } else if (botTwoGuess < answer) {
        question.innerHTML = `T-1001's answer is too low`;
        botTwoStatus.innerHTML = '<p style="color:red; font-weight:bold;">Too low</p>'; 
        console.log(`Bot 2's answer is too low`);   
        min = botTwoGuess + 1;  
        console.log('NEW RANGE IS: ' + min + '-' + max)
        document.getElementById("bot2Answer").innerHTML = botTwoGuess;
        botThreeTurn();   
  
    } else {
        question.innerHTML = `Sorry T-1001! That is too high`;
        botTwoStatus.innerHTML = '<p style="color:red; font-weight:bold;">Too high</p>';
        console.log(`Sorry Bot 2! That is too high`); 
        max = botTwoGuess - 1;
        console.log('NEW RANGE IS: ' + min + '-' + max)
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

    console.log('Bot 3 guesses: ' + botThreeGuess)
  
    if(botThreeGuess == answer){
        botThreeStatus.innerHTML = '<p style="color:green; font-weight:bold;">Winner!</p>';  
        question.innerHTML = `Dicy Dyed die is the winner!`;  
        console.log(`Bot 3 is the winner`); 
        botThreeScore++;
        localStorage.setItem('botThreeScore', botThreeScore);
        document.getElementById("bot3Answer").innerHTML = botThreeGuess;
        console.log(botThreeScore);
        setTimeout(() => {
          document.location.href = '../gameOver.html';
        }, 2000);
  
    } else if (botThreeGuess < answer) {
        question.innerHTML = `Dicy Dyed Die's answer is too low`;
        botThreeStatus.innerHTML = '<p style="color:red; font-weight:bold;">Too low</p>'; 
        console.log(`Bot 3's answer is too low`);
        min = botThreeGuess + 1;
        console.log('NEW RANGE IS: ' + min + '-' + max)
        document.getElementById("bot3Answer").innerHTML = botThreeGuess;   
        botOneTurn();   
  
    } else {
        question.innerHTML = `Sorry Dicy Dyed Die! That is too high`;
        botThreeStatus.innerHTML = '<p style="color:red; font-weight:bold;">Too high</p>';
        console.log(`Sorry Bot 3! That is too high`); 
        max = botThreeGuess - 1;
        console.log('NEW RANGE IS: ' + min + '-' + max)
        document.getElementById("bot3Answer").innerHTML = botThreeGuess;
        botOneTurn();
    }
    
  }, 2000);

}