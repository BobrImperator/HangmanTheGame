import Ember from 'ember';
export default Ember.Component.extend({
  session: Ember.inject.service(),
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
        this.get('playGame').save();
    },

      replayGame() {
        this.set('playGame.state', 'provideWord');
        this.get('playGame').save();

      },
      superPowerRandomLetter() {
        let word = this.get('playGame.word').toLowerCase().split(''),
          guessedLetters = this.get('playGame.guessedLetters'),
          correctLetters = this.get('playGame.correctLetters'),
          letters = this.get('playGame.letters'),
          haveUsedCheat = this.get('playGame.haveUsedCheat'),
          randomLetter = word[~~(Math.random()*word.length)];
          letters.removeObject(randomLetter);
          correctLetters.pushObject(randomLetter);
          guessedLetters.pushObject(randomLetter);
          this.set('playGame.haveUsedCheat',true);
          this.get('playGame').save();

      }
    }
  });
