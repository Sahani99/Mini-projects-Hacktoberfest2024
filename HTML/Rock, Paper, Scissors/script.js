let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const resultMessage_p = document.getElementById("result-message");

const choices = document.querySelectorAll(".choices button");

choices.forEach(choice => {
    choice.addEventListener("click", function() {
        const userChoice = this.id;
        const computerChoice = getComputerChoice();
        determineWinner(userChoice, computerChoice);
    });
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(user, computer) {
    if (user === computer) {
        resultMessage_p.innerText = "It's a draw!";
    } else if (
        (user === "rock" && computer === "scissors") ||
        (user === "scissors" && computer === "paper") ||
        (user === "paper" && computer === "rock")
    ) {
        userScore++;
        userScore_span.innerText = userScore;
        resultMessage_p.innerText = "You win!";
    } else {
        computerScore++;
        computerScore_span.innerText = computerScore;
        resultMessage_p.innerText = "You lose!";
    }
}
