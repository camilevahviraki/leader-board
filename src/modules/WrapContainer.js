const wrapContainer = () => {
  document.body.innerHTML = `
    <section class="container">
    <header>
      <h1 class="mainTitle">
        Leaderboard
      </h1>
    </header>
    <div class="wrapscores">
        <div class="scores">
          <div class="refreshB">
            <h2 class="recents">Recents scores</h2>
            <button id="refresh">Refresh</button>
          </div>
          <div id="scoresAndName"></div>
        </div>
        <div class="form">
            <h2>Add your score</h2>
            <input type="text" id="name" placeholder="Add your name"/>
            <input id="scoreIn" type="text" placeholder="Enter your score"/>
            <button id="Submit">Submit</button>
        </div>
    </div>
    <footer>
      <p>Copyright</p>
    </footer>

</section>
    `;
};

export default wrapContainer;