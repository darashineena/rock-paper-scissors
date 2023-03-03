function getRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
}

function getComputerChoice() {
    let computerChoice;
    switch (getRandomNumber()) {
        case 0:
            computerChoice = "Rock";
            return computerChoice;
        case 1:
            computerChoice = "Paper";
            return computerChoice;
        case 2:
            computerChoice = "Scissors";
            return computerChoice;
    }
}