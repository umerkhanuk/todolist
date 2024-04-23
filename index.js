#!/usr/bin/env node
let goods = [];
let condition = true;
import inquirer from "inquirer";
while (condition) {
    let todolist = await inquirer.prompt([
        { message: "What would you like add in your todos?",
            type: "input",
            name: "firstQuestion",
        },
        { message: "What would you like add more in your todos?",
            type: "confirm",
            name: "confirmation",
            default: "true",
        }
    ]);
    condition = todolist.confirmation;
    goods.push(todolist.firstQuestion);
}
console.log(goods);
