/*** Treehouse FSJS Techdegree
  * Project 4 - OOP Game App
  * The Game class accepts a phrases parameter and handles showing most of the game
  * functions like choosing the random phrase and other game interactions
  * (i.e.: removing a life, checking for win/lose, determining when to end game).
  **/
 class Game {
    constructor (phrases) {
      this.missed = 0;
      this.phrases = [
        {value: 'treehouse unit four'},
        {value: 'keep on coding'},
        {value: 'this is phrase hunter'},
        {value: 'you win'},
        {value: 'congratulations'},
      ];
    }
  
    startGame () { //starts game
      document.querySelector('#overlay').style.display = 'none';
  
      this.phrase = this.getRandomPhrase()//
      Phrase.addPhraseToDisplay();
    }
  
    getRandomPhrase () { //function for getting random phrase
      return this.phrases[Math.floor(Math.random() * 5)].value;
    }
  
    handleInteraction (key) { //function for seeing if anything is clicked
      this.splitPhraseArray = this.phrase.split('');
      let keys = document.querySelectorAll('.key');
      let isCorrectLetter = Phrase.checkLetter(this.splitPhraseArray);
  
      if (isCorrectLetter) {
        Phrase.showMatchedLetter(key);
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
      this.missed = this.missed + 1;
      hearts[this.missed - 1].src = 'images/lostHeart.png';
  
      if(this.missed == 5) {
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