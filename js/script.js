let playerScore = 0;
let computerScore = 0;
let playedRounds = 0;
const scoreDiv = document.querySelector("#score");
const resultsDiv = document.querySelector("#results");
const btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click', (buttonClicked) => {
    buttonClicked = btn.id;
    playRound(buttonClicked);
}));

function reset() {
    playerScore = 0;
    computerScore = 0;
    playedRounds = 0;
    scoreDiv.textContent = "";
    resultsDiv.textContent = "Please select your choice.";
};

function determineScore(playerScore, computerScore) {
    if (playerScore > computerScore) {
        scoreDiv.textContent = `You are winning the game ${playerScore} to ${computerScore}`;
    }
    else if (playerScore < computerScore) {
        scoreDiv.textContent = `You are loosing the game ${computerScore} to ${playerScore}`;
    }
    else {
        scoreDiv.textContent = `You are tied ${computerScore} to ${playerScore}`;
    }
    if (playedRounds > 5) determineWinner(playerScore, computerScore);
};

function determineWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        scoreDiv.textContent = `You've won the game ${playerScore} to ${computerScore}`;
    }
    else if (playerScore < computerScore) {
        scoreDiv.textContent = `You've lost the game ${computerScore} to ${playerScore}`;
    }
    else scoreDiv.textContent = `You've tied the game ${computerScore} to ${playerScore}`;
};

function playRound(playerChoice){
    playedRounds++;
    console.log(playedRounds);
    let computerChoice = getComputerChoice();
    if (playerChoice === "reset") reset();
    else if (playedRounds > 5) determineWinner(playerScore, computerScore);
    else if (playerChoice == computerChoice) {
        resultsDiv.textContent = `It's a tie, ${playerChoice} ties with ${computerChoice}.`;
        determineScore(playerScore, computerScore);
        if (playedRounds === 5) determineWinner(playerScore, computerScore);
    } 
    else if ( (playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")) {
        resultsDiv.textContent = `You won, ${playerChoice} beats ${computerChoice}.`;
        playerScore++;
        determineScore(playerScore, computerScore);
        if (playedRounds === 5) determineWinner(playerScore, computerScore);
    } 
    else {
        resultsDiv.textContent = `You lost, ${computerChoice} beats ${playerChoice}.`;
        computerScore++;
        determineScore(playerScore, computerScore);
        if (playedRounds === 5) determineWinner(playerScore, computerScore);
    }
};

function getComputerChoice() {
    let computerChoice;
    switch (getRandomNumber()) {
        case 0:
            computerChoice = "rock";
            return computerChoice;
        case 1:
            computerChoice = "paper";
            return computerChoice;
        case 2:
            computerChoice = "scissors";
            return computerChoice;
    }
};

function getRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
};