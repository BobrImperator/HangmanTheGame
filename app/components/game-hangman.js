import Ember from 'ember';

export default Ember.Component.extend({
actions: {
    clickLetter(letter) {
      let letters = this.get("playGame.letters"),
        guessedLetters = this.get('playGame.guessedLetters');
      letters.removeObject(letter);
      guessedLetters.pushObject(letter);
      this.get('playGame').save();
    },
    stickman() {
      this.set('playGame.isMan', 'Man');
      this.get('playGame').save();
    },
    stickwoman() {
      this.set('playGame.isMan', 'Woman');
      this.get('playGame').save();
    },
    startGame() {
        this.set('playGame.state', 'play');
    },

      replayGame() {
        this.set('playGame.state', 'provideWord');
        this.get('platGame').save();

      }
    }




});

//Usuwa litere z letters
// correctLetters w kolejnosci dla danego slowa , computed property, iterujaca i wyswietlajaca.
// map jak zgadnieta literka to zwrocona literka jesli nie to - ...
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
// let letters = "abcdefghijklmnoprstwuyzx";
// let lettersSplit = letters.split(" ");
// let guessedLetter = [];
// let remainingLives = 10;
// let correctLetters =
//
// });
