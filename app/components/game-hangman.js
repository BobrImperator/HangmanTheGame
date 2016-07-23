import Ember from 'ember';

export default Ember.Component.extend({
  playGame: Ember.inject.service('play-game'),


  actions: {
    clickLetter(letter) {
      let letters = this.get("playGame.letters"),
        guessedLetters = this.get('playGame.guessedLetters');
      letters.removeObject(letter);
      guessedLetters.pushObject(letter);
      console.log(letter);
    },
    stickman() {
      this.set('playGame.isMan', 'Man');

    },
    stickwoman() {
      this.set('playGame.isMan', 'Woman');
    },
    startGame() {
      let isValid = this.get('playGame.isValid');
      if (isValid) {
        this.set('playGame.state', 'play');
      } else {
        alert("Special characters and numbers are not allowed");

      }
    },

      replayGame() {
        this.set('playGame.state', 'provideWord');

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
