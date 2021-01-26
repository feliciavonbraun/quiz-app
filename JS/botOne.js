

class BotOne extends Bot{
    constructor(speed, guess){
        this.speed = speed;
        this.guess = guess;
    }

    speed() {
      this.speed = speed;
    }
}

const botOne = new Bot(2000,botGuess)

setTimeout(() => { 
  console.log(botOne.guess);
}, botOne.speed);


