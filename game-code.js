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
    }
    return choice;
}

function playRound( humanChoice, computerChoice) {
    
    console.log('Computer: ' + computerChoice + ' vs You: ' + humanChoice )

    humanChoice= humanChoice.toLowerCase();
    if(humanChoice == computerChoice){
        console.log('No winner...you both chose ' + computerChoice )
        return;
    }

    if(humanChoice=="rock"){
        if(computerChoice=='paper'){
            console.log('Paper covers rock...you lose!');
            computerScore++;
        } else {
            console.log('Rock break scissors...you win!');
            humanScore++;
        }
        return;
    }

    if(humanChoice=="paper"){
        if(computerChoice=='rock'){
            console.log('Paper covers rock...you win!');
            humanScore++;
        } else {
            console.log('Scissors cut paper...you lose!');
            computerScore++;
        }
        return;
    }

    if(humanChoice=="scissors"){
        if(computerChoice=='rock'){
            console.log('Rock breaks scissors...you lose!');
            computerScore++;
        } else {
            console.log('Scissors cut paper...you win!');
            humanScore++;
        }
        return;
    }
    
    console.log('Uh-oh...something went wrong!');

}

// intitial test to make sure things are working
//console.log("Hello world!");
//console.log("You chose " + getHumanChoice() );
//console.log("Computer chose " + getComputerChoice() );

for( let i=1; i<=10; i++) {
    console.log('---- Round ' + String(i) + '------');
    playRound( getHumanChoice(), getComputerChoice() );
    console.log('Computer: ' + String(computerScore) + ' You: ' + String(humanScore) + '\n');
}