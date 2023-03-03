game();

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        switch (playRound()) {
            case "playerWins":
                playerScore++;
                break;
            case "computerWins":
                computerScore++;
                break;
            case "tie":
                break;
            case false:
                console.log("Cancelled.");
                i = 100;
                return false;
            default:
                break;
        }
    }
    determineWinner(playerScore, computerScore);
}

function determineWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.info(`You've won the game ${playerScore} to ${computerScore}`);
    }
    else if (playerScore < computerScore) {
        console.info(`You've lost the game ${computerScore} to ${playerScore}`);
    }
    else console.info(`You've tied the game ${computerScore} to ${playerScore}`);
}

function playRound(){
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    if (playerChoice === null) return false;
    if (playerChoice == computerChoice) {
        console.log(`It's a tie, ${playerChoice} ties with ${computerChoice}.`);
        return "tie";
    } 
    else if ( (playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")) {
        console.log(`You won, ${playerChoice} beats ${computerChoice}.`);
        return "playerWins";
    } 
    else {
        console.log(`You lost, ${computerChoice} beats ${playerChoice}.`);
        return "computerWins";
    }
}

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
}

function getRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock, paper, or scissors?");
    let keepGoing = isNotCancelled(playerChoice);
    while (keepGoing) {
        playerChoice = playerChoice.toLowerCase();
        playerChoice = checkChoiceValidity(playerChoice);
        keepGoing = isLooping(playerChoice);
        }
    return playerChoice;
    } 

function isNotCancelled(word){
if (word === null) {
    alert("Cancelled.");
    return false;
} 
else return true;
}

function checkChoiceValidity(choice) {
    if (!(choice == "rock" || choice == "paper" || choice == "scissors")) {
        choice = prompt("That's neither rock, paper, or scissors. Please enter your choice again.");
        }
    return choice;
}

function isLooping(choice) {
    if (!(isNotCancelled(choice))) {
        return false;
    } 
    else if (choice == "rock" || choice == "paper" || choice == "scissors" ) {
        return false;
    } 
    else return true;
}