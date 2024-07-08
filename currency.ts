#! /usr/bin/env node
import inquirer from "inquirer"

const currency: any = {
    USD: 1,
    EUR: 0.91,
    G8P: 0.76,
    INR: 74.57,
    PKR: 280
};

let user_Answer = await inquirer.prompt(
    [
        {
        name : "from",
        message :"Enter from currency",
        type: "list",
        choices: ["USD","EUR","G8P","INR","PKR"]
    },{
        name : "to",
        message :"Enter to currency",
        type: "list",
        choices: ["USD","EUR","G8P","INR","PKR"]
    },{
        name : "amount",
        message :"Enter your Amount",
        type: "number",
    }
]
) 
let fromCurrency = currency[user_Answer.from];
let toAmount = currency[user_Answer.to];
let amount = user_Answer.amount
let baseAmount = amount/ fromCurrency
let convertedAmount = baseAmount* toAmount

console.log(convertedAmount);
