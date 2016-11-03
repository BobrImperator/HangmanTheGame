import Ember from 'ember';
export default Ember.Component.extend({


actions: {

  replayGame() {
    let game = this.get('playGame');
    game.resetGame();
    this.get('playGame').save();
  }
}
});
