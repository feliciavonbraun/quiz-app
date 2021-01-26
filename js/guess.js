let randomNumber = Math.floor(Math.random() * 20) + 1;

//----------Game Leader (GLOBAL)---------------
let question = document.querySelector('.question');

let answer = randomNumber;

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


//-------Bot-------


const botOne = setTimeout(() => {
    
    randomNumber
    console.log(randomNumber);
    numberOfGuesses = 0;
    
}, 2000);


const botTwo = setTimeout(() => {

    randomNumber
    console.log(randomNumber);
    numberOfGuesses = 0;
    
}, 1000);


const botThree = setTimeout(() => {

    randomNumber
    console.log(randomNumber);
    numberOfGuesses = 0;
    
}, 3000);




