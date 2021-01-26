let botGuess = Math.floor(Math.random() * 20) + 1;


class Bot{
    constructor(speed, guess){
        this.speed = speed;
        this.guess = guess;
    }

    speed() {
      this.speed = 2000;
    }
}

const botOne = new Bot(2000,botGuess)

setTimeout(() => { 
  console.log(botOne.guess);
}, botOne.speed);