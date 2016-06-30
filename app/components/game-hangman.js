import Ember from 'ember';

export default Ember.Component.extend({
  wordRaw: "Hello",
  word: Ember.computed('wordRaw', function(){
    return this.get('wordRaw').trim();
  }),
  letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ,
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'], // alphabet
  guessedLetters: [], // Array of already picked letters
  livesCount: 9, // Lives left
  state: "provideWord",

  correctLetters: Ember.computed('word', 'guessedLetters.[]', function() {
    let word = this.get('word').toLowerCase(),
        guessedLetters = this.get("guessedLetters");
    return guessedLetters.filter( (l) => word.includes(l)); //counted correct letters
  }),

  wordSoFar: Ember.computed('correctLetters.[]', function() {
    let word = this.get('word').toLowerCase().split(''),
    correctLetters = this.get('correctLetters');
    let letterOrWhitespace = (letter) => letter === " " ? "-" : "_";

    return word.map(letter => correctLetters.includes(letter) ? letter : letterOrWhitespace(letter)).join(" ");

  }),

  remainingLives: Ember.computed('correctLetters.[]','guessedLetters.[]', function() {
    let livesCount = this.get('livesCount'),
    correctLetters = this.get('correctLetters'),
    guessedLetters = this.get('guessedLetters');

    let missedLettersCount = guessedLetters.length - correctLetters.length ;
    return  livesCount - missedLettersCount;

  }),

  gameLost: Ember.computed('remainingLives' , function () {
    let remainingLives = this.get('remainingLives');

    if (remainingLives === 0) {
      return this.set('state', 'lost');
    }
    return this.set('state', 'lost');

  }),
  countWhiteSpaces: Ember.computed('word',function(){
    let word = this.get('word');

    return (word.match(/\s/g) || []).length;
  }),
  notAllowedCharacters: Ember.computed('word', function() {
    let word = this.get('word');
    let pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/); //unacceptable chars
    if (pattern.test(word)) {
        alert("Please only use standard alphanumerics");
        return false;
    }
    return true; //good user input
  }),

  gameWon: Ember.computed('wordSoFar.[]','word',function(){
    let wordSoFar = this.get('wordSoFar'),
    word = this.get('word'),
    countWhiteSpaces = this.get('countWhiteSpaces');

    return (wordSoFar.match(/_/g) || []).length - countWhiteSpaces;

  }),


  actions: {
    clickLetter(letter) {
      let letters = this.get("letters"),
        guessedLetters = this.get("guessedLetters");
      letters.removeObject(letter);
      guessedLetters.pushObject(letter);

      console.log(letter);
    },
    startGame() {
      this.set('state', 'play');

    },


    }

});

//Definiowanie stanu gry, stan zalezny od zdefiniowania slowa.
//Drugi stan, pokazanie svg hangmana,liter i zyc.
