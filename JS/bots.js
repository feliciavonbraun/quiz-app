

let firstAnswer;
let secondAnswer;
let thirdAnswer;
let userInput;
let newInBetween;
let answerMM = Math.floor(Math.random() * 20) + 1;
let numberOfGuesses = 0;

function rand(){
    let randNum = Math.floor(Math.random() * 20) + 1;
    return randNum;
}


console.log('Answer:' + answerMM);

//-------Bot 1-------
const botOne = setTimeout(() => {
    
         firstAnswer = rand();
         document.getElementById("bot1Answer").innerHTML = firstAnswer;
         console.log(firstAnswer);
         checkingFirstGuess();   
    
}, 2000);


//--------User---------
function checkingFirstGuess() {

    if(answerMM == firstAnswer){
        console.log('bot1 won');
    }
    else if(answerMM < firstAnswer){
        console.log('lower');
        userGuess();
        
    } else {
        console.log('higher');
        userGuess();
    }
}

//-------Users guess------
function userGuess(){

    let submit = document.querySelector('.submit');
    //when submitting the answer
    submit.addEventListener('click', () => {

    //-----------User-----------
    userInput = document.getElementById('inputUser').value;

    console.log(userInput);

    if(answerMM == userInput){
        console.log('correct user');

    } else if(answerMM < userInput){
        checkingUserAnswer();

    } else {
        checkingUserAnswer();
    }


    });

}

//------Checking User Answer------
function checkingUserAnswer() {


    if(answerMM < userInput){
        console.log('lower');
        botTwo();

    } else {
        console.log('higher');
        botTwo();
       
    }

}

//------Bot 2------
function botTwo() { setTimeout(() => {

    if(answerMM < userInput){
        newInBetween = 20 - userInput;
        secondAnswer = Math.floor(Math.random() * newInBetween) + 1;
        document.getElementById("bot2Answer").innerHTML = secondAnswer;
        checkingBotTwoGuess();

    } else {
        newInBetween = 20 - userInput;
        secondAnswer = Math.floor(Math.random() * (20 - newInBetween) + newInBetween);
        document.getElementById("bot2Answer").innerHTML = secondAnswer;
        checkingBotTwoGuess();
    }
     
    
    
}, 3000);

}

//------Checking Bot 2 guess-------
function checkingBotTwoGuess(){

    console.log(secondAnswer);

    if(answerMM == secondAnswer){
        console.log('Bot two won');

    }else if(answerMM < secondAnswer){
        console.log('lower');
        botThree()

    } else {
        console.log('higher');
        botThree();
    }
}

//-------Bot 3 Guess
function botThree() { setTimeout(() => {

    if(answerMM < secondAnswer){
        newInBetween = 20 - secondAnswer;
        thirdAnswer = Math.floor(Math.random() * newInBetween) + 1;
        document.getElementById("bot3Answer").innerHTML = thirdAnswer;
        checkingBotThreeGuess();

    } else {
        newInBetween = 20 - secondAnswer;
        thirdAnswer = Math.floor(Math.random() * (20 - newInBetween) + newInBetween);
        document.getElementById("bot3Answer").innerHTML = thirdAnswer;
        checkingBotThreeGuess();
    }
    
}, 5000);

}

function checkingBotThreeGuess(){

    console.log(thirdAnswer);

    if(answerMM == thirdAnswer){
        console.log('bot3 won');
    }
    else if(answerMM < thirdAnswer){
        console.log('lower');

    } else {
        console.log('higher');
    }
 }

