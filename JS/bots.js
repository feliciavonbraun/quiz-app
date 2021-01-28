

let firstAnswer;
let secondAnswer;
let thirdAnswer;
let answerMM = Math.floor(Math.random() * 20) + 1;
let numberOfGuesses = 0;

function rand(){
    let randNum = Math.floor(Math.random() * 20) + 1;
    return randNum;
}


console.log(answerMM);

//-------Bot-------
const botOne = setTimeout(() => {
    
    function bot1answer(){
         firstAnswer = rand();
         document.getElementById("bot1Answer").innerHTML = firstAnswer;
         return firstAnswer;
     }
    
    console.log(bot1answer());
    numberOfGuesses++;
    
}, 2000);


const botTwo = setTimeout(() => {

    function bot2answer(){

        if(answerMM == firstAnswer) {
            console.log('bot1 won');
        }
        else if(answerMM < firstAnswer){
            console.log('lower');
            newInBetween = 20 - firstAnswer;
            secondAnswer = Math.floor(Math.random() * newInBetween) + 1;
            document.getElementById("bot2Answer").innerHTML = secondAnswer;
            return secondAnswer;
        } else {
            console.log('higher');
            secondAnswer = rand() + firstAnswer;
            document.getElementById("bot2Answer").innerHTML = secondAnswer;
            return secondAnswer;
        }
     }
    
    console.log(bot2answer());
    numberOfGuesses++;
    
}, 3000);


const botThree = setTimeout(() => {

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
            thirdAnswer = Math.min(rand() + secondAnswer);
            document.getElementById("bot3Answer").innerHTML = thirdAnswer;
            return thirdAnswer;
        }
     }
    
    console.log(bot3answer());
    numberOfGuesses++;
    
}, 5000);


const user = () => {

    function userGuess(){

        let submit = document.querySelector('.submit');
        //when submitting the answer
        submit.addEventListener('click', () => {
    
        //-----------User-----------
        let userInput = document.getElementById('inputUser').value;

        if(answerMM == thirdAnswer){
            console.log('bot2 won');
        }
        else if(answerMM < thirdAnswer){
            console.log('lower');
            return thirdAnswer;
        } else {
            console.log('higher');
            return thirdAnswer;
        }

    });

    
  }
    console.log(userInput);
    console.log(userGuess());
    
};