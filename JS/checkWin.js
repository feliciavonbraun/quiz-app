let userInput;
let gameLeader;

class CheckWin {

        userInput = document.getElementById('inputUser');
        gameLeader = document.querySelector('.question');

    checkWinner(){

            userGuess = Number(userInput)

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


const whoWon = new CheckWin();
console.log(CheckWin.checkWinner);