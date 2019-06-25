const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turns');
const Card = require('../src/Card');


describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turns', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('create another instance of Turns', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.guess).to.equal('pug');
    expect(turn.card).to.deep.equal(card);
  });

  it('method that returns the guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.returnGuess()).to.deep.equal('pug');
  });

  it('method that returns the Card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.returnCard()).to.deep.equal(card);
  });

  it('method that returns a boolean', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.evaluateGuess()).to.deep.equal(false);
  });

  it('method that returns correct or incorrect', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.giveFeedback()).to.deep.equal('incorrect!');    
  });
});