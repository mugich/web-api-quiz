var score = document.getElementById("#score");
var timer = document.getElementById("#timer");
var startBtn = document.getElementById("start");
var h1El = document.getElementById("h1");
var pEl = document.getElementById("p");
var answerEl = document.getElementById("answers");



// var score = 0;
// var secondsLeft = 75;
var currentQuestionIndex = 0;
// // var titleQuestion;

function startQuiz() { 
  startBtn.classList.add("d-none");
  h1El.innerHTML = "";
  pEl.innerHTML = ""; 
  getAnswers();
}

function getAnswers(){
  var currentQuestion = myQuestions[currentQuestionIndex];
  var titleQuestion = document.getElementById("");
  titleQuestion.textContent = currentQuestion.question; 
  answerEl.innerHTML = "";
  currentQuestion.answers.forEach(function(answer, i){
    var answerButtons = document.createElement("button");
    answerButtons.setAttribute("class", "btn btn-primary");
    answerButtons.setAttribute("id", "");
    answerButtons.setAttribute("value", i);
    answerButtons.textContent = i + 1 + ". " + answer;
    answerButtons.onclick = questionClick;
    answers.appendChild(answerButtons);

  }
  )
}
function questionClick(){

}

startBtn.addEventListener("click", startQuiz);
