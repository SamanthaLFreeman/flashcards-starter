const Turn = require('../src/Turns');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.correct = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn(guess) {
    const card = this.returnCurrentCard();
    const turn = new Turn(guess, card);
    this.turns++;
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(card.id);
      return turn.giveFeedback();
    } else {
      this.correct++;
      return turn.giveFeedback();
    }
  }

  calculatePercentCorrect() {
    return Math.floor((this.correct / this.turns) * 100);
  }

  endRound() {
    if (this.turns === this.deck.length) {
      return console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    }
  }
}

module.exports = Round;