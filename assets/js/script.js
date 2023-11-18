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

submitEl.addEventListener('click', function (event){

event.preventDefault();

storeScore();

// If todos were retrieved from localStorage, update the todos array to it
    if (storedScore !== null) {
      todos = storedTodos;
    }
    var storedScore = [];
  
});


function storeScore(){
// create user object from submission
userScore = initialsInput.value.trim() + " – " + timeLeft;
    // set new submission to local storage 
  localStorage.setItem("UserScore", userScore);
}


// // This function is being called below and will run when the page loads.
// function init() {
//     // Get stored todos from localStorage
//     var storedTodos = JSON.parse(localStorage.getItem("todos"));
  
//     // If todos were retrieved from localStorage, update the todos array to it
//     if (storedTodos !== null) {
//       todos = storedTodos;
//     }
  
//     // This is a helper function that will render todos to the DOM
//     renderTodos();
//   }
  
//   function storeTodos() {
//     // Stringify and set key in localStorage to todos array
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }
  
//   // Add submit event to form
//   todoForm.addEventListener("submit", function(event) {
//     event.preventDefault();
  
//     var todoText = todoInput.value.trim();
  
//     // Return from function early if submitted todoText is blank
//     if (todoText === "") {
//       return;
//     }
  
//     // Add new todoText to todos array, clear the input
//     todos.push(todoText);
//     todoInput.value = "";
  
//     // Store updated todos in localStorage, re-render the list
//     storeTodos();
//     renderTodos();
//   });
  


viewScore.addEventListener('click', showScore);



function renderLastGrade() {

    gameEl.setAttribute("class", "hidden");
    homepageEl.setAttribute("class", "hidden");
    highScoreEl.setAttribute("class", "shown");

    // Use JSON.parse() to convert text to JavaScript object
    var highScore = JSON.parse(localStorage.getItem("UserScore"));

    // Check if data is returned, if not exit out of the function
    if (lastGrade !== null) {
      document.getElementById('saved-name').innerHTML = lastGrade.student;
      document.getElementById('saved-grade').innerHTML = lastGrade.grade;
      document.getElementById('saved-comment').innerHTML = lastGrade.comment;
    }
  }

// Store scores - ITS WORKING
function registerScore() {
    clearInterval(timeInterval);
    score = timeLeft;
    var userName = initialsInput.value;
    console.log(userName);
    console.log(score);
    localStorage.setItem('Score', score);
    localStorage.setItem('User Name', userName);
    showScore();
};

// Store scores - ITS WORKING
function showScore() {
    clearInterval(timeInterval);

     // Use JSON.parse() to convert text to JavaScript object
     var lastGrade = JSON.parse(localStorage.getItem('studentGrade'));

    gameEl.setAttribute("class", "hidden");
    homepageEl.setAttribute("class", "hidden");
    highScoreEl.setAttribute("class", "shown");
    score = localStorage.getItem("Score");
    var name = localStorage.getItem("User Name");
    var scoreIt = document.createElement("ol");
    var scoreEl = document.getElementById("score-container");
    scoreEl.appendChild(scoreIt);
    scoreEl.textContent = name + "–" + score;
};

backBtn.addEventListener('click', homePage);

function homePage() {
    homepageEl.setAttribute("class", "shown");
    highScoreEl.setAttribute("class", "hidden");
}