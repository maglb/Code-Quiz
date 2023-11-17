var questionEl = document.getElementById("question");
var answerEl = document.getElementById('answer');
var optionsEl = document.getElementsByClassName("options");
var timerEl = document.getElementById("timer");
var questionArea = document.getElementById("questionArea");
var btnContainer = document.getElementById("btn-container");
var timeInterval;
var timeLeft;
var index = 0;
var questionItem;
var nextQ;

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

var thirdQ = {
    prompt: "What are the six primitive data types in JavaScript?",
    options: ["string, number, boolean, bigInt, symbol, undefined", "sentence, int, truthy, bigInt, symbol, undefined", "sentence, float, data, bigInt, symbol, undefined", "string, num, falsy, bigInt, symbol, undefined"],
    answer: "string, number, boolean, bigInt, symbol, undefined"
};

var FourthQ = {
    prompt: "How do we declare a conditional statement in JavaScript?",
    options: ["for loop", "while loop", "difference...between", "if...else"],
    answer: "if...else"
};

// Add all the objects questions in one variable
var allQuestions = [firstQ, secondQ, thirdQ, FourthQ];

// Display headline and intro 
var introEl = document.createElement("p");
var intro = questionArea.appendChild(introEl);

intro.textContent = "This is a timed quiz. Once you press start you will have 60 seconds to complete the quiz";

// Create a start button
var startEl = document.createElement("button");
var startBtn = questionArea.appendChild(startEl);
startBtn.innerText = "Start";

// Add an eventListener to the start button to start the quiz and timer.

startBtn.addEventListener('click', timer);

// Timer that counts down from 60
function timer() {

    timeLeft = 60;

    timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = "Timer: " + timeLeft + "s";
            timeLeft--;
        } else {
            timerEl.textContent = "Timer: " + timeLeft + "s";
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Once `timeLeft` gets to 0, display "Game Over"
            questionEl.textContent = 'Game Over';
            btnContainer.remove();
        }
    }, 1000);

    startBtn.remove();
    intro.remove();
    createBtnOptions();
    displayQ();
};

// For each ol element, add a button element
function createBtnOptions() {
    for (var i = 0; i < optionsEl.length; i++) {
        var button = document.createElement("button");
        var optionsBtn = optionsEl[i].appendChild(button);
        optionsBtn.className = 'optionBtn';
    }
};

var buttonEl = document.getElementsByTagName("button");
console.log(buttonEl);

// Function to enable the options buttons
function enableButtons() {
    for (var i = 0; i < optionsEl.length; i++) {
        optionsEl[i].children[0].disabled = false;
    }
};

// Function to disable the options buttons
function disableButtons() {
    for (var i = 0; i < optionsEl.length; i++) {
        optionsEl[i].children[0].disabled = true;
    }
};

function displayQ() {

    answerEl.textContent = "";
    questionItem = allQuestions[index];
    enableButtons();

    // Add text to the H2 (#question) element 
    if (index < allQuestions.length) {
        questionEl.textContent = questionItem.prompt;

        // For each button inside of the ol element, add the corresponding answer option for the current question
        for (let i = 0; i < optionsEl.length; i++) {
            optionsEl[i].children[0].textContent = questionItem.options[i];
            optionsEl[i].addEventListener('click', function (event) {
                if (event.target.innerText == questionItem.answer) {
                    answerEl.textContent = "Correct!"

                } else {
                    answerEl.textContent = "Wrong!"
                    timeLeft = timeLeft - 10;
                    if (timeLeft < 0) {
                        questionEl.textContent = "Game Over\nYour Score is 0";
                        clearInterval(timeInterval);
                    }
                }
 // Once the answer is selected, upload the next question after a second past and disable the buttons so the answer can't be changed.
                event.target.onclick = setTimeout(displayQ, 1000);
                disableButtons();
            });
        }
        index++;
    }

    else if (timeLeft === 0) {

        // Once `timeLeft` gets to 0, display "Game Over" and the final score.
        questionEl.textContent = "Game Over\nYour Score is " + timeLeft;
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        btnContainer.remove();
    }

    else {

        // Once all the questions have been answered, stop game and display the score
        questionEl.textContent = 'Your Score is ' + timeLeft;
        // Stop the timer
        clearInterval(timeInterval);
        btnContainer.remove();

    }
};

// Store scores
