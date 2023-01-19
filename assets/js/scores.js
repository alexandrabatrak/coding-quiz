let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const endScreen = document.getElementById('end-screen');

export function scores(score) {
  let highScoresOl = document.getElementById('highscores');
  let finalScore = document.getElementById('final-score');
  let initials = document.getElementById('initials');
  const submit = document.getElementById('submit');

  submit.addEventListener('click', (e) => {
    if (validateInitials(initials)) {
      let highScoresObj = {
        score: score,
        initials: initials.value.toUpperCase(),
      };
      highScores.push(highScoresObj);
      localStorage.setItem('highScores', JSON.stringify(highScores));
      console.log(highScores);
      initials.value = '';

      // endScreen
      let startAgainBtn = document.createElement('button');
      startAgainBtn.setAttribute('id', 'start-again-button');
      startAgainBtn.innerHTML = `<a href="index.html">Start again</a>`;
      let highScoresBtn = document.createElement('button');
      highScoresBtn.setAttribute('id', 'highscores-button');
      highScoresBtn.innerHTML = `<a href="highscores.html">Highscores</a>`;

      // replace p with buttons
      let endP = endScreen.querySelectorAll('p');
      endP.forEach((p) => p.classList.add('hide'));
      endScreen.appendChild(startAgainBtn);
      endScreen.appendChild(highScoresBtn);
    } else {
      return;
    }
  });
}

// validate initials input
//https://stackoverflow.com/questions/53036790/regex-to-search-a-string-to-have-not-more-than-2-letters
// https://stackoverflow.com/questions/6603015/check-whether-a-string-matches-a-regex-in-js
function validateInitials(initials) {
  const regEx = /^[a-zA-Z]{2}$/;
  if (regEx.test(initials.value)) {
    return true;
  } else {
    initials.value = '';
    initials.placeholder = 'Please, enter only 2 letters';
    return false;
  }
}

// clear highscores
// const clear = document.getElementById('clear');
// clear.addEventListener('click', () => {
//   localStorage.removeItem('highScores');
// });

// get the scores
function getHighScores() {
  scores = JSON.parse(localStorage.getItem('highScores')) || [];

  scores.forEach((score) => {
    highScoresOl.innerHTML = [highScores.initials, highScores.score]
      .map(
        (score, index) =>
          `<li data-index=${index + 1} class="score">${score.initials} ~ ${
            score.score
          }</li>`
      )
      .join('');
  });
  console.log(scores);
}

// // Sort high scores
function sortScores(scores) {
  return scores.sort((x, y) => y.score - x.score);
}

function init() {
  getHighScores();
  sortScores();
}
