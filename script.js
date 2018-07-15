var scorePlayer = 0;
var scoreComputer = 0;
var round = 0;
var choices = ['rock', 'paper', 'scissors'];
var buttons = document.querySelectorAll('.buttons button');
var consoleArea = document.querySelector(".console");
var roundWinnerBox = document.querySelector(".round-winner-box");
var roundWinner = document.querySelector("#round-winner");
var matchResult = document.querySelector("#match-result")
var nextButton = document.querySelector("#next");
var playerMove = document.querySelector("#player-move");
var computerMove = document.querySelector("#computer-move");
var waitTime = document.querySelector("#wait-time");
var playerScore = document.querySelector("#player-score");
var computerScore = document.querySelector("#computer-score");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    var playerChoice = e.target.id;
    var playerChoiceNumber = playerPlay(playerChoice);
    var computerChoiceNumber = computerPlay();
    var computerChoice = choices[computerChoiceNumber-1];

    buttons.forEach((button) => {button.disabled=true});

    displayMoves(playerChoice, computerChoice);
    //displays the chosen moves in the hud
    setTimeout(() => {
      console.log(round + 1);
    //Makes code waits till displayMoves() finishes
      playRound(playerChoiceNumber, computerChoiceNumber);
      // calls playRound function
      round++;
      displayScore();
      if (round == 5) {
        console.log(calcMatchWinner());
        scorePlayer = 0;
        scoreComputer = 0;
        round = 0;
        return;
      }
      resetDisplay();
      consoleArea.hidden = true;
      roundWinnerBox.hidden = false;
      nextButton.addEventListener("click", () => {
        consoleArea.hidden = false;
        roundWinnerBox.hidden = true;
        buttons.forEach((button) => {button.disabled=false});
      });
    }, 2500);
  });
});

function computerPlay () { // generates a random move for computer
  var rdnNum = Math.floor(Math.random() * 3 + 1);
  return rdnNum;
}

function playerPlay (choice) { // tranform string (choice) into number
  for (n = 0; n < choices.length; n++) {
    if (choice == choices[n]) {
      return n + 1;
      break;
    }
  }
}

function displayMoves (playerChoice, computerChoice) {
  playerMove.textContent = `You chose ${playerChoice}!`;
  setTimeout(() => {
    waitTime.textContent = '.';
  }, 500);
  setTimeout(() => {waitTime.textContent = '..';
}, 1000);
  setTimeout(() => {
    waitTime.textContent = '...';
    computerMove.textContent = `Computer chose ${computerChoice}!`;
  }, 1500);
}

function displayScore () {
  playerScore.textContent = `Player: ${scorePlayer}`;
  computerScore.textContent = `Computer: ${scoreComputer}`;
}

function resetDisplay () {
  playerMove.textContent = '';
  waitTime.textContent = '';
  computerMove.textContent = '';
}

function playRound (playerSelection, computerSelection) {
  var playerIndex = playerSelection - 1;
  var computerIndex = computerSelection - 1;

  var playerWinCondition = playerSelection > computerSelection && !(playerSelection == 3 && computerSelection == 1) || playerSelection == 1 && computerSelection == 3;
  var computerWinCondition = playerSelection < computerSelection && !(playerSelection == 1 && computerSelection == 3) || playerSelection == 3 && computerSelection == 1;

  console.log(`Player move: ${choices[playerIndex]} || Computer move: ${choices[computerIndex]}`);

  switch (true) { // Check moves from players and determines a winner
    case playerWinCondition: //case player win
      scorePlayer++
      roundWinner.textContent = "PLAYER";
      matchResult.textContent= `You won! ${choices[playerIndex]} beats ${choices[computerIndex]}!`.toUpperCase();
    break;

    case computerWinCondition: //case computer win
      roundWinner.textContent = "COMPUTER";
      scoreComputer++
      matchResult.textContent = `You lose! ${choices[computerIndex]} beats ${choices[playerIndex]}`.toUpperCase();
    break;

    default:
      roundWinner.textContent = "IT'S A TIE";
      matchResult.textContent = "";
  }
}

function calcMatchWinner () {
  console.log("Final: " + scorePlayer, scoreComputer);
  if (scorePlayer > scoreComputer) {
    return "Congrats! You won the 5 rounds match!";
  } else if (scorePlayer < scoreComputer) {
    return "Too bad! you lost the 5 rounds match..."
  } else {return "So close! It's a tie!";}
}
