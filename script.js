var scorePlayer = 0;
var scoreComputer = 0;
var round = 0;
var choices = ['rock', 'paper', 'scissors'];
var buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    var clickedButton = e.target.id;
    var clickedButtonNumber = playerPlay(clickedButton);
    console.log(round + 1);
    console.log(playRound(clickedButtonNumber, computerPlay())); // calls playRound function
    round++;
    console.log(scorePlayer, scoreComputer);
    if (round == 5) {
      console.log(calcMatchWinner());
      scorePlayer = 0;
      scoreComputer = 0;
      round = 0;
    }
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

function playRound (playerSelection, computerSelection) {
  var playerIndex = playerSelection - 1;
  var computerIndex = computerSelection - 1;

  var playerWinCondition = playerSelection > computerSelection && !(playerSelection == 3 && computerSelection == 1) || playerSelection == 1 && computerSelection == 3;
  var computerWinCondition = playerSelection < computerSelection && !(playerSelection == 1 && computerSelection == 3) || playerSelection == 3 && computerSelection == 1;

  console.log(`Player move: ${choices[playerIndex]} || Computer move: ${choices[computerIndex]}`);

  switch (true) { // Check moves from players and determines a winner
    case playerWinCondition:
      scorePlayer++
      return (`You win! ${choices[playerIndex]} beats ${choices[computerIndex]}`);
    break;

    case computerWinCondition:
      scoreComputer++
      return (`You lose! ${choices[computerIndex]} beats ${choices[playerIndex]}`);
    break;

    default:
      return "It's a tie!";
  }
}

function calcMatchWinner () {
  console.log("Final: " + scorePlayer, scoreComputer);
  if (scorePlayer > scoreComputer) {
    return "Congrats! You won the 5 rounds match!";
  } else if (scorePlayer < scoreComputer) {
    return "Too bad! you lost the 5 rounds match, wanna try again?"
  } else {return "So close! It's a tie!";}
}
