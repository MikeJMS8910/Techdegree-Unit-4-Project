/*** Treehouse FSJS Techdegree
  * Project 4 - OOP Game App
  * The Phrase class accepts a phrase parameter and handles showing the phrase
  * to the user, checking if a given letter is within the current phrase, and
  * showing correct letters.
  **/
 class Phrase {
    constructor (phrase) {
      this.phrase = phrase//gets phrase
    }
  
    static addPhraseToDisplay () { //function for showing the phrase on the screen
      let phraseContainer = document.querySelector('.section#phrase > ul');
      
      let splitPhrase = game.phrase.split('');
      splitPhrase.forEach(character => {
        let li = document.createElement('li');
      
        if ((/\s/).test(character)) {
          li.className = 'space';
          li.textContent = ' ';
          phraseContainer.append(li);
        } else {
          li.className = `hide letter ${character}`;
          li.textContent = character;
          phraseContainer.append(li);
        }
      });
    }
  
    static checkLetter (array) { //funcion for checking if a letter excists
      if (array.includes(key)) {
        return true;
      } else {
        return false;
      }
    }
  
    static showMatchedLetter (key) { //function for showing which letters are selected
      let letters = document.querySelectorAll(`.letter.${key}`);
  
      letters.forEach(letter => {
        letter.className = "show";
      });
    }
  }