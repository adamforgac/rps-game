let gameRound = 0
let playerScore = 0
let computerScore = 0


// PLAYER SELECTION OPTIONS 


const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")


// WHEN PLAYER PICKS ROCK


rock.addEventListener("click", function() {
    playRound("rock", computerChoice())
})


// WHEN PLAYER PICKS PAPER


paper.addEventListener("click", function() {
    playRound("paper", computerChoice())
})


// WHEN PLAYER PICKS SCISSORS


scissors.addEventListener("click", function() {
    playRound("scissors", computerChoice())
})



// COMPTER RANDOMLY PICKS ROCK, PAPER OR SCISSORS
// COMPTER RANDOMLY PICKS ROCK, PAPER OR SCISSORS
// COMPTER RANDOMLY PICKS ROCK, PAPER OR SCISSORS



function computerChoice() {
    let weaponArray = ["rock", "paper", "scissors"]
    let weaponLength = weaponArray.length
    let weaponPicker = Math.floor(Math.random()*weaponLength) 
    let computerFinalPick = weaponArray[weaponPicker]
    return computerFinalPick
}



// ONE ROUND OF THE GAME
// ONE ROUND OF THE GAME
// ONE ROUND OF THE GAME



function playRound(playerSelection, computerSelection) {
    if(
        playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper"


    ) {
        playerScore++
        gameRound++

        document.querySelector("#score-number-player-1").textContent = playerScore
        document.querySelector("#game-round-number").textContent = gameRound
        document.querySelector("#game-state").textContent = `You won! ${playerSelection} beats ${computerSelection}`

        if(playerScore === 5) {
            winPlayer()
        }


    } else if(
        playerSelection == "rock" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "rock"


    ) {
        computerScore++
        gameRound++
        document.querySelector("#game-round-number").textContent = gameRound
        document.querySelector("#score-number-player-2").textContent = computerScore
        document.querySelector("#game-state").textContent = `You lost! ${computerSelection} beats ${playerSelection}`

        if(computerScore === 5) {
            winComputer()
        }


    } else if(
        playerSelection == "rock" && computerSelection == "rock" ||
        playerSelection == "paper" && computerSelection == "paper" ||
        playerSelection == "scissors" && computerSelection == "scissors"


    ) {
        gameRound++
        document.querySelector("#game-round-number").textContent = gameRound
        document.querySelector("#game-state").textContent = "It's a tie, keep going!"


    }
}



// THE GAME STOPS IF PLAYER OR COMPUTER REACHES SCORE OF 5
// THE GAME STOPS IF PLAYER OR COMPUTER REACHES SCORE OF 5
// THE GAME STOPS IF PLAYER OR COMPUTER REACHES SCORE OF 5



// IF PLAYER WINS


function winPlayer() {
    const gameEndAnimation = document.querySelector(".end-game-screen");
    gameEndAnimation.classList.add("game-end-animation");
    document.querySelector("#end-heading").textContent = "Congrats, you won the game.";
    const resetButton = document.querySelector(".game-end-symbol");
    resetButton.addEventListener("click", playNewGame);
    rock.removeEventListener;
    paper.removeEventListener;
    scissors.removeEventListener;
}


// IF COMPUTER WINS


function winComputer() {
    document.querySelector(".end-game-screen").classList.add("game-end-animation");
    document.querySelector("#end-heading").textContent = "You lost...Better luck next time!";
    const resetButton = document.querySelector(".game-end-symbol");
    resetButton.addEventListener("click", playNewGame);
    rock.removeEventListener("click");
    paper.removeEventListener("click");
    scissors.removeEventListener("click");
}



// NEW GAME 


function playNewGame() {
    gameRound = 0
    playerScore = 0
    computerScore = 0
    document.querySelector(".end-game-screen").classList.remove("game-end-animation");
    document.querySelector("#game-round-number").textContent = 0
    document.querySelector("#score-number-player-2").textContent = 0
    document.querySelector("#score-number-player-1").textContent = 0
    document.querySelector("#game-state").textContent = "Choose your weapon"
}