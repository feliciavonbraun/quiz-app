
//--------Global variables--------
let firstAnswer;
let secondAnswer;
let thirdAnswer;
let userInput;
let newInBetween;
let answerMM = Math.floor(Math.random() * 20) + 1;
let numberOfGuesses = 0;
let gameLeader = document.querySelector('.question');

function rand(){
    let randNum = Math.floor(Math.random() * 20) + 1;
    return randNum;
}


console.log('Answer:' + answerMM);


//-------Bot 1-------
function botOne() { setTimeout(() => {

    setTimeout(()=> {
        gameLeader.innerHTML = 'Bot 1 turn'
    }, 2000)

         firstAnswer = rand();
         document.getElementById("bot1Answer").innerHTML = firstAnswer;
         console.log(firstAnswer);
         checkingFirstGuess();   
    
}, 2000);


}

botOne();


//--------User---------
function checkingFirstGuess() {

    if(answerMM == firstAnswer){
        gameLeader.innerHTML = 'Bot 1 Won!'
        console.log('bot1 won');
    }
    else if(answerMM < firstAnswer){
        gameLeader.innerHTML = 'Lower...'
        console.log('lower');
        setTimeout(()=> {
            userGuess();
        }, 2000)
        
    } else {
        gameLeader.innerHTML = 'Higher...'
        console.log('higher');
        setTimeout(()=> {
            userGuess();
        }, 2000)
    }
}

//-------Users guess------
function userGuess(){

    gameLeader.innerHTML = 'Your turn!'

    let submit = document.querySelector('.submit');
    //when submitting the answer
    submit.addEventListener('click', () => {

    //-----------User-----------
    userInput = document.getElementById('inputUser').value;

    console.log(userInput);

    if(answerMM == userInput){
        gameLeader.innerHTML = 'You Won!'
        console.log('user won');

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
        gameLeader.innerHTML = 'Lower...'
        console.log('lower');
        setTimeout(()=> {
            gameLeader.innerHTML = 'Bot 2 turn';
            botTwo();
        }, 2000)

    } else {
        gameLeader.innerHTML = 'Higher...'
        console.log('higher');
        setTimeout(()=> {
            gameLeader.innerHTML = 'Bot 2 turn';
            botTwo();
        }, 2000)
       
    }

}

//------Bot 2------
function botTwo() { setTimeout(() => {

    gameLeader.innerHTML = 'Bot 2 turn';

    if(answerMM < userInput){
        newInBetween = 20 - userInput;
        secondAnswer = Math.floor(Math.random() * newInBetween) + 1;

        if(secondAnswer != firstAnswer || userInput || thirdAnswer){
            document.getElementById("bot2Answer").innerHTML = secondAnswer;
            checkingBotTwoGuess();
        }

    } else {
        newInBetween = 20 - userInput;
        secondAnswer = Math.floor(Math.random() * (20 - newInBetween) + newInBetween);

        if(secondAnswer != firstAnswer || userInput || thirdAnswer){
            document.getElementById("bot2Answer").innerHTML = secondAnswer;
            checkingBotTwoGuess();
        }
    }
     
    
    
}, 3000);

}

//------Checking Bot 2 guess-------
function checkingBotTwoGuess(){

    console.log(secondAnswer);

    if(answerMM == secondAnswer){
        gameLeader.innerHTML = 'Bot 2 Won!'
        console.log('Bot two won');

    }else if(answerMM < secondAnswer){
        gameLeader.innerHTML = 'Lower...'
        console.log('lower');
        setTimeout(()=> {
            gameLeader.innerHTML = 'Bot 3 turn';
            botThree();
        }, 2000)
        

    } else {
        gameLeader.innerHTML = 'Higher...'
        console.log('higher');
        setTimeout(()=> {
            gameLeader.innerHTML = 'Bot 3 turn';
            botThree();
        }, 2000)
    }
}

//-------Bot 3 Guess
function botThree() { setTimeout(() => {

    gameLeader.innerHTML = 'Bot 3 Turn'


    if(answerMM < secondAnswer){
        newInBetween = 20 - secondAnswer;
        thirdAnswer = Math.floor(Math.random() * newInBetween) + 1;

        if(thirdAnswer != firstAnswer || userInput || secondAnswer){
            document.getElementById("bot3Answer").innerHTML = thirdAnswer;
            checkingBotThreeGuess();
        }
        
    } else {
        newInBetween = 20 - secondAnswer;
        thirdAnswer = Math.floor(Math.random() * (20 - newInBetween) + newInBetween);

        if(thirdAnswer != firstAnswer || userInput || secondAnswer){
            document.getElementById("bot3Answer").innerHTML = thirdAnswer;
            checkingBotThreeGuess();
        }
    }
    
}, 5000);

}
//----Checking Bot 3 guess-----
function checkingBotThreeGuess(){

    console.log(thirdAnswer);

    if(answerMM == thirdAnswer){
        gameLeader.innerHTML = 'Bot 3 Won!'
        console.log('bot3 won');
    }
    else if(answerMM < thirdAnswer){
        gameLeader.innerHTML = 'Lower...'
        console.log('lower');
        setTimeout(()=> {
            gameLeader.innerHTML = 'Bot 1 turn';
            botOne();
        }, 2000)


    } else {
        gameLeader.innerHTML = 'Higher'
        console.log('higher');
        setTimeout(()=> {
            gameLeader.innerHTML = 'Bot 1 turn';
            botOne();
        }, 2000)
    }
 }

//  function botOne(){
//     if(answerMM < thirdAnswer){
//         newInBetween = 20 - thirdAnswer;
//         firstAnswer = Math.floor(Math.random() * newInBetween) + 1;

//              if(firstAnswer != secondAnswer || userInput || thirdAnswer){
//                 document.getElementById("bot3Answer").innerHTML = firstAnswer;
//                  checkingFirstGuess();
//              }       
//        
//     } else {
//         newInBetween = 20 - thirdAnswer;
//         firstAnswer = Math.floor(Math.random() * (20 - newInBetween) + newInBetween);
//         
//            if(firstAnswer != secondAnswer || userInput || thirdAnswer){
//                 document.getElementById("bot3Answer").innerHTML = firstAnswer;
//                  checkingFirstGuess();
//              } 
//     }
//  }