let botGuessThree = Math.floor(Math.random() * 20) + 1;

class BotThree extends Bot{
    constructor(speed, guess){
        this.speed = speed;
        this.guess = guess;
    }

    speed() {
      this.speed = speed;
    }
}

const botThree = new Bot(1000,botGuessThree)

setTimeout(() => { 
  console.log(botThree.guess);
}, botThree.speed);
