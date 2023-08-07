function getComputerChoice() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let choice = getRandomInt(3);

  // if (choice == 0) choice = "Rock";
  // if (choice == 1) choice =  "Paper";
  // if (choice == 2) choice =  "Scissors";

  return choice;
}
let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) {
  if (playerSelection == 0 && computerSelection == 2) {
    alert("Rock beats Scissors. You Win!");
    playerScore++;
  }
  if (playerSelection == 0 && computerSelection == 1) {
    alert("Paper beats Rock. You Lose!");
    computerScore++;
  }
  if (playerSelection == 0 && computerSelection == 0) {
    alert("It's a Tie!");
  }

  if (playerSelection == 1 && computerSelection == 0) {
    alert("Paper beats Rock. You Win!");
    playerScore++;
  }
  if (playerSelection == 1 && computerSelection == 2) {
    alert("Scissors beats Paper. You Lose!");
    computerScore++;
  }
  if (playerSelection == 1 && computerSelection == 1) {
    alert("It's a Tie!");
  }

  if (playerSelection == 2 && computerSelection == 1) {
    alert("Scissors beats Paper. You Win!");
    playerScore++;
  }
  if (playerSelection == 2 && computerSelection == 0) {
    alert("Rock beats Scissors. You Lose!");
    computerScore++;
  }
  if (playerSelection == 2 && computerSelection == 2) {
    alert("It's a Tie!");
  }
  const playerScoreContainer = document.querySelector("#playerScoreContainer");

  const playerContent = document.createElement("div");
  playerContent.textContent = "Player Score: " + playerScore;

  playerScoreContainer.appendChild(playerContent);

  const computerScoreContainer = document.querySelector(
    "#computerScoreContainer"
  );

  const computerContent = document.createElement("div");
  computerContent.textContent = "Computer Score: " + computerScore;

  computerScoreContainer.appendChild(computerContent);
}
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    playRound(button.id, getComputerChoice());
  });
});
