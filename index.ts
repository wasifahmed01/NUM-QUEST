#! /usr/bin/env node

import inquirer from 'inquirer'

const randomNumber = Math.floor(Math.random() * 6 + 1);

console.log("Welcome to number guessing game");
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6: ",
    },
]);


console.log(answers);


if (answers.userGuessedNumber===randomNumber) {
    console.log("Congratulation! you guessed right number.");
} else {
    console.log("ohhh!!! you guessed wrong number.");
    console.log("Computer guessed number is :");
    console.log(randomNumber);
}
