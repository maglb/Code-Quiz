var questionEl = document.getElementById("question");
var answerEl = document.getElementById('answer');
var optionsEl = document.getElementsByClassName("options");
var timerEl = document.getElementById("timer");

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

console.log(questionEl);
console.log(answerEl);
console.log(optionsEl);
console.log(typeof optionsEl);
console.log(allQuestions);
console.log(typeof allQuestions);
console.log(timerEl);
console.log(typeof timerEl);

var questionArea = document.getElementById("questionArea");

// // Display headline and intro 
// var introEl = document.createElement("p");
// var intro = questionArea.appendChild(introEl);

// intro.textContent = "This is a timed quiz. Once you press start you will have 60 seconds to complete the quiz";


// // Create a start button
// var startEl = document.createElement("button");
// var startBtn = questionArea.appendChild(startEl);
// startBtn.innerText = "Start";

// // Add an eventListener to the start button to start the quiz and timer.

// startBtn.addEventListener('click', timer);

// // IT IS WORKING Timer that counts down from 60
//     function timer() {
//         var timeLeft = 60;

//         var timeInterval = setInterval(function () {
//             if (timeLeft > 0) {
//                 timerEl.textContent = timeLeft;
//                 timeLeft--;
//             } else {
//                 timerEl.textContent = "0";
//                 // Use `clearInterval()` to stop the timer
//                 clearInterval(timeInterval);
//                 // Once `timeLeft` gets to 0, display "Game Over"
//                 questionEl.textContent = 'Game Over';
//             }
//         }, 1000);

//         startBtn.remove();
//         intro.remove();

//         // call function to display the quiz

//     };


// Function to display the quiz

// For each ol element, add a button element

for (var i = 0; i < optionsEl.length; i++) {
    var button = document.createElement("button");
    var optionsBtn = optionsEl[i].appendChild(button);
    optionsBtn.className = 'optionBtn';
}

// Timer that counts down from 2 and then upload the next question
function nextQuestion() {
    var time = 2;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var countdown = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (time > 1) {
        time--;
      } else {
        clearInterval(countdown);
        // Call the `displayMessage()` function
        displayQ();
      }
    }, 1000);
  };

var index = 0;
var questionItem = allQuestions[index];

// Function to upload question and options on the page

function displayQ() {
    // Add text to the H2 (#question) element 
    questionItem = allQuestions[index];

    if (index < allQuestions.length) {
        questionEl.textContent = questionItem.prompt;

           // For each button inside of the ol element, add the corresponding answer option for the current question
    for (var i = 0; i < optionsEl.length; i++) {
        optionsEl[i].children[0].textContent = questionItem.options[i];
    }

    // Add EventListener to the button options and display either the selected option is right or not

    for (var i = 0; i < optionsEl.length; i++) {
        optionsEl[i].addEventListener('click', function (event) {
            if (event.target.innerText == questionItem.answer) {
                answerEl.textContent = "Correct!"
    
            } else {
                answerEl.textContent = "Wrong!"
            }

            // Once the answer is selected, upload the next question
            index++;
            nextQuestion(); 
        });
    }

        // Show score
    } else {
        questionEl.textContent = "You score is " + timeleft;
        for (var i = 0; i < optionsEl.length; i++) {
            optionsEl[i].remove();
          }
    }
};

displayQ();


