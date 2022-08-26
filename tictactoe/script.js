const list = [
    "rock",
    "paper",
    "scissors"
];
//This function grabs from the array above and give us the random value from it.
function getComputerChoice(list){
    const choice = Math.floor(Math.random() * list.length);
    const computer = list[choice];
    return computer;
}

const computerSelection = getComputerChoice(list);

const player = prompt("Choose either Rock, Paper or Scissors!");
const playerSelection = player.toLowerCase();

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        return "It's a tie";
    }else if(playerSelection < computerSelection) {
        return "You win "+playerSelection+" is better than "+ computerSelection;
    }else {
        return "You lose "+computerSelection+" is better than "+ playerSelection;
    }
}

















