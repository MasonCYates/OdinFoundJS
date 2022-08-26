//This function gets the computer to choose a random choice from the array and give it to us.
function getComputerChoice(){
    let rps = [
        "rock",
        "paper",
        "scissors"
    ];
    let computer = Math.floor(Math.random() * rps.length);
    let decision = rps[computer];
    //console.log(decision);
    return decision;
}

function playRound() {
    if(playerSelection == "rock" && computerSelection == "scissors"){
        return playerSelection + " beats "+computerSelection;
    }else if(playerSelection == " rock " && computerSelection == "paper"){
        return computerSelection + " beats "+playerSelection;
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        return playerSelection + " beats "+computerSelection;
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        return computerSelection + " beats "+playerSelection; 
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        return playerSelection + " beats "+computerSelection;
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        return computerSelection + " beats "+playerSelection;
    }else if(playerSelection == computerSelection){
        return "Tie Game!";
    }
   console.log(computerSelection,playerSelection);
}

    let answer = prompt("Choose rock,paper,or scissors:");
    let fixedAnswer = answer.toLowerCase();    
    let computerSelection = getComputerChoice();
    let playerSelection = fixedAnswer;

function game() {
    let winner = " ";
    let gameWin = 0;
    let gameLoss = 0;
    let gameRounds = 0;
    
}