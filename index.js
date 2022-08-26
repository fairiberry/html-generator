const { create } = require("domain");
const fs = require("fs/promises");
const inquirer = require("inquirer");
const path = require("path");

//  team manager’s name, employee ID, email address, and office number
console.log("\x1B[31m.♡*✩•.¸.•♡*¨*•.¸_¸.•*¨*•.¸_¸.•*¨*✩•.¸.•♡*¨*•.¸_¸.•*¨*•.¸_¸.•*¨*♡•.¸_¸.•✩*¨*•.¸_¸.•*¨*•.¸_¸.•*¨*♡•.¸.•✩*♡."),
console.log("\x1B[31m¸.•♡*¨*•.¸_¸.•*¨*•.¸_¸.•*¨*✩•.¸ ♡ welcome to the team profile generator ♡ ¸.•✩*¨*•.¸_¸.•*¨*•.¸_¸.•*¨*♡•.¸"),
console.log("\x1B[31m.♡*✩•.¸.•♡*¨*•.¸_¸.•*¨*•.¸_¸.•*¨*✩•.¸.•♡*¨*•.¸_¸.•*¨*•.¸_¸.•*¨*♡•.¸_¸.•✩*¨*•.¸_¸.•*¨*•.¸_¸.•*¨*♡•.¸.•✩*♡.")

const fileName = "index.html";

function createHTML(fileName, data) {
    return fs.writeFile(path.join(process.cwd(), fileName), data);
};

var questions = [
    {
        type: "input",
        name: "managername",
        message: "Input Manager's First and Last Name:"
    },
    {
        type: "input",
        name: "managerid",
        message: "Input Manager's ID:"
    },
    {
        type: "input",
        name: "manageremail",
        message: "Input Manager's Email:"
    },
    {
        type: "input",
        name: "officenumber",
        message: "Input Office Telephone Number:"
    },
    {
        type: "input",
        name: "engineername",
        message: "Input Engineer's First and Last Name:"
    },
    {
        type: "input",
        name: "engineerid",
        message: "Input Engineer's ID:"
    },
    {
        type: "input",
        name: "engineeremail",
        message: "Input Engineer's Email:"
    },
    {
        type: "input",
        name: "engineergithub",
        message: "Input Engineer's Github Username:"
    },
    {
        type: "input",
        name: "internname",
        message: "Input Intern's First and Last Name:"
    },
    {
        type: "input",
        name: "internid",
        message: "Input Intern's ID:"
    },
    {
        type: "input",
        name: "internemail",
        message: "Input Intern's Email:"
    },
    {
        type: "input",
        name: "internschool",
        message: "Input Intern's School:"
    }  
];

function init() {
    inquirer.prompt(questions).then(answers => {
        console.log("");
        console.log("");
        console.log("✩·٠•●♡●•٠·˙˜”*°♡•.website generated.•♡°*”˜˙·٠•●♡●•٠·✩");
        console.log("");
        console.log("");
        createHTML(fileName, generateHTML(answers));
    });
}


function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="./dist/style.css" rel="stylesheet">
        <title>Document</title>
    </head>
    <body>
    <div class="companyName">✰•*¨*•.¸¸𝕥𝕖𝕤𝕥𝕚𝕟𝕘 𝕔𝕠𝕞𝕡𝕒𝕟𝕪¸¸.•*¨*•✰</div>
        <div class = "container">
            <h1 id = cardName>${data.managername}</h1>
            <h3 id = job>Manager</h3>
            <div id = cardID>${data.managerid}</div>
            <div id = cardEmail>Email: ${data.manageremail}@testingcompany.org</div>
            <div id = cardPhone>Office Number: ${data.officenumber}</div>
        </div>
        <div class = "container">
            <h1 id = cardName>${data.engineername}</h1>
            <h3 id = job>Engineer</h3>
            <div id = cardID>${data.engineerid}</div>
            <div id = cardEmail>Email: ${data.engineeremail}@testingcompany.org</div>
            <div id = cardPhone>GitHub: <a href= "https://github.com/${data.engineergithub}">${data.engineergithub}</a></div>
        </div>
        <div class = "container">
            <h1 id = cardName>${data.internname}</h1>
            <h3 id = job>Intern</h3>
            <div id = cardID>${data.internid}</div>
            <div id = cardEmail>Email: ${data.internemail}@testingcompany.org</div>
            <div id = cardPhone>University: ${data.internschool}</div>
        </div>
        <script src="index.js"></script>
    </body>
    </html>`;
};


init();




