let Hscore = 0;
let Cscore = 0;
function getComChoice(){
    let no =  Math.floor(Math.random() * 3); 
    let choice = "paper";
    if (no === 0) {
        choice = "rock";
    } else if (no === 1){
        choice="paper";
    } else {
        choice="scissors";
    }
    return choice;
}

function getHuChoice(){
    return prompt("whats your choice?");
}

function getWinner(huChoice , comChoice){
    if (huChoice === comChoice){
        return "draw";
    }else {
    switch (huChoice){
        case "rock":
            return (comChoice==="scissors")?(Hscore++,"You Win!"):(Cscore++,"You lost.");
        case "paper":
            return (comChoice==="scissors")?(Cscore++,"You lost."):(Hscore++,"You Win!");
        case "scissors": 
            return (comChoice==="paper")?(Hscore++,"You Win!"):(Cscore++, "You lost."); 
    } 
}
}

 function playRound(){
   for (i = 0; i<3;i++){ 
    // human inter a choice
    const huChoice = getHuChoice();
    const comChoice = getComChoice();

    //com calcualate the winner
    console.log(getWinner(huChoice,comChoice));
    console.log(`You Chose: ${huChoice}`);
    console.log(`Computer Chose: ${comChoice}`);
    console.log(`Your score is ${Hscore}, computer score is ${Cscore}`);
}
}
console.log(playRound());

