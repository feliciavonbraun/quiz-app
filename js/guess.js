

function userChoice(){

    //Button
    let submit = document.querySelector('.submit');
    //when submitting the answer
    submit.addEventListener('click', checkWinner);
}


//----------Game Leader (GLOBAL)---------------
    let question = document.querySelector('.question');

    let answer = Math.floor(Math.random() * 20) + 1;

    

    // number of guesses
    let numberOfGuesses = 0;

    let bot = parseInt(document.querySelector('.player').value);
    bot = Math.floor(Math.floor() * 20) + 1;

    console.log(answer);
    console.log(bot);

//-------------------Checking the winner---------------
function checkWinner(){

    //-----------User-----------
    let userInput = document.getElementById('inputUser').value;

   if(userInput === answer || botOne){
       question.innerHTML = `Great! ${userInput}  was the right answer`; 
       numberOfGuesses++;  
       console.log(`You have guessed ${numberOfGuesses}`); 

   } else if(userInput < answer){
       question.innerHTML = `Ouch! ${userInput} is To low.`; 
       numberOfGuesses++; 
       console.log(`You have guessed ${numberOfGuesses}`);      

   } else{
       question.innerHTML = `Sorry! ${userInput} is To high`;
       numberOfGuesses++;  
       console.log(`You have guessed ${numberOfGuesses}`); 
   }
};


//-------Bot-------

let botGuess = Math.floor(Math.random() * 20) + 1;

class Bot{
    constructor(speed, guess){
        this.speed = speed;
        this.guess = guess;
    }
}

const botOne = new Bot(2000,botguess)

console.log(botOne)

