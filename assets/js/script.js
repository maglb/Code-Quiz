var questionEl = document.getElementById("question");

var firstQ = {
    prompt: "Inside the HTML document, where do you place your JavaScript code?",
    options: ["Inside the <script> element", "Inside the <link> element", "In the <footer> element", "Inside the <head> element"],
    answer: "Inside the <script> element"
};

var secondQ = {
    prompt: "What operator is used to assign a value to a declared variable?",
    options: ["Equal sign (=)", "Colon (:)", "Double-equal (==)", "Question mark (?)"],
    answer: "Equal sign (=)"
};

var question03 = {
    prompt: "What are the six primitive data types in JavaScript?",
    options: ["string, number, boolean, bigInt, symbol, undefined", "sentence, int, truthy, bigInt, symbol, undefined", "sentence, float, data, bigInt, symbol, undefined", "string, num, falsy, bigInt, symbol, undefined"],
    answer: "string, number, boolean, bigInt, symbol, undefined"
};

var question04 = {
    prompt: "How do we declare a conditional statement in JavaScript?",
    options: ["if...else", "for loop", "while loop", "difference...between"],
    answer: "if...else"
};

var optionOne = document.getElementById("option1");
var optionTwo = document.getElementById("option2");
var optionThree = document.getElementById("option3");
var optionFour = document.getElementById("option4");

// var firstQuiz = questionEl.textContent(firstQ.prompt);
// console.log(firstQ.prompt);

// var questionItem = firstQ.prompt;

// Add text to the H2 (#question )element 
questionEl.textContent = firstQ.prompt;

// Create button inside of each ol element


var options = document.getElementsByClassName("options")

// For each ol element, add a button element
for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    options[i].appendChild(button);
    console.log[i];
   }

// optionOne.children[0].textContent = firstQ.options[0];
// var newOptions = document.querySelectorAll(".options");


var newQuestion = firstQ;

// For each button inside of the ol element, add the corresponding answer option for the question

for (var i = 0; i < options.length; i++) {
var newOptions = document.getElementsByClassName("options");
var newQuestion = firstQ;
console.log(newQuestion);

newOptions[i].children[0].textContent = newQuestion.options[i];
   }