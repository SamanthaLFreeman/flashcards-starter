# FlashCards

![Gameplay Gif](/flashcards_gif.gif)

## Project Description

This project creates simulated flash cards in the command line. The user is able to see questions, answer them, and see immediately if they got the question correct before moving to the next question. At the end of the game, the user will see a display of how many questions they got correct and if they got less than 90% correct then the game will instantly start over.

## Learning Goals

Utilize ES6 classes to build a game application in the terminal. Further establishing my understanding of Object Oriented Programming. In addition, focus on developing my skills in Test Driven Development. All while creating dry code that follows Single Responsibility Principle.

## Created with:

- JavaScript (OOP)
- Mocha/Chai (Unit Testing)

## Setup

On the top right corner of this page, click the **Fork** button.

Once you have cloned the repo, change into the directory and install the library dependencies. Run:

```bash
npm install
```

To verify that it is setup correctly, run `npm test` in your terminal. You should have 5 pending tests in your `Card` test file that show up.

Running `node index.js` from the root of your project should result in the following message being displayed in your terminal:

```bash
Node server running on port 3000
```

_Note that you will not need to you run your server until you are instantiating your `Game` class in Iteration 3. Prior to that, you should be using TDD to drive your code. You should check the functionality of your application by running your tests via `npm test`._

## How to Start the Game

In the terminal, run:

```bash
node index.js
```
