let botGuess = Math.floor(Math.random() * 20) + 1;



class Bot{
    constructor(speed, guess){
        this.speed = speed;
        this.guess = guess;
    }
}

const botOne = new Bot(2000,botguess)

console.log(botOne);