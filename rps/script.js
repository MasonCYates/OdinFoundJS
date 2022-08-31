const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const outCome = document.querySelector('.outcome');
const playerSelection = 0;
const computerSelection = "";
const p = document.createElement('p');
let wins = 0;
let losses = 0;
let tiedGames = 0;
const ties = document.querySelector('.tie');
const roundWins = document.querySelector('.win');
const roundLoss = document.querySelector('.loss');

roundWins.innerText = `Player: ${wins}`;
roundLoss.innerText = `Opponent: ${losses}`;
ties.innerText = `Tied: ${tiedGames}`;

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
};


    rock.addEventListener('click', () =>{
        const computerSelection = getComputerChoice();
        const playerSelection = "rock";
        playRound(playerSelection,computerSelection);
    });

    paper.addEventListener('click', () =>{
        const computerSelection = getComputerChoice();
        const playerSelection = "paper";
        playRound(playerSelection,computerSelection);
    });

    scissors.addEventListener('click', () =>{
        const computerSelection = getComputerChoice();
        const playerSelection = "scissors";
        playRound(playerSelection,computerSelection);
    });
  
const playRound = (playerSelection, computerSelection) => {
    if(playerSelection == "rock" && computerSelection == "scissors"){
        wins++;
        p.innerText = "Rock beats Scissors congratulations\!";
        outCome.appendChild(p);
        roundWin();
        winner();
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        losses++;
        p.innerText = "Rock loses to Paper sorry\!";
        outCome.appendChild(p);
        roundWin();
        winner();
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        wins++;
        p.innerText = "Paper beats Rock congratulations\!";
        outCome.appendChild(p);
        roundWin();
        winner();
    }else if(playerSelection == "paper" && computerSelection == "scissors"){ 
        losses++;
        p.innerText = "Paper loses to Scissors sorry\!";
        outCome.appendChild(p);
        roundWin();
        winner();
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        wins++;
        p.innerText = "Scissors beats paper congratulations\!";
        outCome.appendChild(p);
        roundWin();
        winner();
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        losses++;
        p.innerText = "Scissors loses to Rock sorry\!";
        outCome.appendChild(p);
        roundWin();
        winner();
    }else if(playerSelection == computerSelection){
        tiedGames++;
        p.innerText = "Tie Game\!";
        outCome.appendChild(p);
        roundWin();
        winner();
    }
    
};

const roundWin = () => {
    roundWins.innerText = `Player: ${wins}`;
    roundLoss.innerText = `Opponent: ${losses}`;
    ties.innerText = `Tied: ${tiedGames}`;
};
    
const winner = () => {
    if (wins < 5 && losses < 5 && tiedGames < 5){
        return;
    }else if(wins == 5){
        p.innerText = "Player has won\!"
        outCome.appendChild(p);
        wins = 0;
        losses = 0;
        tiedGames = 0;
        roundWin();
    }else if(losses == 5){
        p.innerText = "Computer has won\!"
        outCome.appendChild(p);
        wins = 0;
        losses = 0;
        tiedGames = 0;
        roundWin();
    }else if(tiedGames == 5){
        p.innerText = "Tie Game maybe next time\!"
        outCome.appendChild(p);
        wins = 0;
        losses = 0;
        tiedGames = 0;
        roundWin();
    }
};


    
