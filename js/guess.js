function rand(){

    let randomNumber = Math.floor(Math.random() * 20) + 1;
    return randomNumber;
}

//----------Game Leader (GLOBAL)---------------
let question = document.querySelector('.question');

let answer = rand();
console.log(answer);

// number of guesses
let numberOfGuesses = 0;


//--------User choice---------


//-------------------Checking the winner---------------
function checkWinner(){

    let submit = document.querySelector('.submit');
    //when submitting the answer
    submit.addEventListener('click', () => {

    //-----------User-----------
    let userInput = document.getElementById('inputUser').value;

    if(userInput === answer){
        question.innerHTML = `Great! ${userInput}  was the right answer`; 
        numberOfGuesses++;  
        console.log(`You have guessed ${numberOfGuesses}`); 
 
    } else if(botOne < answer){
        question.innerHTML = `Ouch! ${userInput} is To low.`; 
        numberOfGuesses++; 
        console.log(`You have guessed ${numberOfGuesses}`);      
 
    } else{
        question.innerHTML = `Sorry! ${userInput} is To high`;
        numberOfGuesses++;  
        console.log(`You have guessed ${numberOfGuesses}`); 
    }
    });
};





