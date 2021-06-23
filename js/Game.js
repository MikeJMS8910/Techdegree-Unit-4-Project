/*** Treehouse FSJS Techdegree
  * Project 4 - OOP Game App
  * The Game class accepts a phrases parameter and handles showing most of the game
  * functions like choosing the random phrase and other game interactions
  * (i.e.: removing a life, checking for win/lose, determining when to end game).
  **/
 class Game {
    constructor (phrases) {
      this.hearts = 5;
      this.phrases = phrases;
      this.activePhrase = null;
    }
  
    startGame () { //starts game
      document.querySelector('#overlay').style.display = 'none';
  
      phrase = new Phrase(this.getPhrase());
      this.activePhrase = phrase.phrase;
      phrase.addPhraseToDisplay();
    }
  
    getPhrase () { //function for getting random phrase
      return phrases[Math.floor(Math.random()) * this.phrases.length - 1];
    }
  
    handleInteraction (key) { //function for seeing if anything is clicked
      let splitPhraseArray = this.activePhrase.split('');
      let keys = document.querySelectorAll('.key');
      let isCorrectLetter = phrase.checkLetter(key);
  
      if (isCorrectLetter) {
        phrase.showMatchedLetter();
      } else {
        game.removeLife();
      }
  
      keys.forEach(keyLetter => { //function for getting whether a selected key is right or wrong
        if (keyLetter.innerHTML === key && isCorrectLetter) {
          keyLetter.className = 'key chosen';
          keyLetter.disabled = true;
        } else if (keyLetter.innerHTML === key && !isCorrectLetter) {
          keyLetter.className = 'key wrong';
          keyLetter.disabled = true;
        }
      });
  
      if (game.checkForWin()) { //checks if the player lost
        game.gameOver();
      }
    }
  
    removeLife () { //function for removing a life if they lost
      let hearts = document.querySelectorAll('img');
      this.hearts = this.hearts - 1;
      hearts[this.hearts].src = 'images/lostHeart.png';
  
      if(this.hearts == 0) {
        game.gameOver();
      }
    }
  
    checkForWin () { //function for checking if the player won or lost
      let totalLetters = document.querySelectorAll('li.letter');
      let shownLetters = document.querySelectorAll('li.show.letter');
  
      if (shownLetters.length === totalLetters.length) {
        return true;
      }
  
      return false;
    }
  
    gameOver () { //function for ending the game
      let won = game.checkForWin();
  
      if (won) {
        document.querySelector('#overlay').className = 'win';
        document.querySelector('#game-over-message').textContent = 'Congrats You Win!';
      } else {
        document.querySelector('#overlay').className = 'lose';
        document.querySelector('#game-over-message').textContent = 'You lost all of your hearts!';
      }
      document.querySelector('#overlay').style.display = 'flex';
      document.querySelector('#btn__reset').textContent = 'Play Again';
  
    }
  }