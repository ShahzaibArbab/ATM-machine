#! /usr/bin/env node

import inquirer from "inquirer";
import Choice from "inquirer/lib/objects/choice.js";
import Choices from "inquirer/lib/objects/choices.js";
console.log("PIN 2471");

let myBalance = Math.floor(Math.random()*20000+2000);
// let myBalance = 6000;
let myPin = 2471;

const answers = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "Enter Pin Code:",
  },
]);
if (answers.pin === myPin) {
  console.log("✔");

  let Operations = await inquirer.prompt([
    {
      name: "amount_Option",
      type: "list",
      message: "CHOOSE ONE OPTION TO CONTINUE",
      choices: ["Fast Cash ✔", "Withdraw ✔", "Check Balance ✔"],
    },
  ]);

  if (Operations.amount_Option === "Fast Cash ✔") {
    let Withdraw = await inquirer.prompt([
      {
        name: "Cash",
        type: "list",
        message: "Please Select Your Amount💸✔",
        choices: ["2000", "5000", "8000", "10000"],
      },
    ]);
    if (Operations.Withdraw === "Cash"){
        myBalance -=Withdraw.Cash
      console.log(`Your transactions successfull!!\nYour remaining Balance is ${myBalance}\nThank You for using MRX-ATM`)
    } else if (Withdraw.Cash === "5000") { myBalance -=Withdraw.Cash
      console.log(`Your transactions successfull!!\nYour remaining Balance is ${myBalance}\nThank You for using MRX-ATM`)
    } else if (Withdraw.Cash === "8000") { myBalance -=Withdraw.Cash
      console.log(`Your transactions successfull!!\nYour remaining Balance is ${myBalance}\nThank You for using MRX-ATM`)
    } else if (Withdraw.Cash === "10000") { myBalance -=Withdraw.Cash
      console.log(`Your transactions successfull!!\nYour remaining Balance is ${myBalance}\nThank You for using MRX-ATM`)
    } else {
      console.log(`Please Enter the Correct Amount Your Current Balance is: ${myBalance}`);
    }
};
  

  if (Operations.amount_Option === "Withdraw ✔") {
    let amount_Option = await inquirer.prompt([
      {
        name: "Amount",
        type: "number",
        message: "Enter Your Amount💸✔",
      },
    ]);

    if (amount_Option.Amount="Amount") {
       
console.log(`Your transactions successfull!!\nYour remaining Balance is ${myBalance}\nThank You for using MRX-ATM`);
     }else {
      console.log(`Please Enter the Correct Amount Your Current Balance is: ${myBalance} `);
    }
  }

  if (Operations.amount_Option === "Check Balance ✔") {
    console.log(`Your Current Balance is : ${myBalance} 💸`);
  }
} else {
  console.log(`Please Enter the Correct Pin!!`);
}
