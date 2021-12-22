function getRandomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function playComputer() {
    let possibleChoices = ['rock','paper','scissors'];
    let pick = getRandomIntFromInterval(0,2);
    return possibleChoices[pick];
} 

function getPlayerSelect(){
    let playerChoice=window.prompt('Do you want to pick Rock, Paper or Scissors?');
    let playerChoiceCorrected = playerChoice.toLowerCase();
    if (playerChoiceCorrected !== 'rock' && playerChoiceCorrected !== 'paper' && playerChoiceCorrected !== 'scissors' ){
        alert("That is not a valid choice, please pick again!");
        playerChoiceCorrected = playerSelect();
    }
    return playerChoiceCorrected;
}
function decideWhoWins(playerSelection,computerSelection){
    

    if (playerSelection === 'rock'){
        if (computerSelection === 'rock'){
            return ['It\'s a draw! Rock vs Rock!',1]; 
        }
        else if (computerSelection === 'paper'){
            return ['You lose! Paper beats Rock!',2];
        }
        else {
            return ['You win! Rock beats Scissors!',3];
        } 
    }

    if (playerSelection === 'paper'){
        if (computerSelection === 'paper'){
            return ['It\'s a draw! Paper vs Paper!',1]; 
        }
        else if (computerSelection === 'scissors'){
            return ['You lose! Scissors beats Paper!',2];
        }
        else {
            return ['You win! Paper beats Rock!',3];
        } 
    }

    if (playerSelection === 'scissors'){
        if (computerSelection === 'scissors'){
            return ['It\'s a draw! Scissors vs Scissors!',1]; 
        }
        else if (computerSelection === 'rock'){
            return ['You lose! Rock beats Scissors!',2];
        }
        else {
            return ['You win! Scissors beats Paper!',3];
        } 
    }
}



    let playerScore = 0;
    let computerScore = 0;
    const scoreContainer = document.querySelector('.scoreContainer');
    const currentScore = document.createElement('div');
    currentScore.textContent=`Current score: ${playerScore} - ${computerScore}`;
    scoreContainer.appendChild(currentScore);


function playOneRound(playerChoice){
    let computerChoice = playComputer();
    let whoWon = decideWhoWins(playerChoice,computerChoice);
    if (whoWon[1] === 3){
        playerScore++;
    }
    else if (whoWon[1] === 2){
        computerScore++;
    }
    currentScore.textContent=`Current score: ${playerScore} - ${computerScore}`;

    if(playerScore>= 5){
        currentScore.textContent=`You Won! Final Score: ${playerScore} - ${computerScore}`
        rockButton.removeEventListener('click',playOneRoundRock);
        paperButton.removeEventListener('click',playOneRoundPaper);
        scissorsButton.removeEventListener('click',playOneRoundScissors);
    }

    if(computerScore>= 5){
        currentScore.textContent=`You Lost! Final Score: ${playerScore} - ${computerScore}`
        rockButton.removeEventListener('click',playOneRoundRock);
        paperButton.removeEventListener('click',playOneRoundPaper);
        scissorsButton.removeEventListener('click',playOneRoundScissors);
    }

}

function playOneRoundRock(){
    playOneRound('rock');
}

function playOneRoundScissors(){
    playOneRound('scissors');
}

function playOneRoundPaper(){
    playOneRound('paper');
}

const buttons = document.querySelectorAll('button');

const rockButton = document.querySelector('#rockButton');
    rockButton.addEventListener('click', playOneRoundRock);

const paperButton = document.querySelector('#paperButton');
    paperButton.addEventListener('click', playOneRoundPaper);

const scissorsButton = document.querySelector('#scissorsButton');
    scissorsButton.addEventListener('click', playOneRoundScissors );

/*
window.addEventListener('click',()=>{


    if(playerScore>=5){
        currentScore.textContent=`You Won! Final score: ${playerScore} - ${computerScore}!`;
        rockButton.removeEventListener('click',() => {
            let playerChoice='rock';
            playOneRound(playerChoice);
        });
    }
    if(computerScore>=5){
        currentScore.textContent=`You lost! Final score: ${playerScore} - ${computerScore}!`;

    }

})

*/