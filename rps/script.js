function game() {
    let winner = " ";
    let gameWin = 0;
    let gameLoss = 0;
    let gameRounds = 0;

    //This function gets the computer to choose a random choice from the array and give it to us.
    function getComputerChoice() {
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
    //This is the loop that causes the game to play through 5 rounds and then output a winner.
    while(gameRounds < 5){
        gameRounds++
        function playRound() {

            let answer = prompt("Choose rock,paper,or scissors:");
            let fixedAnswer = answer.toLowerCase();    
            let computerSelection = getComputerChoice();
            let playerSelection = fixedAnswer;
        
            if(playerSelection == "rock" && computerSelection == "scissors"){
                gameWin++;
            }else if(playerSelection == " rock " && computerSelection == "paper"){
                gameLoss++;
            }else if(playerSelection == "paper" && computerSelection == "rock"){
                gameWin++;
            }else if(playerSelection == "paper" && computerSelection == "scissors"){ 
                gameLoss++;
            }else if(playerSelection == "scissors" && computerSelection == "paper"){
                gameWin++;
            }else if(playerSelection == "scissors" && computerSelection == "rock"){
                gameLoss++;
            }else if(playerSelection == computerSelection){
                return "Tie Game!";
            }
        }
        //This call the imbedded function of playRound to start the loop.
        playRound();
    }
    //This checks to see if the player won or lost the game by examing the variables listed.
    if(gameWin > gameLoss){
        winner = " Victory is yours!";
    }else if(gameLoss > gameWin) {
        winner = " You have lost!"
    }
    return winner;
}
 
console.log(game());