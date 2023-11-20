var questionEl = document.getElementById("question");
var answerEl = document.getElementById('answer');
var optionsEl = document.getElementsByClassName("options");
var timerEl = document.getElementById("timer");
var questionArea = document.getElementById("questionArea");
var btnContainer = document.getElementById("btn-container");
var submitEl = document.getElementById("submit");
var initialsInput = document.getElementById("initials");
var viewScore = document.getElementById("viewScore");
var gameEl = document.getElementById("game");
var highScoreEl = document.getElementById("high-score");
var backBtn = document.getElementById("go-back");
var clearBtn = document.getElementById("clear");
var homepageEl = document.getElementById("homepage");
var startBtn = document.getElementById("start");
var scoreContainer = document.getElementById("score-container");
var listContainer = document.getElementById("score-list-container");
var timeInterval;
var timeLeft;
var index = 0;
var questionItem;
var score;
var userScore;

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

// Create input element for the user to save his score
var scoreEl = document.getElementById("score-container");
scoreEl.setAttribute("class", "hidden");

// Add all the objects questions in one variable
var allQuestions = [firstQ, secondQ, thirdQ, FourthQ];

// Add event listener to the start button
startBtn.addEventListener('click', timer);

// Timer that counts down from 60
function timer() {
    homepageEl.setAttribute("class", "hidden");
    highScoreEl.setAttribute("class", "hidden");
    gameEl.setAttribute("class", "shown");
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
            questionEl.textContent = "Game Over\nYour Score is 0";
            btnContainer.remove();
        }
    }, 1000);
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
                        btnContainer.remove();
                        scoreEl.setAttribute("class", "shown");
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
        scoreEl.setAttribute("class", "shown");
    }

    else {

        // Once all the questions have been answered, stop game and display the score
        questionEl.textContent = 'Your Score is ' + timeLeft;
        // Stop the timer
        clearInterval(timeInterval);
        btnContainer.remove();
        scoreEl.setAttribute("class", "shown");

    }
};

var userScore = [];

// Function to store score into the local storage
function storeScore() {
    // Stringify and set key in localStorage to todos array
    localStorage.setItem("userScore", JSON.stringify(userScore));
}

// Add submit event to form
submitEl.addEventListener("click", function (event) {
    event.preventDefault();
    userScore = JSON.parse(localStorage.getItem("userScore"));
    var initials = initialsInput.value.trim()
    console.log(initials.toUpperCase());
    var newScore = initials.toUpperCase() + ": " + timeLeft;

    // Return from function early if submitted todoText is blank
    if (newScore === "") {
        return;
    }

    else {
        // Add new todoText to todos array, clear the input
        userScore.push(newScore);
        initialsInput.value = "";
        console.log(userScore);
    }

    // Store updated todos in localStorage, re-render the list
    storeScore();
    displayScore();
});
console.log(scoreContainer);

// The following function renders items in a todo list as <li> elements
function displayScore() {

    clearInterval(timeInterval);

    gameEl.setAttribute("class", "hidden");
    homepageEl.setAttribute("class", "hidden");
    highScoreEl.setAttribute("class", "shown");

    userScore = JSON.parse(localStorage.getItem("userScore"));
    console.log(userScore);

    // Render a new li for each todo
    for (var i = 0; i < userScore.length; i++) {
        var highScore = userScore[i];

        var li = document.createElement("li");
        li.textContent = highScore;
        console.log(li);
        listContainer.appendChild(li);
        console.log(listContainer);
    }
};

viewScore.addEventListener('click', function (event) {
    highScoreEl.setAttribute("class", "shown");
    homepageEl.setAttribute("class", "hidden");
    gameEl.setAttribute("class", "hidden");
});

backBtn.addEventListener('click', homePage);

function homePage() {
    location.reload();
    homepageEl.setAttribute("class", "shown");
    highScoreEl.setAttribute("class", "hidden");
    
}