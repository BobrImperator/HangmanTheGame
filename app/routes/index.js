import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createNewGame() {
      let game = this.store.createRecord('game', {wordRaw: this.controller.get('newGameWord')});

      game
        .save()
        .then( () => this.transitionTo('game', game));
    }
  }
});
