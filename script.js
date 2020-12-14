var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("start");
var h1El = document.getElementById("h1");
var pEl = document.getElementById("p");
var titleQuestion = document.getElementById("title");
var answersEl = document.getElementById("answers");
var feedbackEl = document.getElementById("feedback");
var titleEl = document.getElementById("title");
var formEl1 = document.getElementById("form1");
var submitEl = document.getElementById("submit");
var formEl2 = document.getElementById("form2");
var goBackEl = document.getElementById("back");
var finalScoreEl = document.getElementById("finalScore");
var initialsEl = document.getElementById("initials");


var score = 0;
var secondsLeft = 75;
var currentQuestionIndex = 0;

//start quiz
startBtn.addEventListener("click", function(){ 
  startBtn.classList.add("d-none");
  h1El.innerHTML = "";
  pEl.innerHTML = ""; 
  getAnswers();
  setTime();
});

function getAnswers(){
    var currentQuestion = myQuestions[currentQuestionIndex]; 
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
  });
}

function answerClick(){
  if (this.value != myQuestions[currentQuestionIndex].correctAnswer){
    secondsLeft -= 10;
    feedbackEl.textContent = "Incorrect";
  }else {
    feedbackEl.textContent = "Correct";
    score ++;
    
  }
  currentQuestionIndex++;
  if(currentQuestionIndex === myQuestions.length){
   quizResult();
  return;
  }
   getAnswers();
}

function quizResult(){
titleEl.innerHTML = "";
answersEl.classList.add("d-none");
feedbackEl.innerHTML = "";
formEl1.classList.add("d-block")
finalScoreEl.textContent = score;
}

function setTime(){
  var timeInterval = setInterval(function(){
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if(secondsLeft === 0 || currentQuestionIndex === myQuestions.length){
      clearInterval(timeInterval);
    }

  }, 1000);
}
// submit initials
submitEl.addEventListener("click", function() {
  formEl1.innerHTML = "";
  formEl2.classList.add("d-block");
  localStorage.setItem(initialsEl.value, score);
});

// var init = localStorage.getItem(initialsEl.value);

goBackEl.addEventListener("click" ,function() {
  location.reload();
  });
