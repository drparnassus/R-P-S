/* script.js */
const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let playerWins = 0;
let computerWins = 0;

const scoreboard = document.querySelector("#scoreboard");

const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const cpuMove = document.querySelector("#cpuMove");
const roundResultDisplay = document.querySelector("#roundResultDisplay");

function endGame(result) {
  alert(`You ${result}!`)
}

function updateScores(p, c) {
  playerScore.textContent=`You: ${p}`;
  computerScore.textContent=`Me: ${c}`;
}

function updateCpuMove(cM) {
  if (cM.toLowerCase() === 'play a best of 5?') {
    cpuMove.textContent = cM;
  } else {
    cpuMove.textContent = `I pick ${cM}`;
  }
}

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

function updateResultDisplay(a,b,c) {
  if (c==1) {
    roundResultDisplay.textContent = `You pick ${a}. You win`;
  }
  else if (c==2) {
    roundResultDisplay.textContent = `You pick ${a}. You lose`;
  }
  else if (c==0) {
    roundResultDisplay.textContent = `You pick ${a}. It's a tie`;
  }
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    updateResultDisplay(playerChoice, computerChoice, 0);
    //console.log(`it's a tie! the score is ${playerWins} to ${computerWins}`);
  }
  else if ((playerChoice == rock && computerChoice == paper) || (playerChoice == paper && computerChoice == scissors) || (playerChoice == scissors && computerChoice == rock)) {
    ++computerWins;
    updateResultDisplay(playerChoice, computerChoice, 2);
    //console.log(`you lose! ${computerChoice} beats ${playerChoice}! the score is ${playerWins} to ${computerWins}`);
  }
  else {
    ++playerWins;
    updateResultDisplay(playerChoice, computerChoice, 1);
    //console.log(`you win! ${playerChoice} beats ${computerChoice}! the score is ${playerWins} to ${computerWins}`);
  }
  updateCpuMove(computerChoice);
  updateScores(playerWins, computerWins);
  if (playerWins == 5) {
    updateScores(0, 0);
    setTimeout(() => {
      endGame(won = "won");
    }, 10); // Delaying the alert slightly to ensure UI updates first
    updateCpuMove("play a best of 5?");
    playerWins = 0;
    computerWins = 0;
  }
  else if (computerWins == 5) {
    updateScores(0, 0);
    setTimeout(() => {
      endGame(lost = "lost");
    }, 10); // Delaying the alert slightly to ensure UI updates first
    cpuMove.textContent="play a best of 5?";
    playerWins = 0;
    computerWins = 0;
  }
}

const rButton = document.querySelector("#btnRock");
rButton.addEventListener("click", function() {
  const pChoice = rock;
  console.log("You chose rock!");
  const cpuChoice = getComputerChoice();
  playRound(pChoice, cpuChoice);
});

const pButton = document.querySelector("#btnPaper");
pButton.addEventListener("click", function() {
  const pChoice = paper;
  console.log("You chose paper!");
  const cpuChoice = getComputerChoice();
  playRound(pChoice, cpuChoice);
});

const sButton = document.querySelector("#btnScissors");
sButton.addEventListener("click", function() {
  const pChoice = scissors;
  console.log("You chose scissors!");
  const cpuChoice = getComputerChoice();
  playRound(pChoice, cpuChoice);
});
//console.log(playRound(getPLayerSelection(),getComputerChoice()));


