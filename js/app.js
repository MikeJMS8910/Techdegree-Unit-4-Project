/*** Treehouse FSJS Techdegree
  * Project 4 - OOP Game App
  **/  
let phrase, game, attemptedLetters, key;

document.getElementById("btn__reset").addEventListener("click", (e) => { //checks if the player is starting a new round
    if(document.getElementById("btn__reset").innerHTML == "Play Again") {
        location.reload()
    } else {
        game = new Game(Game.phrases);
        game.startGame();
    }
});

document.querySelector('#qwerty').addEventListener('click', e => { //checks if the player presses one of the keys
    let isButton = e.target.tagName.toLowerCase();
  
    if (isButton === 'button') {
      key = e.target.innerHTML;
      game.handleInteraction(key);
    }
  });