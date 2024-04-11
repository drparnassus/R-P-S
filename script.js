/* script.js */
const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let playerWins = 0;
let computerWins = 0;

function rngMaybe(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function getComputerChoice() {
  let jsChoice = rngMaybe(1, 3)
  if (jsChoice == 1) {
    console.log("I picked " + rock + "!");
    return rock;
  }
  else if (jsChoice == 2) {
    console.log("I picked " + paper + "!");
    return paper;
  }
  else if (jsChoice == 3) {
    console.log("I picked " + scissors + "!");
    return scissors;
  }
}

function getPLayerSelection() { 
  choice = prompt("rock, paper, or scissors?")
  console.log("you picked " + choice + "!");
  if (choice.toLowerCase() == rock) {
    return rock;
  }
  if (choice.toLowerCase() == paper) {
    return paper;
  }
  if (choice.toLowerCase() == scissors) {
    return scissors;
  }
}

function playGame() {
  if (prompt("would you like to play a game?").toLowerCase() == "y") {
    do {
      const pChoice = getPLayerSelection();
      const cChoice = getComputerChoice();
      console.log(playRound(pChoice, cChoice));
    } while (playerWins < 5 && computerWins <5);
  }
  if (playerWins == 5) {
    console.log("you won the game...");
  }
  else if (computerWins == 5) {
    console.log("you lost the game...");
  }
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return `it's a tie! the score is ${playerWins} to ${computerWins}`;
  }
  else if ((playerChoice === rock && computerChoice === paper) || (playerChoice === paper && computerChoice === scissors) || (playerChoice === scissors && computerChoice === rock)) {
    ++computerWins;
    return `you lose! ${computerChoice} beats ${playerChoice}! the score is ${playerWins} to ${computerWins}`;
  }
  else {
    ++playerWins;
    return `you win! ${playerChoice} beats ${computerChoice}! the score is ${playerWins} to ${computerWins}`
  }
}

//console.log(playRound(getPLayerSelection(),getComputerChoice()));


playGame();