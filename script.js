/* script.js */
let playerRWins = 0;
let aiRWins = 0;
let jsChoice = 0;
let choice = 0;
let playerMWins = 0;
let aiMWins = 0;
let pR = 0;
let pP = 0;
let pS = 0;

function rngMaybe(min, max) {
  let chance = Math.floor(Math.random() * 101);
  if (chance <= 5) {
    if (pR > pP && pR > pS) {
      return 2;
    }
    else if (pP > pR && pP > pS) {
      return 3;
    }
    else if (pS > pP && pS > pR) {
      return 1;
    }
  }
  else {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}

function aiTurn() {
  jsChoice = rngMaybe(1, 3)

  console.log(jsChoice);
  console.log("computer picked " + jsChoice + "!");
  return jsChoice;
}


function playerTurn() {
  choice = prompt("rock(1), paper(2), or scissors(3)?")
  console.log("You picked " + choice + "!");
  if (choice == 1) {
    ++pR;
  }
  else if (choice == 2) {
    ++pP;
  }
  else if (choice == 3) {
    ++pS;
  }
  return choice;
}

function c2I(convertMe) {
  if (convertMe == 1) {
    return "rock";
  }
  else if (convertMe == 2) {
    return "paper";
  }
  else if (convertMe == 3) {
    return "scissors"
  }
}

function compareChoices(pC, aiC) {
  if (pC == aiC) {
    console.log("You tied!")
    return 3; //player tie
  }
  else if (pC == 1 && aiC == 2) {
    console.log("You lost!")
    ++aiRWins;
    return 1; //player lose
  }
  else if (pC == 1 && aiC == 3) {
    console.log("You won!")
    ++playerRWins;
    return 2; //player win
  }
  else if (pC == 2 && aiC == 1) {
    console.log("You won!")
    ++playerRWins;
    return 2;
  }
  else if (pC == 2 && aiC == 3) {
    console.log("You lost!")
    ++aiRWins;
    return 1;
  }
  else if (pC == 3 && aiC == 1) {
    console.log("You lost!")
    ++aiRWins;
    return 1;
  }
  else if (pC == 3 && aiC == 2) {
    console.log("You won!")
    ++playerRWins;
    return 2;
  }
  else {
    return 0; //error
  }
}

//let gameQ = prompt("Would you like to play a game? y/n");

function round() {
  playerTurn();
  aiTurn();
}

function match() {
  do {
    round();
    console.log("You picked " + c2I(choice) + " and I picked " + c2I(jsChoice) + ".");
    alert("You picked " + c2I(choice) + " and I picked " + c2I(jsChoice) + ".");
    compareChoices(choice, jsChoice);
    console.log("The score is " + playerRWins + "(you) to " + aiRWins + "(me)")
    alert("The score is " + playerRWins + "(you) to " + aiRWins + "(me)")
  } while (playerRWins < 5 && aiRWins < 5);

  if (playerRWins == 5) {
    console.log("You won the match!")
    alert("You won the match!")
    ++playerMWins;
  }
  else if (aiRWins == 5) {
    console.log("You lost the match!")
    alert("You lost the match!")
    ++aiMWins;
  }

  console.log("Matches won: " + playerMWins + "(you) to " + aiMWins + "(me)")
  alert("Matches won: " + playerMWins + "(you) to " + aiMWins + "(me)")
}

// main loop below
do {
  playerRWins = 0;
  aiRWins = 0;
  match();
} while (prompt("would you like to play a game? y/n") == "y");

/*console.log(choice)
console.log(jsChoice)*/