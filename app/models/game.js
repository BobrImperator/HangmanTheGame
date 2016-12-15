import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
user: DS.belongsTo('user'),
wordRaw: DS.attr("string"),
state: DS.attr("string", {defaultValue: "provideWord"}),
guessedLetters: DS.attr({defaultValue: () => [] }),
letters: DS.attr({defaultValue: () => ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
  't', 'u', 'v', 'w', 'x', 'y', 'z'] }),
livesCount: 9,
isMan: DS.attr("string", {defaultValue: "Man"}),
haveUsedCheat: DS.attr('boolean', {defaultValue: false}),

word: Ember.computed('wordRaw', function() {
  return this.get('wordRaw').trim();
}),

correctLetters: Ember.computed('word', 'guessedLetters.[]', function() {
  let word = this.get('word').toLowerCase(),
    guessedLetters = this.get("guessedLetters");
    if (guessedLetters === null) {
      this.set('guessedLetters', []);
      return [];
    } else {
      return guessedLetters.filter((l) => word.includes(l)); //counted correct letters
    }
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

resetGame: function() {
  this.set('wordRaw', 'Hello'),
  this.set('livesCount', 9),
  this.set('state', 'provideWord'),
  this.set('guessedLetters', []),
  this.set('letters', ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'
  ]);
  this.save();
}

});
