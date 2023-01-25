import { questions } from './questions.js';
import { scores } from './scores.js';

// loader
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.classList.add('remove');
    setTimeout(() => {
      // select elements inside start-screen omitting 'difficulty-description'(show it on click)
      [...startScreen.children].forEach((child) => {
        if (child.id === 'difficulty-description') {
          return;
        }
        child.classList.add('show');
      });
    }, 200);
  }, 200);
});

// sounds
const correctSound = new Audio('./assets/sfx/correct.wav');
const wrongSound = new Audio('./assets/sfx/wrong.wav');
const quizOver = new Audio('./assets/sfx/quiz-over.mp3');
const quizOverTimer = new Audio('./assets/sfx/quiz-over-timer.mp3');

// get elements
const startScreen = document.getElementById('start-screen');
const difficultyChoice = document.querySelectorAll('.inline-input-group input');
const soundToggle = document.getElementById('speaker');
const startBtn = document.getElementById('start');
const questionsDiv = document.getElementById('questions');
const questionTitle = document.getElementById('question-title');
const choices = document.getElementById('choices');
const feedback = document.getElementById('feedback');
const endScreen = document.getElementById('end-screen');
const finalScore = document.getElementById('final-score');
const inputGroup = endScreen.querySelectorAll('.reveal');

// timer variables
const timeSpan = document.getElementById('time');
const timer = document.querySelector('.timer');
let time;
let countdownTimer;

// difficulty choice input
let questionAmount = '10';
// get user select option and set amount of questions based on the option chosen
function questionsAmount() {
  let questionsList = questions();
  difficultyChoice.forEach((option) => {
    option.addEventListener('change', () => {
      return (questionAmount = option.value);
    });
    // return questionAmount;
  });
  return (questionsList = questionsList.slice(0, questionAmount));
  // return questionsList;
}

// difficulty description appearance
const difficultyToggle = document.getElementById('description-toggler');
const difficultyDesc = document.getElementById('difficulty-description');
difficultyToggle.addEventListener('click', () => {
  difficultyDesc.classList.toggle('show');
  difficultyToggle.classList.toggle('active');
});

// question variables
let score = 0;
let questionIndex = 0;
let questionsList = questionsAmount();
let answerButtons;
// display question with options (from shuffled array of object)
function questionShow() {
  questionTitle.classList.remove('show');
  let question = questionsList[questionIndex];
  // innerHTML to correctly display <code> inside the question title
  questionTitle.innerHTML = question.title;
  // fade-in
  setTimeout(() => {
    questionTitle.classList.add('show');
  }, 200);
  choices.innerHTML = question.answers
    .map(
      (answer, index) =>
        // index + 1 for CSS to show question number on :before
        `<button type="button" value="${answer}" id="answer-${index}" data-index=${
          index + 1
        } class="quiz-option reveal">${answer}</button>`
    )
    .join('');
  // eventHadler for choice buttons
  // doesn't like to be outside of the questionShow()
  answerButtons = choices.querySelectorAll('button');
  answerButtons.forEach((answerButton) => {
    // fade-in
    setTimeout(() => {
      answerButton.classList.add('show');
    }, 200);
    answerButton.addEventListener('click', processAnswer);
  });
}

// choice button callback function
function processAnswer(e) {
  // prevent <code> inside the button triggering event
  e.stopPropagation();
  let selectedAnswer = e.target.value;
  let answerButton = e.target;
  let question = questionsList[questionIndex];
  let correctAnswer = question.answers[question.correct];
  if (selectedAnswer === correctAnswer) {
    answerButton.classList.add('correct');
    if (soundPreference) {
      correctSound.play();
    }
    feedback.classList.add('show');
    feedback.innerText = 'Correct!';
    // increment score value
    score += 2;
  } else {
    answerButton.classList.add('wrong');
    if (soundPreference) {
      wrongSound.play();
    }
    feedback.classList.add('show');
    feedback.innerText = 'Wrong!';
    // decrease time
    time -= 10;
    if (score > 0) {
      score--;
    }
  }
  answerButtons.forEach((answerButton) => {
    answerButton.removeEventListener('click', processAnswer);
    setTimeout(() => {
      // fade-out, calculate timeout for better animation
      // TODO: find a better way to animate title fade-in
      questionTitle.classList.remove('show');
    }, 850);
  });
  setTimeout(() => {
    feedback.classList.remove('show');
    if (questionIndex === questionsList.length - 1) {
      // end of the quiz
      setTimeout(() => {
        endQuiz();
      }, 500);
      if (time > 0 && soundPreference) {
        quizOver.play();
      }
    } else {
      // continue them questions bam
      questionIndex++;
      questionShow();
    }
  }, 1000);
}

// timer
function startTimer() {
  countdownTimer = setInterval(() => {
    time--;
    timeSpan.innerText = time;
    // fade-in timer box
    timer.classList.add('show');
    if (time <= 0) {
      endQuiz();
      if (soundPreference) {
        quizOverTimer.play();
      }
      setTimeout(() => {
        // add indication that game ended because time run out
        let title = document.querySelector('#end-screen p');
        let subtitle = document.createElement('span');
        subtitle.setAttribute('class', 'subtitle');
        subtitle.textContent = `Time is up!`;
        endScreen.insertBefore(subtitle, title);
      }, 250);
    }
  }, 1000);
}

// start quiz
startBtn.addEventListener('click', startQuiz);
function startQuiz() {
  // set timeout to account for timer delay and start them at the same time
  setTimeout(() => {
    // remove start-screen, add questions
    startScreen.classList.add('hide');
    questionsDiv.classList.remove('hide');
    questionShow();
  }, 1000);
  // set time based on selected difficulty
  time = questionAmount * 11;
  startTimer();
}

// end quiz
function endQuiz() {
  // stop the timer
  clearInterval(countdownTimer);
  timer.classList.remove('show');
  timeSpan.innerText = 0;
  // remove questions, add end-screen
  questionsDiv.classList.add('hide');
  endScreen.classList.remove('hide');
  // fade in elements
  setTimeout(() => {
    inputGroup.forEach((el) => el.classList.add('show'));
  }, 200);
  finalScore.textContent = score;
  scores(score);
}

// sound toggle
let soundPreference = JSON.parse(localStorage.getItem('soundToggle'));
let updateSoundToggle = () => {
  /* get it again, in case JS didn't hear me the first time
  jokes aside, as we are calling the function several times, it's better if it has the most recent, *fresh* value ^_^ */
  soundPreference = JSON.parse(localStorage.getItem('soundToggle'));
  /* manipulate everyone: 
  the checked status of the toggler, 
  it's class for css styles for icon 
  and set the boolean, too */
  if (soundPreference === true) {
    soundToggle.setAttribute('checked', true);
    soundToggle.classList.replace('off', 'on');
    soundToggle.checked = true;
  } else {
    soundToggle.removeAttribute('checked');
    soundToggle.classList.replace('on', 'off');
    soundToggle.checked = false;
  }
};
// check for preferences on page load
if (soundPreference !== null) {
  updateSoundToggle();
}
// dynamic updates for checking/unchecking
soundToggle.addEventListener('change', () => {
  localStorage.setItem('soundToggle', soundToggle.checked);
  updateSoundToggle();
});
