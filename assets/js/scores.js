let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const endScreen = document.getElementById('end-screen');

export function scores(score) {
  let finalScore = document.getElementById('final-score');
  let initials = document.getElementById('initials');
  const submit = document.getElementById('submit');

  submit.addEventListener('click', (e) => {
    if (validateInitials(initials)) {
      let highScoresObj = {
        score: score,
        initials: initials.value.toUpperCase(),
      };
      while (highScores.lenght <= 100) {
        highScores.push(highScoresObj);
        localStorage.setItem('highScores', JSON.stringify(highScores));
      }
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
  let highScoresOl = document.getElementById('highscores');
  // it's annoyingly wanna find this on index.html
  if (!highScoresOl) {
    return;
  }
  scores = JSON.parse(localStorage.getItem('highScores')) || [];
  // sort for highest scores
  scores = scores.sort((x, y) => y.score - x.score);
  // show only last 10
  let highestScores = scores.slice(0, 10);
  highScoresOl.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Initials</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        ${highestScores
          .map(
            (score, index) =>
              `<tr>
                <td>${index + 1}</td>
                <td>${score.initials}</td>
                <td>${score.score}</td>
              </tr>`
          )
          .join('')}
      </tbody>
    </table>`;

  console.log(scores);
}

// call functions only when highscores.html is loaded
window.addEventListener('load', () => {
  getHighScores();
  sortScores();
});
