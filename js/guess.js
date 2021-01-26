function userChoice(){

    //Game Leader
    let question = document.querySelector('.question');
    let answer = Math.floor(Math.random() * 20) + 1;

    //Button
    let submit = document.querySelector('.submit');

    //when submitting the answer
    submit.addEventListener('click', () => {

       //user guess
    let userInput = document.getElementById('inputUser').value;

        if(userInput == answer){
            question.innerHTML = `Great! ${userInput}  was the right answer`;
            // kollar vem som vann, länkas med game over screen;
            gameIsWon = true;    
    
        } else if(userInput < answer){
            question.innerHTML = `Ouch! ${userInput} is To low.`;   
    
        } else{
            question.innerHTML = `Sorry! ${userInput} is To high`;
        }
    });

}

