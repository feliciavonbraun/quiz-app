
let userGuess;
let gameLeaderText;
let numberOfGuesses;
let answer;
let button;


class CheckWin {

    constructor(gameLeaderText, answer, number, button){

        this.gameLeaderText = document.querySelector('.question');
        this.answer = Math.floor(Math.random() * 20) + 1;
        this.numberOfGuesses = 0;
        this.button = document.querySelector('submit')
    }

    checkWinner(){

            userGuess = document.getElementById('inputUser').value;

            if(userGuess === answer){
                question.innerHTML = `Great! ${userGuess}  was the right answer`; 
                numberOfGuesses++;  
                console.log(`You have guessed ${numberOfGuesses}`); 
         
            } else if(userGuess < answer){
                question.innerHTML = `Ouch! ${userGuess} is To low.`; 
                numberOfGuesses++; 
                console.log(`You have guessed ${numberOfGuesses}`);      
         
            } else{
                question.innerHTML = `Sorry! ${userGuess} is To high`;
                numberOfGuesses++;  
                console.log(`You have guessed ${numberOfGuesses}`); 
            }
        }
}

const winOrLose = new CheckWin;

console.log(winOrLose);