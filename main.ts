#! /usr/bin/env node

import inquirer from "inquirer"

const currency: any = {
    USD: 1,             // base currency
    GBP: 0.74,
    EUR: 0.91,
    INR: 74.57,
    PKR: 280,
}

let user_answer = await inquirer.prompt(
    [
        {
           name: "from",
           message: "Enter from currency",
           type: "list",
           choices: ["USD","GBP","EUR","INR","PKR"]
        },
        {
            name: "to",
            message: "Enter to currency",
            type: "list",
            choices: ["USD","GBP","EUR","INR","PKR"]
        },
        {
            name: "amount",
            message: "Enter Your Amount",
            type: "number",           
        },

    ]  
)
// console.log(user_answer)                          // this console for testing result of user

let fromAmount = currency[user_answer.from]          // currency ["USD"]
let toAmount = currency[user_answer.to]              // currency ["PKR"]
let amount = user_answer.amount
// exapple ent 5K PKR for Cnvt to GBP / first cnvt to USD then GBP
let baseAmount = amount / fromAmount                  // 16800 / 280
let convertAmount = baseAmount * toAmount             // 60 * 74.57

console.log(convertAmount)

// console.log(fromAmount)
// console.log(toAmount)
// console.log(amount)

















// let studentData : any = {
//     nsmr: "Roofan",
//     age: 35,
//     rollNnumber : "std-456",
//     address : "Karachi",
// }

// let property: any =  "name"

// console.log(studentData[property]);
