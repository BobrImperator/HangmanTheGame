import Ember from 'ember';

export default Ember.Service.extend({
  wordRaw: "Hello",
  isMan: 'Man',
  // passed word
  letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'
  ], // alphabet


  guessedLetters: [], // Array of already picked letters
  livesCount: 9, // Lives left
  state: "provideWord",

  word: Ember.computed('wordRaw', function() {
    return this.get('wordRaw').trim();
  }),

  correctLetters: Ember.computed('word', 'guessedLetters.[]', function() {
    let word = this.get('word').toLowerCase(),
      guessedLetters = this.get("guessedLetters");
    return guessedLetters.filter((l) => word.includes(l)); //counted correct letters
  }),

  wordSoFar: Ember.computed('correctLetters.[]', function() {
    let word = this.get('word').toLowerCase().split(''),
      correctLetters = this.get('correctLetters');

    return word.map(letter => correctLetters.includes(letter) ? letter : "_").join(" ");

  }),

  remainingLives: Ember.computed('correctLetters.[]', 'guessedLetters.[]', function() {
    let livesCount = this.get('livesCount'),
      correctLetters = this.get('correctLetters'),
      guessedLetters = this.get('guessedLetters');

    let missedLettersCount = guessedLetters.length - correctLetters.length;
    return livesCount - missedLettersCount;

  }),

  gameLost: Ember.computed('remainingLives','state', function() {
    let remainingLives = this.get('remainingLives'),
    state = this.get('state');

    if (remainingLives === 0 ) {
    return  this.set('state' , 'lost');
  }

  }),
  countWhiteSpaces: Ember.computed('word', function() {
    let word = this.get('word');

    return (word.match(/\s/g) || []).length;
  }),
  isValid: Ember.computed('word', function() {
    let word = this.get('word');
    let pattern = new RegExp(/^[a-zA-Z ]+$/); //Acceptalbe chars - whit
    return pattern.test(word);
  }),


  gameWon: Ember.computed('wordSoFar.[]', 'word', function() {
    let wordSoFar = this.get('wordSoFar'),
      countWhiteSpaces = this.get('countWhiteSpaces');

    return (wordSoFar.match(/_/g) || []).length - countWhiteSpaces;

  }),

  hangmanSurvived: Ember.computed('gameWon','state', function(){
    let gameWon = this.get('gameWon'),
     state = this.get('state');
    if (gameWon === 0 ) {
    return  this.set('state' , 'nothanged');
  }
}),

  resetGame: function() {
    this.set('wordRaw', 'Hello'),
    this.set('livesCount', 9),
    this.set('state', 'provideWord'),
    this.set('guessedLetters', []),
    this.set('letters', ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
      'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
      't', 'u', 'v', 'w', 'x', 'y', 'z'
    ]);
  }

});
