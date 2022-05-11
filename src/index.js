import './styles/style.css';
import $ from 'jquery';
import wrapContainer from './modules/WrapContainer.js';
import wrapscores from './modules/wrapScores.js';

wrapContainer();

// ZEIiDb0Iy2wNzVD068jm

const inputName = document.getElementById('name');
const inputScore = document.getElementById('scoreIn');
const submitBtn = document.getElementById('Submit');
const refreshBtn = document.getElementById('refresh');

submitBtn.addEventListener('click', () => {
  const score = {
    user: inputName.value,
    score: inputScore.value,
  };
  $.post('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ZEIiDb0Iy2wNzVD068jm/scores/', score, (data, status) => {
    console.log(data);
  }).catch((error) => {
    console.log(error);
  });
});

refreshBtn.addEventListener('click', () => {
  $.get('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ZEIiDb0Iy2wNzVD068jm/scores/', (response) => {
    console.log(response.result);
    const arr = response.result;

    wrapscores(arr);
  }).catch((error) => {
    console.log(error);
  });
});

$.get('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ZEIiDb0Iy2wNzVD068jm/scores/', (response) => {
  console.log(response.result);
  const arr = response.result;

  wrapscores(arr);
}).catch((error) => {
  console.log(error);
});
