#! /usr/bin/env node
import inquirer from "inquirer";

const input = await inquirer.prompt([
    {name: "num1", type: "number", message: "Kindly enter your first no:"},
    {name: "num2", type: "number", message: "kindly enter your second no:"},
    {
        message: "Select one of the operator to perform operation",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus", "Exponentiation"]
    },
]);

console.log(input);

if (input.Operator === "Addition"){
    console.log(input.num1 + input.num2)
}else if (input.Operator === "Subtraction"){
    console.log(input.num1 - input.num2)
}else if (input.Operator === "Multiplication"){
    console.log(input.num1 * input.num2)
}else if (input.Operator === "Division"){
    console.log(input.num1 / input.num2)
}else if (input.Operator === "Modulus"){
    console.log(input.num1 % input.num2)
}else if (input.Operator === "Exponentiation"){
    console.log(input.num1 ** input.num2)
}else {
    console.log("Please select valid Operator")
}