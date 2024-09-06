const choices = ['rock', 'paper', 'scissors'];

let humanScore = 0;
let computerScore = 0;

// adopted from MDN but makes sense
function getRandomInteger(maxval) {
  return Math.floor( maxval * Math.random() );
}

function getComputerChoice(){
    return choices[ getRandomInteger(3)];
}

function getHumanChoice(){
    
    let choice = null;
    while ( choice===null){
      choice = prompt('Make your choice!');
      try {
        if (choices.indexOf(choice.toLowerCase()) < 0){
          choice=null;
        }
      } catch {
        // quietly handle user-cancel
        return null;
      }
    }
    return choice;
}

function playRound( humanChoice, computerChoice) {
    
    try {
      humanChoice= humanChoice.toLowerCase();
    } catch {
        return false;
    }
    
    let msg;
    
    console.log('Computer: ' + computerChoice + ' vs You: ' + humanChoice )
    if(humanChoice == computerChoice){
        msg = `No winner...you both chose ${computerChoice}`;
        computerChoiceDiv.textContent = msg; // uses hoisting :)
        return true;
    }

    if(humanChoice=="rock"){
        if(computerChoice=='paper'){
            msg = 'Paper covers rock...you lose!';
            computerScore++;
        } else {
            msg = 'Rock break scissors...you win!';
            humanScore++;
        }
        computerChoiceDiv.textContent = msg; // uses hoisting :)
        return true;
    }

    if(humanChoice=="paper"){
        if(computerChoice=='rock'){
            msg = 'Paper covers rock...you win!';
            humanScore++;
        } else {
            msg = 'Scissors cut paper...you lose!';
            computerScore++;
        }
        computerChoiceDiv.textContent = msg; // uses hoisting :)
        return true;
    }

    if(humanChoice=="scissors"){
        if(computerChoice=='rock'){
            msg = 'Rock breaks scissors...you lose!';
            computerScore++;
        } else {
            msg = 'Scissors cut paper...you win!';
            humanScore++;
        }
        computerChoiceDiv.textContent = msg; // uses hoisting :)
        return true;
    }
    
    console.log('Uh-oh...something went wrong!');
    return false;

}

function updateScoreBoard(){
  computerScoreBoard.textContent = computerScore;
  humanScoreBoard.textContent = humanScore;
}

/* displays */
const computerChoiceDiv = document.querySelector('#computer-selection')

const computerScoreBoard = document.querySelector('#computer-score>a')
const humanScoreBoard = document.querySelector('#human-score>a')


/* listeners on each button
const buttonPlayerRock = document.querySelector('#player-rock');
buttonPlayerRock.addEventListener( "click", (e)=>{
  console.log(e)
  playRound("rock", getComputerChoice());
  updateScoreBoard();
});

const buttonPlayerPaper = document.querySelector('#player-paper');
buttonPlayerPaper.addEventListener( "click", (e)=>{
  playRound("paper", getComputerChoice());
  updateScoreBoard(); 
});

const buttonPlayerScissors = document.querySelector('#player-scissors');
buttonPlayerScissors.addEventListener( "click", (e)=>{
  playRound("scissors", getComputerChoice());
  updateScoreBoard(); 
});
*/

/* generic listener */
const buttonContainer = document.querySelector('#player-buttons');
buttonContainer.addEventListener( "click", (e)=>{
  
  // reset button colors
  Array.from(buttonContainer.children).forEach( x=>{
    x.style.backgroundColor='lightgray';
  })
  e.target.style.backgroundColor='yellow';
  playRound(e.target.innerText.toLowerCase(), getComputerChoice());
  updateScoreBoard();
  if( (computerScore >=5) || (humanScore >=5) ){
    
    const scoreBoards = document.querySelector('#container-running-score');
  
    // make sure scoreboard is updated before prompting for another game
    // inspired by: https://stackoverflow.com/questions/8840580
    setTimeout(function() {
      let msg = (computerScore >=5) ? 'The computer' : 'Congrats! You';
      msg = `${msg} won best of five games! Play again?`;
      if (confirm(msg)) {
        computerScore=0;
        humanScore=0;
        updateScoreBoard();
        return;
      };
    },0);
    
    // https://stackoverflow.com/questions/15555295/how-to-disable-div-element-and-everything-inside
    buttonContainer.style.pointerEvents='none';
  }
});


/*
(function playGame(num_games = 5) {
  
  let playAnother = true;

  for( let i=1; i<=num_games; i++) {
      console.log(`---- Round ${i} ----`);
      playAnother = playRound( getHumanChoice(), getComputerChoice() );
      if (!playAnother) {
        console.log('You quit!')
        break
      }
      console.log(`Computer: ${computerScore} ... You: ${humanScore} \n`);
  }
  
  console.log(`Final score: Computer: ${computerScore} .... You: ${humanScore} \n`);

})() // play it right away...
*/