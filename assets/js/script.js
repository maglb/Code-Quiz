var questionEl = document.getElementById("question");

var firstQ = {
    prompt: "Inside the HTML document, where do you place your JavaScript code?",
    options: ["Inside the <link> element", "In the <footer> element", "Inside the <script> element", "Inside the <head> element"],
    answer: "Inside the <script> element"
};

var secondQ = {
    prompt: "What operator is used to assign a value to a declared variable?",
    options: ["Colon (:)", "Double-equal (==)", "Equal sign (=)", "Question mark (?)"],
    answer: "Equal sign (=)"
};

var question03 = {
    prompt: "What are the six primitive data types in JavaScript?",
    options: ["string, number, boolean, bigInt, symbol, undefined", "sentence, int, truthy, bigInt, symbol, undefined", "sentence, float, data, bigInt, symbol, undefined", "string, num, falsy, bigInt, symbol, undefined"],
    answer: "string, number, boolean, bigInt, symbol, undefined"
};

var question04 = {
    prompt: "How do we declare a conditional statement in JavaScript?",
    options: ["for loop", "while loop", "difference...between", "if...else"],
    answer: "if...else"
};

var answerEl = document.getElementById('answer');

// Add text to the H2 (#question )element 
questionEl.textContent = firstQ.prompt;

// Create button inside of each ol element


var options = document.getElementsByClassName("options")

// For each ol element, add a button element

for (var i = 0; i < options.length; i++) {
    var button = document.createElement("button");
    var optionsBtn = options[i].appendChild(button);
    optionsBtn.className = 'optionBtn';
    console.log[i];
}

var newQuestion = firstQ;

// For each button inside of the ol element, add the corresponding answer option for the question

var newOptions = document.getElementsByClassName("options");
for (var i = 0; i < options.length; i++) {
    var newQuestion = firstQ;
    console.log(newQuestion);

    newOptions[i].children[0].textContent = newQuestion.options[i];
}

// Add EventListener to the button options and display either the selected option is right or not

for (var i = 0; i < options.length; i++) {
    newOptions[i].addEventListener('click', function (event) {
        if (event.target.innerText == newQuestion.answer) {
            answerEl.textContent = "Correct!"

            // Disable all the button until the next question is uploaded

            options.children[0].disabled = true;
            console.log(ptions.children[0]);

        } else {
            answerEl.textContent = "Wrong!"
            // Disable all the button until the next question is uploaded
            options.disabled = true;
        }

    });
}







// // Add EventListener to the button "Next" to upload the next question

// var nextBtn = document.getElementById("nextBtn");

// nextBtn.addEventListener('click', function(event)){

// }


