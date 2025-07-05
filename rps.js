let Hscore = 0;
let Cscore = 0;
let huChoice = "";
let comChoice = "";

function getComChoice(){
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function getWinner(huChoice, comChoice){
    if (huChoice === comChoice) {
        return "Draw";
    } else {
        switch (huChoice) {
            case "rock":
                return (comChoice === "scissors") ? (++Hscore, "You Win!") : (++Cscore, "You lost.");
            case "paper":
                return (comChoice === "rock") ? (++Hscore, "You Win!") : (++Cscore, "You lost.");
            case "scissors":
                return (comChoice === "paper") ? (++Hscore, "You Win!") : (++Cscore, "You lost.");
        }
    }
}

function playRound(event){
    const target = event.target;
    const validChoices = ["rock", "paper", "scissors"];

    if (!validChoices.includes(target.id)) return;

    huChoice = target.id;
    comChoice = getComChoice();
    const result = getWinner(huChoice, comChoice);

    const Sc = document.querySelector("#score");
    Sc.textContent = `You Chose: ${huChoice} | Computer Chose: ${comChoice} |
     ${result} | Your Score: ${Hscore} | Computer Score: ${Cscore}`;
}

document.querySelector("#choices").addEventListener("click", playRound);
