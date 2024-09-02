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

    console.log('Computer: ' + computerChoice + ' vs You: ' + humanChoice )
    if(humanChoice == computerChoice){
        console.log('No winner...you both chose ' + computerChoice )
        return true;
    }

    if(humanChoice=="rock"){
        if(computerChoice=='paper'){
            console.log('Paper covers rock...you lose!');
            computerScore++;
        } else {
            console.log('Rock break scissors...you win!');
            humanScore++;
        }
        return true;
    }

    if(humanChoice=="paper"){
        if(computerChoice=='rock'){
            console.log('Paper covers rock...you win!');
            humanScore++;
        } else {
            console.log('Scissors cut paper...you lose!');
            computerScore++;
        }
        return true;
    }

    if(humanChoice=="scissors"){
        if(computerChoice=='rock'){
            console.log('Rock breaks scissors...you lose!');
            computerScore++;
        } else {
            console.log('Scissors cut paper...you win!');
            humanScore++;
        }
        return true;
    }
    
    console.log('Uh-oh...something went wrong!');
    return false;

}

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