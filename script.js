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


function playRound(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    return `it's a tie! the score is ${playerWins} to ${computerWins}`;
  }
  else if ((playerChoice == rock && computerChoice == paper) || (playerChoice == paper && computerChoice == scissors) || (playerChoice == scissors && computerChoice == rock)) {
    ++computerWins;
    return `you lose! ${computerChoice} beats ${playerChoice}! the score is ${playerWins} to ${computerWins}`;
  }
  else {
    ++playerWins;
    return `you win! ${playerChoice} beats ${computerChoice}! the score is ${playerWins} to ${computerWins}`
  }
}

const rButton = document.querySelector("#btnRock");
rButton.addEventListener("click", function() {
  const pChoice = rock;
  console.log("You chose rock!");
  const cpuChoice = getComputerChoice();
  console.log(playRound(pChoice, cpuChoice));
});

const pButton = document.querySelector("#btnPaper");
pButton.addEventListener("click", function() {
  const pChoice = paper;
  console.log("You chose paper!");
  const cpuChoice = getComputerChoice();
  console.log(playRound(pChoice, cpuChoice));
});

const sButton = document.querySelector("#btnScissors");
sButton.addEventListener("click", function() {
  const pChoice = scissors;
  console.log("You chose scissors!");
  const cpuChoice = getComputerChoice();
  console.log(playRound(pChoice, cpuChoice));
});
//console.log(playRound(getPLayerSelection(),getComputerChoice()));


