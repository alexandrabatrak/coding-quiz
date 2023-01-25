let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
let highScoresDiv = document.getElementById('highscores');
const endScreen = document.getElementById('end-screen');

export function scores(score) {
  const initials = document.getElementById('initials');
  const submit = document.getElementById('submit');

  submit.addEventListener('click', submitInitials);
  initials.addEventListener('keypress', (e) => {
    // callback submit with enter
    if (e.key === 'Enter') {
      e.preventDefault();
      submitInitials();
    }
  });
  function submitInitials() {
    // make sure we only getting the good stuff (no nasty numbers)
    if (validateInitials(initials)) {
      let highScoresObj = {
        score: score,
        initials: initials.value.toUpperCase(),
      };
      // to save memory, let's not store more than 100. Even that is too much as we only display 10
      if (highScores.length <= 100) {
        highScores.push(highScoresObj);
        localStorage.setItem('highScores', JSON.stringify(highScores));
      }
      initials.value = '';

      // endScreen
      // create some buttons for user to navigate better
      let buttonContainer = document.createElement('div');
      buttonContainer.classList.add('button-container', 'reveal');
      let startAgainBtn = document.createElement('a');
      startAgainBtn.setAttribute('href', 'index.html');
      startAgainBtn.innerText = 'Start again';
      let highScoresBtn = document.createElement('a');
      highScoresBtn.setAttribute('href', 'highscores.html');
      highScoresBtn.innerText = 'Highscores';

      // replace p with buttons
      endScreen.querySelectorAll('p').forEach((p) => p.classList.add('hide'));
      endScreen.querySelector('span').classList.add('hide');
      buttonContainer.appendChild(startAgainBtn);
      buttonContainer.appendChild(highScoresBtn);
      endScreen.appendChild(buttonContainer);
      setTimeout(() => {
        // fade-in, of course
        buttonContainer.classList.add('show');
      }, 200);
    } else {
      return;
    }
  }
}

// validate initials input
function validateInitials(initials) {
  const regEx = /^[a-zA-Z]{2,3}$/;
  if (regEx.test(initials.value)) {
    return true;
  } else {
    initials.value = '';
    initials.placeholder = 'Please, enter max 3 letters';
    return false;
  }
}

// clear highscores
const clear = document.getElementById('clear');
if (clear) {
  clear.addEventListener('click', () => {
    highScoresDiv
      .querySelectorAll('.reveal')
      .forEach((element) => element.classList.remove('show'));
    setTimeout(() => {
      localStorage.removeItem('highScores');
      highScoresDiv.innerHTML = '';
    }, 300);
  });
}

// get the scores
function getHighScores() {
  if (!highScoresDiv) {
    return;
  }
  scores = JSON.parse(localStorage.getItem('highScores')) || [];
  // sort for highest scores
  scores = scores.sort((x, y) => y.score - x.score);
  // show only last 10
  let highestScores = scores.slice(0, 10);
  // create table if more than 1 score saved
  if (scores.length > 0) {
    highScoresDiv.innerHTML = `
      <table>
        <thead>
          <tr class="reveal">
            <th>Rank</th>
            <th>Initials</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          ${highestScores
            .map(
              (score, index) =>
                `<tr class="reveal">
                  <td>${index + 1}</td>
                  <td>${score.initials}</td>
                  <td>${score.score}</td>
                </tr>`
            )
            .join('')}
        </tbody>
      </table>`;
  }
  setTimeout(() => {
    // fade-in the whole .reveal party
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((element) => element.classList.add('show'));
  }, 0);
}
getHighScores();
