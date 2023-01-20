import { questions } from './questions.js';
import { scores } from './scores.js';

// get elements
const startScreen = document.getElementById('start-screen');
const startBtn = document.getElementById('start');
let questionsDiv = document.getElementById('questions');
let questionH = document.getElementById('question-title');
let choices = document.getElementById('choices');
const endScreen = document.getElementById('end-screen');
let finalScore = document.getElementById('final-score');
let feedback = document.getElementById('feedback');

let timeSpan = document.getElementById('time');
let timer = document.querySelector('.timer');
let time;
let countdownTimer;
function startTimer() {
  countdownTimer = setInterval(() => {
    time--;
    timeSpan.innerHTML = time;
    timer.classList.add('show');
    if (time <= 0) {
      setTimeout(() => {
        endQuiz();
        let title = document.querySelector('#end-screen p');
        let subtitle = document.createElement('span');
        subtitle.setAttribute('class', 'subtitle');
        subtitle.textContent = `Time is up! `;
        endScreen.insertBefore(subtitle, title);
      }, 500);
    }
  }, 1000);
}

let score = 0;
// start quiz
startBtn.addEventListener('click', startQuiz);

// questionIndex is incremented progressively when handleAnswer code is within event listener. Add removeEventListener to prevent it reacting extra
let questionIndex = 0;
let questionsList = questions();
let listOptions;

// display question with options (from shuffled array of object)
function questionShow() {
  // if (questionIndex < questionsList.length) {
  let question = questionsList[questionIndex];
  questionH.innerHTML = question.title;
  choices.innerHTML = question.answers
    .map(
      (answer, index) =>
        `<button type="button" value="${answer}" id="answer-${index}" data-index=${
          index + 1
        } class="quiz-option">${answer}</button>`
    )
    .join('');

  // eventHadler for choice buttons
  listOptions = choices.querySelectorAll('button');
  listOptions.forEach((listOption) => {
    listOption.addEventListener('click', processAnswer);
  });
  // }
}

// choice button callback function
function processAnswer(e) {
  let selectedAnswer = e.target.value;
  let listOption = e.target;
  let question = questionsList[questionIndex];
  let correctAnswer = question.answers[question.correct];
  if (selectedAnswer === correctAnswer) {
    listOption.classList.add('correct');
    var correctSound = new Audio();
    correctSound.src = './assets/sfx/correct.wav';
    correctSound.play();
    feedback.classList.add('show');
    feedback.innerHTML = 'Correct!';
    // increment score value
    score++;
  } else {
    listOption.classList.add('wrong');
    var wrongSound = new Audio();
    wrongSound.src = './assets/sfx/incorrect.wav';
    wrongSound.play();
    feedback.classList.add('show');
    feedback.innerHTML = 'Wrong!';
    time -= 10;
  }
  listOptions.forEach((listOption) => {
    listOption.removeEventListener('click', processAnswer);
  });
  setTimeout(() => {
    feedback.classList.remove('show');
    if (questionIndex === questionsList.length - 1) {
      // end of the quiz
      setTimeout(() => {
        endQuiz();
      }, 500);
    } else {
      questionIndex++;
      questionShow();
    }
  }, 1000);
}

// init
function startQuiz() {
  // remove startScreen add questions
  startScreen.classList.add('hide');
  questionsDiv.classList.remove('hide');
  questionShow();
  time = 100;
  // startTimer();
}

function endQuiz() {
  // end of the quiz
  clearInterval(countdownTimer);
  timer.classList.remove('show');
  timeSpan.innerHTML = 0;
  questionsDiv.classList.add('hide');
  endScreen.classList.remove('hide');
  finalScore.textContent = score;
  scores(score);
}
