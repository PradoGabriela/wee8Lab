const buttons = document.querySelectorAll("button");
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

let playerScore = 0;
let computerScore = 0;
let draws = 0;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerMove = button.id;
        const computerMove = ["rock", "paper", "scissors"][getComputerMove()];

        let result = "";
        if (playerMove === computerMove) {
            result = "It's a tie!";
            draws++;

        }else if ( (playerMove === "rock" && computerMove === "scissors") ||
                     (playerMove === "paper" && computerMove === "rock") ||
                     (playerMove === "scissors" && computerMove === "paper")) {

            result = "You win!";
            playerScore++;
        } else {
            result = "Computer wins!";
            computerScore++;
        }
        resultDiv.textContent = "You chose: " + playerMove + " ,  computer chose " + computerMove +  " " + result;
        scoreDiv.textContent = "Player: " + playerScore + " | Computer: " + computerScore + " Draws: " +draws;
    });
});


function getComputerMove(){
    let moveIndex = Math.floor(Math.random() * 3);
    return moveIndex;
}