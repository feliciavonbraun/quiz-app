let answer = Math.floor(Math.random() * 20) + 1;

let firstAnswer;
let secondAnswer;
let thirdAnswer;
//question = document.querySelector('h3');
console.log('CORRECT ANSWER IS: ' + answer);

botOneTurn();

function botOneTurn() {
  
  setTimeout(() => {
    let botOneGuess = Math.floor(Math.random() * 20) + 1;
    console.log('Bot 1 guesses: ' + botOneGuess)
  
    if(answer == botOneGuess){ 
        console.log(`Bot 1 is the winner`); 
        //spelet stoppas, skickas till Game Over screen
  
    } else if (answer < botOneGuess) {
      console.log('lower');
      newInBetween = 20 - firstAnswer;
      secondAnswer = Math.floor(Math.random() * newInBetween) + 1;
      document.getElementById("bot2Answer").innerHTML = secondAnswer;
      return secondAnswer;
        userTurn();   
  
    } else {
        ; 
        userTurn();
    }
  }, 2000);
}

function userTurn() {
  
  let userGuess = document.getElementById('inputUser').value;

  if(userGuess == answer){
      question.innerHTML = `User is the winner`;  
      console.log(`User is the winner`); 
      //spelet stoppas, skickas till Game Over screen

  } else if (userGuess < answer) {
      question.innerHTML = `User's answer is too low`; 
      console.log(`User's answer is too low`);   
      botTwoTurn();   

  } else {
      question.innerHTML = `Sorry User! That is too high`;
      console.log(`Sorry User! That is too high`); 
      botTwoTurn();
  }
}

function botTwoTurn() {
  
  setTimeout(() => {

    let botTwoGuess = Math.floor(Math.random() * 20) + 1;
    console.log('Bot 2 guesses: ' + botTwoGuess)
  
    if(botTwoGuess == answer){
        question.innerHTML = `Bot 2 is the winner`;  
        console.log(`Bot 2 is the winner`); 
        //spelet stoppas, skickas till Game Over screen
  
    } else if (botTwoGuess < answer) {
        question.innerHTML = `Bot 2's answer is too low`; 
        console.log(`Bot 2's answer is too low`);   
        botThreeTurn();   
  
    } else {
        question.innerHTML = `Sorry Bot 2! That is too high`;
        console.log(`Sorry Bot 2! That is too high`); 
        botThreeTurn();
    }

  }, 2000);

}

function botThreeTurn() {
  
  setTimeout(() => {

    let botThreeGuess = Math.floor(Math.random() * 20) + 1;
    console.log('Bot 3 guesses: ' + botThreeGuess)
  
    if(botThreeGuess == answer){
        question.innerHTML = `Bot 3 is the winner`;  
        console.log(`Bot 3 is the winner`); 
        //spelet stoppas, skickas till Game Over screen
  
    } else if (botThreeGuess < answer) {
        question.innerHTML = `Bot 3's answer is too low`; 
        console.log(`Bot 3's answer is too low`);   
        botOneTurn();   
  
    } else {
        question.innerHTML = `Sorry Bot 3! That is too high`;
        console.log(`Sorry Bot 3! That is too high`); 
        botOneTurn();
    }
    
  }, 2000);

}