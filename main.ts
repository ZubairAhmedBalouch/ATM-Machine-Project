import inquirer from "inquirer";
import chalk from "chalk"; //Chalk Module: It helps to customize the color of the output of the command-line output.

//Intilized user balance and Pinn

let myBalance = 10000; //amount in dollars
let myPin = 4400;

// Print Welcome Message
console.log(
  chalk.blueBright("\n \t Welcome to Zubair Ahmed's - ATM Machine \n") //\n used for new line, \t for center
);

//Taking input pin from user
let pinAns = await inquirer.prompt([
  {
    name: "pin",
    message: chalk.yellow("Enter your pin:"),
    type: "number",
  },
]);

//if pin === 4400 it works, otherwise it prints incorrect pin
if (pinAns.pin === myPin) {
  {
    console.log(chalk.green("\nPin is Correct, Login Successfully!\n"));
  }

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select an option",
      type: "list",
      choices: ["withdraw", "check balance"],
    },
  ]);

  if (operationAns.operation === "withdraw") {
    let withdrawAns = await inquirer.prompt([
      {
        name: "withdrawmethod",
        message: "Please select a withdrawal method",
        type: "list",
        choices: ["Fast Cash", "Enter Amount"],
      },
    ]);

    if (withdrawAns.withdrawmethod === "Enter Amount") {
      let amountAns = await inquirer.prompt([
        {
          name: "amount",
          message: "Enter Amount to withdraw",
          type: "number",
        },
      ]);

      if (amountAns.amount > myBalance) {
        console.log(chalk.red("\n Insufficient Balance \n"));
      } else {
        myBalance -= amountAns.amount;
        console.log(`Your remaining Balance is:${myBalance}`); //used tempelete literal instead of string concatenation
      }
    } else if (withdrawAns.withdrawmethod === "Fast Cash") {
      let fastCash = await inquirer.prompt([
        {
          name: "amount",
          type: "list",
          choices: [1000, 2000, 5000, 10000, 20000], //Added fast cash method
        },
      ]);

      if (fastCash.amount > myBalance) {
        console.log(chalk.red("\n Insufficient Balance \n"));
      } else {
        myBalance -= fastCash.amount;
        console.log(
          `${chalk.yellowBright(fastCash.amount)} Withdraw Successfully`
        );
        console.log(`Your remaining Balance is:${myBalance}`);
      }
    }
  } else if (operationAns.operation === "check balance") {
    console.log(`Your Current Balance is ${myBalance}`);
  }
} else {
  console.log(chalk.red("\nPin is Incorrect, Please Try Again!\n"));
}

//Homework done / Extra Features added
//1) Added fast cash method in ATM.
//2) Added templete literal method at the place of string concatenation.
//3) Used comparison operator, if user enters greater amount than current balance, ATM Shows insufficient Balance.
//4) Imported and used Chalk module for attractive and colorful command-line-interface output.
