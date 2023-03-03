function getRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
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
} else return true;
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
    } else if (choice == "rock" || choice == "paper" || choice == "scissors" ) {
        return false;
        } else return true;
}

function getPlayerChoice2() {
    let playerChoice = prompt("Rock, paper, or scissors?");
    let keepGoing = true;
    while (keepGoing) {
        if (playerChoice != null) {
         playerChoice = playerChoice.toLowerCase();
            if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
            return playerChoice;
            } else {
                playerChoice = prompt("That's neither rock, paper, or scissors. Please enter your choice again.")
            }
        } else {
            keepGoing = false;
            alert("Cancelled.");
        }
    } 
}

console.log(getPlayerChoice());