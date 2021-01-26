let botGuessTwo = Math.floor(Math.random() * 20) + 1;

class BotTwo extends Bot{
    constructor(speed, guess){
        this.speed = speed;
        this.guess = guess;
    }

    speed() {
      this.speed = speed;
    }
    
}

const botTwo = new Bot(3000,botGuessTwo)

setTimeout(() => { 
  console.log(botTwo.guess);
}, botTwo.speed);
