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