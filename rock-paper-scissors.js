

console.log("Hello World")

var humanScore = 0;
var computerScore = 0;

playGame()

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice)
    console.log(computerChoice)

    if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++
        return console.log("You win");
    }
    else if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore++
        return console.log("You win");
    }
    else if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++
        return console.log("You win");
    }
    else if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore++
        return console.log("You lose");
    }
    else if (humanChoice == "paper" && computerChoice == "scissors"){
        computerScore++
        return console.log("You lose");
    }
    else if (humanChoice == "scissors" && computerChoice == "rock"){
        computerScore++
        return console.log("You lose")
    }
    else {
        return console.log("it's a draw");
    }
}

function getComputerChoice() {

    value = getRandomInt(3);
    if (value == 0)
        return "rock"
    else if (value == 1)
        return "paper"
    else if (value == 2)
        return "scissors"

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
}

function getHumanChoice() {
    userWeapon = prompt("What is your weapon?")
    return userWeapon
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log("Your score: ", humanScore)
    console.log("Computer score: ", computerScore)
}