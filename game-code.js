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
    return prompt('Make your choice!');
}

// intitial test to make sure things are working
console.log("Hello world!");
console.log("You chose " + getHumanChoice() );
console.log("Computer chose " + getComputerChoice() );