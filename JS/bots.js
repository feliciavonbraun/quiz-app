

let firstAnswer;
let secondAnswer;
let thirdAnswer;
let userInput;
let answerMM = Math.floor(Math.random() * 20) + 1;
let numberOfGuesses = 0;

function rand(){
    let randNum = Math.floor(Math.random() * 20) + 1;
    return randNum;
}


console.log('Answer:' + answerMM);

//-------Bot1-------
const botOne = setTimeout(() => {
    
    function bot1answer(){
         firstAnswer = rand();
         document.getElementById("bot1Answer").innerHTML = firstAnswer;
         user();
         return firstAnswer;
         
     }

    console.log(bot1answer());
    numberOfGuesses++;   
    
}, 2000);


//--------USER---------
function user() {

    if(answerMM == firstAnswer){
        console.log('bot1 won');
    }
    else if(answerMM < firstAnswer){
        console.log('lower');
        userGuess();
        return firstAnswer;
    } else {
        console.log('higher');
        userGuess();
        return firstAnswer;
    }

    function userGuess(){

    let submit = document.querySelector('.submit');
    //when submitting the answer
    submit.addEventListener('click', () => {

    //-----------User-----------
    userInput = document.getElementById('inputUser').value;

    if(answerMM == userInput){
        console.log('correct user');
    } else if(answerMM < userInput){
        console.log(' sorry to high');
        console.log(userInput);
        botTwo();
    } else {
        console.log('sorry to low')
        console.log(userInput);
        botTwo();
    }

    })

}
console.log(userGuess());
};



function botTwo() { setTimeout(() => {


        if(answerMM == userInput) {
            console.log('user won');
        }
        else if(answerMM < userInput){
            console.log('lower');
            newInBetween = 20 - userInput;
            secondAnswer = Math.floor(Math.random() * newInBetween) + 1;
            document.getElementById("bot2Answer").innerHTML = secondAnswer;
            botThree();
            return secondAnswer;
        } else {
            console.log('higher');
            newInBetween = 20 - userInput;
            secondAnswer = Math.floor(Math.random() * (20 - newInBetween) + newInBetween);
            document.getElementById("bot2Answer").innerHTML = secondAnswer;
            botThree();
            return secondAnswer; 
        }
     
    console.log(botTwo());
    numberOfGuesses++;
    
}, 3000);

console.log(secondAnswer);
}


function botThree() { setTimeout(() => {

    function bot3answer(){

        if(answerMM == secondAnswer){
            console.log('bot2 won');
        }
        else if(answerMM < secondAnswer){
            console.log('lower');
            newInBetween = 20 - secondAnswer;
            thirdAnswer = Math.floor(Math.random() * newInBetween) + 1;
            document.getElementById("bot3Answer").innerHTML = thirdAnswer;
            return thirdAnswer;

        } else {
            console.log('higher');
            newInBetween = 20 - secondAnswer;
            thirdAnswer = Math.floor(Math.random() * (20 - newInBetween) + newInBetween);
            document.getElementById("bot3Answer").innerHTML = thirdAnswer;
            return thirdAnswer;
        }
     }
    
    console.log(bot3answer());
    numberOfGuesses++;
    
}, 5000);

}

