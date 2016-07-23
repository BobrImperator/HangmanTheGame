import Ember from 'ember';
export default Ember.Component.extend({

  playGame: Ember.inject.service('play-game'),


actions: {

  replayGame() {
    let game = this.get('playGame');
    game.resetGame();
  }
}
});
