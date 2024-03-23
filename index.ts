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

let attempts = 0;
while (true){

    if(answer.userGuessedNumber == randomNumber){
        console.log("Congratulations! you guessed the number.");
        console.log("You guessed the right answer in "+ attempts+" attempts.");
        break;
    }else if (answer.userGuessedNumber >= randomNumber){
        console.log("Try a lower number.");
        attempts++;
    }else{
        console.log("Try a higher number.");
        attempts++;
    }
}