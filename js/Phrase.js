/*** Treehouse FSJS Techdegree
  * Project 4 - OOP Game App
  * The Phrase class accepts a phrase parameter and handles showing the phrase
  * to the user, checking if a given letter is within the current phrase, and
  * showing correct letters.
  **/
 class Phrase {
    constructor (phrase) {
      this.phrase = phrases[Math.floor(Math.random() * 4)].toLowerCase(); //gets phrase
    }
  
    addPhraseToDisplay () { //function for showing the phrase on the screen
    let phraseContainer = document.querySelector('.section#phrase > ul');
  
    console.log(this.phrase)
    let splitPhrase = this.phrase.split("")
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
  
    checkLetter (key) { //funcion for checking if a letter excists
      let newKey = this.phrase.split("").map(letter => letter.toLowerCase())
      if (newKey.includes(key)) {
        phrase.showMatchedLetter(key);
        return true;
      } else {
        return false;
      }
    }
  
    showMatchedLetter (key) { //function for showing which letters are selected
      let letters = document.querySelectorAll(`.letter.${key}`);
  
      letters.forEach(letter => {
        letter.className = "show";
      });
    }
  }