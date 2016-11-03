import DS from 'ember-data';

export default DS.Model.extend({
wordRaw: DS.attr("string", {defaultValue: "Hello"}),
state: DS.attr("string", {defaultValue: "provideWord"}),
guessedLetters: DS.attr({defaultValue: () => [] }),
letters: DS.attr({defaultValue: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
  't', 'u', 'v', 'w', 'x', 'y', 'z'] }),
livesCount: DS.attr("number", {defaultValue: 9})

});
