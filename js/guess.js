
let userInput;
let gameLeaderText;
let numberOfGuesses;
let answer;
let button;


class checkWin {

        userInput = document.getElementById('inputUser').value;
        gameLeaderText = document.querySelector('.question');
        answer = Math.floor(Math.random() * 20) + 1;
        numberOfGuesses = 0;
        button = document.querySelector('submit')

        submitAnswer(){
            this.button.addEventListener('click', this.checkWinner);
        }

        checkWinner(){
            if(userInput === answer){
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
        }
}

const winOrLose = new checkWin;

console.log(winOrLose);


// function userChoice(){

//     //Button
//     let submit = document.querySelector('.submit');
//     //when submitting the answer
//     submit.addEventListener('click', checkWinner);
// }


// //----------Game Leader (GLOBAL)---------------
//     let question = document.querySelector('.question');

//     let answer = Math.floor(Math.random() * 20) + 1;

//                 //-----------User-----------
//     let userInput = document.getElementById('inputUser').value;

//     // number of guesses
//     let numberOfGuesses = 0;

//     let bot = parseInt(document.querySelector('.player').value|0);
//     bot = Math.floor(Math.floor() * 20) + 1;

//     console.log(answer);
//     console.log(bot);


// //-------------------Checking the winner---------------
// function checkWinner(userInput){


//    if(userInput === answer){
//        question.innerHTML = `Great! ${userInput}  was the right answer`; 
//        numberOfGuesses++;  
//        console.log(`You have guessed ${numberOfGuesses}`); 

//    } else if(userInput < answer){
//        question.innerHTML = `Ouch! ${userInput} is To low.`; 
//        numberOfGuesses++; 
//        console.log(`You have guessed ${numberOfGuesses}`);      

//    } else{
//        question.innerHTML = `Sorry! ${userInput} is To high`;
//        numberOfGuesses++;  
//        console.log(`You have guessed ${numberOfGuesses}`); 
//    }
// };


