
//-------Bot-------

const botOne = setTimeout(() => {

    function bot1answer(){

        let firstAnswer = Math.floor(Math.random() * 20) + 1;
         document.getElementById("bot1Answer").innerHTML = firstAnswer;
         return firstAnswer;
     }
    
    console.log(bot1answer());
    numberOfGuesses = 0;
    
}, 2000);


const botTwo = setTimeout(() => {

    function bot2answer(){

        let secondAnswer = Math.floor(Math.random() * 20) + 1;
         document.getElementById("bot2Answer").innerHTML = secondAnswer;
         return secondAnswer;
     }

    
    console.log(bot2answer());
    numberOfGuesses = 0;
    
}, 3000);


const botThree = setTimeout(() => {

    function bot3answer(){

        let thirdAnswer = Math.floor(Math.random() * 20) + 1;
         document.getElementById("bot3Answer").innerHTML = thirdAnswer;
         return thirdAnswer;
     }

    
    console.log(bot3answer());
    numberOfGuesses = 0;
    
}, 5000);
