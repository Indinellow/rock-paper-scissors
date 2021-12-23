function getRandomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function playComputer() {
    let possibleChoices = ['rock','paper','scissors'];
    let pick = getRandomIntFromInterval(0,2);
    const computerRock = document.querySelector('.computerRock');
    const computerScissors = document.querySelector('.computerScissors');
    const computerPaper = document.querySelector('.computerPaper');
    
    if(pick===0){computerRock.classList.add('chosen');}
    else if(pick===1){computerPaper.classList.add('chosen');}
    else{computerScissors.classList.add('chosen');}
    
    
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

function checkScore(){
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

function initializeGame(){
    playerScore=0;
    computerScore=0;
    currentScore.textContent=`Current score: ${playerScore} - ${computerScore}`;
    rockButton.addEventListener('click', playOneRoundRock);
    paperButton.addEventListener('click', playOneRoundPaper);
    scissorsButton.addEventListener('click', playOneRoundScissors );
    log.textContent='';

}

function playOneRound(playerChoice){
    let computerChoice = playComputer();
    let whoWon = decideWhoWins(playerChoice,computerChoice);
    if (whoWon[1] === 3){
        playerScore++;
    }
    else if (whoWon[1] === 2){
        computerScore++;
    }
    const log =document.querySelector('.log');
    log.textContent=whoWon[0];
    currentScore.textContent=`Current score: ${playerScore} - ${computerScore}`;
    checkScore();

}
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('chosen');
  }

function playOneRoundRock(){
    playOneRound('rock');
    const rockButton = document.querySelector('#rockButton');
    rockButton.classList.add('chosen'); 
}

function playOneRoundScissors(){
    playOneRound('scissors');
    const scissorsButton = document.querySelector('#scissorsButton');
    scissorsButton.classList.add('chosen');
}

function playOneRoundPaper(){
    playOneRound('paper');
    const paperButton = document.querySelector('#paperButton');
    paperButton.classList.add('chosen');
}
const restartButton = document.querySelector('#restart');
restartButton.addEventListener('click',initializeGame);

let playerScore = 0;
let computerScore = 0;
const scoreContainer = document.querySelector('.scoreContainer');
const currentScore = document.createElement('div');
currentScore.textContent=`Current score: ${playerScore} - ${computerScore}`;
scoreContainer.appendChild(currentScore);

const buttons = document.querySelectorAll('button');

const rockButton = document.querySelector('#rockButton');
    rockButton.addEventListener('click', playOneRoundRock);
    rockButton.addEventListener('transitionend',removeTransition); 

const paperButton = document.querySelector('#paperButton');
    paperButton.addEventListener('click', playOneRoundPaper);
    paperButton.addEventListener('transitionend',removeTransition); 

const scissorsButton = document.querySelector('#scissorsButton');
    scissorsButton.addEventListener('click', playOneRoundScissors );
    scissorsButton.addEventListener('transitionend',removeTransition); 

const computerRock = document.querySelector('.computerRock');
const computerScissors = document.querySelector('.computerScissors');
const computerPaper = document.querySelector('.computerPaper');
const log =document.querySelector('.log');


computerPaper.addEventListener('transitionend',removeTransition); 
computerRock.addEventListener('transitionend',removeTransition); 
computerScissors.addEventListener('transitionend',removeTransition); 

    
