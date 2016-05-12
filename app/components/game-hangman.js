import Ember from 'ember';

export default Ember.Component.extend({
  word: "Hey You!", // passed word
  letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'
  ], // alphabet
  guessedLetters: [], // incorrect letters
  remainingLives: 10, // Lives left

  correctLetters: Ember.computed('word', 'guessedLetters.[]', function() {
    let word = this.get('word').toLowerCase(),
        guessedLetters = this.get("guessedLetters");
    return guessedLetters.filter( (l) => word.includes(l)); //counted correct letters
  }),
  orderOfletters: Ember.computed('word', 'correctLetters', function() {
    let word = this.get('word'), correctLetters = this.get(correctLetters);

    for (let i = 1; i < word.length; i++) {
      console.log(i);


}



  }),

  actions: {
    clickLetter(letter) {
      let letters = this.get("letters"),
        guessedLetters = this.get("guessedLetters");
      letters.removeObject(letter);
      guessedLetters.pushObject(letter);

      console.log(letter);
    }

  }
});

//Usuwa litere z letters
// correctLetters w kolejnosci dla danego slowa , computed property, iterujaca i wyswietlajaca.

// result = function () {
//     wordHolder = document.getElementById('hold');
//     correct = document.createElement('ul');
//
//     for (var i = 0; i < word.length; i++) {
//       correct.setAttribute('id', 'my-word');
//       guess = document.createElement('li');
//       guess.setAttribute('class', 'guess');
//       if (word[i] === "-") {
//         guess.innerHTML = "-";
//         space = 1;
//       } else {
//         guess.innerHTML = "_";
//       }
//
//       geusses.push(guess);
//       wordHolder.appendChild(correct);
//       correct.appendChild(guess);
//     }
//   }
//
