#! /usr/bin/env node

import inquirer from "inquirer"

// 1) computer will generate a random number

// 2) user input for guessing number

// 3) compare user input with computer generated random number and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name : "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 - 10: "
    }
]);
if(answer.userGuessedNumber == randomNumber){
    console.log("Congratulations! you guessed the number.")
}else{
    console.log("You guessed wrong number")
}