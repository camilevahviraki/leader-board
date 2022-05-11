const wrapscores = (scores) => {
  document.getElementById('scoresAndName').innerHTML = '';
  scores.forEach((a, i) => {
    function setId() {
      if ((i % 2) === 0) {
        return 'greyP';
      }
      return 'whiteP';
    }
    document.getElementById('scoresAndName').innerHTML += `
            <p id="${setId()}">${a.user}: ${a.score}</p>
        `;
  });
};

export default wrapscores;