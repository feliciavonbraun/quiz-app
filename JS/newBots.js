answer = Math.floor(Math.random() * 20) + 1;
newAnswer = 
question = document.querySelector('.question');
submitBtn = document.querySelector('.submit');

// let answerMM = Math.floor(Math.random() * 20) + 1;

console.log('CORRECT ANSWER IS: ' + answer);

botOneTurn();

function botOneTurn() {
  
  setTimeout(() => {
    let botOneGuess = Math.floor(Math.random() * 20) + 1;
    console.log('Bot 1 guesses: ' + botOneGuess)
  
    if(botOneGuess == answer){
        question.innerHTML = `Bot 1 is the winner`;  
        console.log(`Bot 1 is the winner`); 
        //spelet stoppas, skickas till Game Over screen
  
    } else if (botOneGuess < answer) {
        question.innerHTML = `Bot 1's answer is too low`; 
        console.log(`Bot 1's answer is too low`);   
        userTurn();   
  
    } else {
        question.innerHTML = `Sorry Bot 1! That is too high`;
        console.log(`Sorry Bot 1! That is too high`); 
        userTurn();
    }
    return botOneGuess;
  }, 2000);
}

function userTurn() {

  console.log('USER, it is your turn')
  
  submitBtn.addEventListener('click', () => {

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
  })

}

function botTwoTurn() {
  
  setTimeout(() => {

    let botTwoGuess = Math.floor(Math.random() * 20) + 1;
    // let botTwoGuess = Math.floor(Math.random() * 20) + 1;
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

    // let botThreeGuess = Math.floor(Math.random() * 20) + 1;
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