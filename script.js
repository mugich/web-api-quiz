var score = document.getElementById("score");
var timer = document.getElementById("timer");
var startBtn = document.getElementById("start");
var h1El = document.getElementById("h1");
var pEl = document.getElementById("p");
var answersEl = document.getElementById("answers");
var feedbackEl = document.getElementById("feedback");
var titleEl = document.getElementById("title");



// var score = 0;
// var secondsLeft = 75;
var currentQuestionIndex = 0;


function startQuiz() { 
  startBtn.classList.add("d-none");
  h1El.innerHTML = "";
  pEl.innerHTML = ""; 
  getAnswers();
}

function getAnswers(){
  var currentQuestion = myQuestions[currentQuestionIndex];
  var titleQuestion = document.getElementById("title");
  titleQuestion.textContent = currentQuestion.question; 
  answersEl.innerHTML = "";
  currentQuestion.answers.forEach(function(answer, i){
    var answerButtons = document.createElement("button");
    answerButtons.setAttribute("class", "btn btn-primary");
    answerButtons.setAttribute("id", "answerBtns");
    answerButtons.setAttribute("value", i);
    answerButtons.textContent = i + 1 + ". " + answer;
    answerButtons.onclick = answerClick;
    answers.appendChild(answerButtons);
  } )
}
function answerClick(){
  if (this.value != myQuestions[currentQuestionIndex].correctAnswer){
    feedbackEl.textContent = "Incorrect";
  }else {
    feedbackEl.textContent = "Correct";
  }
  currentQuestionIndex++;
  if(currentQuestionIndex === myQuestions.length){
   quizResult();
  //  return;
  }
  getAnswers();
}

function quizResult(){
titleEl.innerHTML = "";
h1El.textContent = "All Done!";
answersEl.classList.add("d-none");
feedbackEl.innerHTML = "";
pEl.textContent = "Enter your initials:"

}

startBtn.addEventListener("click", startQuiz);
