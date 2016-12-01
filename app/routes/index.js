import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  actions: {
    createNewGame() {
      const isValid = function(word) {
        let pattern = new RegExp(/^[a-zA-Z ]+$/); //Acceptalbe chars - whit
        return pattern.test(word);
      };
      let word = this.controller.get('newGameWord');
      if (isValid(word)) {
        let user = this.get('session.currentUser');
        let game = this.store.createRecord('game', {
          wordRaw: word,
        });

        user.save();

        game
        this.store.createRecord('game', {
          user: user,
          state: 'play',
          wordRaw: word})
          .save()
          .then(() => this.transitionTo('game', game));



      } else {
        alert("Special characters and numbers are not allowed");
      }
      Ember.$('createNewGame').click();
    }


  }
});
