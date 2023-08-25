const playertext = document.querySelector("#playertext");
const computertext = document.querySelector("#computertext");
const resulttext = document.querySelector("#resulttext");
const choiceBtn = document.querySelectorAll(".choiceBtn")

let player;
let computer;
let result;

choiceBtn.forEach(button => button.addEventListener("click", () => {
    //gets the text value of button
    player = button.textContent;
    computerTurn();

    //displays the result
    playertext.textContent = `Player: ${player}`;
    computertext.textContent = `Computer: ${computer}`;
    resulttext.textContent = checkWinner();
}))

function computerTurn(){
    //generates random numbers 1 to 3
    const randNum = Math.floor(Math.random()* 3) + 1;

    switch(randNum){
        case 1:
        computer = "ROCK";
        break;
        case 2:
        computer = "PAPER";
        break;
        case 3:
        computer = "SCISSORS";
        break;
    }
}

function checkWinner(){
    if(player == computer){
        return "Draw!";
    }
    else if (computer == "ROCK"){
        return (player == "PAPER") ? "You win!" : "You Lose!";
    }
    else if (computer == "PAPER"){
        return (player == "SCISSORS") ? "You win!" : "You Lose!";
    }
    else if (computer == "SCISSORS"){
        return (player == "ROCK") ? "You win!" : "You Lose!";
    }
}