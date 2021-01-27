
//-------Bot-------
let firstAnswer;
let secondAnswer;
let thirdAnswer;
let answerMM = Math.floor(Math.random() * 20) + 1;
let numberOfGuesses = 0;


const botOne = setTimeout(() => {

    console.log(answerMM);
    
    function bot1answer(){
         firstAnswer = Math.floor(Math.random() * 20) + 1;
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
            secondAnswer = Math.floor(Math.random() * answerMM - (firstAnswer)) + 1;
            document.getElementById("bot2Answer").innerHTML = secondAnswer;
            return secondAnswer;
        } else {
            console.log('higher');
            secondAnswer = Math.floor(Math.random() * answerMM + (firstAnswer)) + 1;
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
            thirdAnswer = Math.floor(Math.random() * answerMM - (secondAnswer)) + 1;
            document.getElementById("bot3Answer").innerHTML = thirdAnswer;
            return thirdAnswer;
        } else {
            console.log('higher');
            thirdAnswer = Math.floor(Math.random() * answerMM + (secondAnswer)) + 1;
            document.getElementById("bot3Answer").innerHTML = thirdAnswer;
            return thirdAnswer;
        }
     }
    
    console.log(bot3answer());
    numberOfGuesses++;
    
}, 5000);
