const scores = [
  {
    name: 'camile',
    score: '85',
  },
  {
    name: 'Axel',
    score: '29',
  },
  {
    name: 'xxl',
    score: '45',
  },
  {
    name: 'Alex',
    score: '56',
  },
];

const wrapscores = () => {
  scores.forEach((a, i) => {
    function setId() {
      if ((i % 2) === 0) {
        return 'greyP';
      }
      return 'whiteP';
    }
    document.getElementById('scoresAndName').innerHTML += `
            <p id="${setId()}">${a.name}: ${a.score}</p>
        `;
  });
};

export default wrapscores;