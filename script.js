/*var scorePlayer = 0;
var scoreComputer = 0;
var choices = ['rock', 'paper', 'scissors'];

function computerPlay () {
  var rdnNum = Math.floor(Math.random() * 3 + 1); // 1R, 2P, 3S
  return rdnNum;
}

function playerPlay () {
  var choice = prompt("Rock, paper, scissors!?");
  if (choice == undefined) {return "dksnkn";}
  var n = 0;
  while (n < 3) {
    if (choice.toLowerCase() == choices[n]) {
      return n + 1;
    } else {n++;}
  }
}

function playRound (playerSelection, computerSelection) {
  console.log(`Player move: ${choices[playerSelection - 1]} || Machine move: ${choices[computerSelection - 1]}`);
  switch (true) {
    case playerSelection > computerSelection && !(playerSelection == 3 && computerSelection == 1) || playerSelection == 1 && computerSelection == 3:
      scorePlayer++;
      return (`You win! ${choices[playerSelection - 1]} beats ${choices[computerSelection - 1]}`);
    break;
    case playerSelection < computerSelection && !(playerSelection == 1 && computerSelection == 3) || playerSelection == 3 && computerSelection == 1:
      scoreComputer++;
      return (`You lose! ${choices[computerSelection - 1]} beats ${choices[playerSelection - 1]}`);
    break;
    case playerSelection == computerSelection:
      return ("It's a tie!");
    break;
    default:
      return "Insert a valid move to play! Restarting the match...";
  }
}

function game () {
  for (n = 0; n < 5; n++) {
    console.log(`${n + 1}st Round:`)
    var result = playRound(playerPlay(), computerPlay());
    console.log(result);
    if (result == "Insert a valid move to play! Restarting the match...") {
      n--;
    }
  }
  console.log(scorePlayer, scoreComputer);
  if (scorePlayer > scoreComputer) {
    return "Congrats! You won the 5 rounds match!";
  } else if (scorePlayer < scoreComputer) {
    return "Too bad! you lost the 5 rounds match, wanna try again?"
  } else {return "So close! It's a tie!";}
}

console.log(game())
