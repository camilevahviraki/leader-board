import './styles/style.css';
import { result } from 'lodash';
import wrapContainer from './modules/WrapContainer.js';
import wrapscores from './modules/wrapScores.js';

wrapContainer();

const inputName = document.getElementById('name');
const inputScore = document.getElementById('scoreIn');
const submitBtn = document.getElementById('Submit');
const refreshBtn = document.getElementById('refresh');

submitBtn.addEventListener('click', () => {
  const score = {
    user: inputName.value,
    score: inputScore.value,
  };

  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/xPaIrcfY1XTX3ESgEwUR/scores/', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ user: inputName.value, score: inputScore.value }),
  }).then((response) => {
    if (response.ok) {
      inputName.value = '';
      inputScore.value = '';
      return response.json();
    }
    throw new Error('Request failed!');
  });
});

async function fetchScore() {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/xPaIrcfY1XTX3ESgEwUR/scores/');
  response.json().then((result) => {
    const arr = result.result;
    wrapscores(arr);
  });
}

fetchScore();

refreshBtn.addEventListener('click', () => {
  fetchScore();
});
