import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  actions: {
    createNewGame() {
      const isValid = function(word) {
        let pattern = new RegExp(/^[a-zA-Z ]+$/); //Acceptalbe chars - whit
        return pattern.test(word);
      };
      let user = this.get('session.currentUser');
      let word = this.controller.get('newGameWord');
      // let user = this.get('session.currentUser');
      // let game = this.store.createRecord('game', {
      //   user: user
      // });
      // game.save();
      // user.save();
      //
      // let word = this.controller.get('newGameWord');

      if (isValid(word)) {
        let game = this.store.createRecord('game', {
          wordRaw: word

        });

        game
          this.store.createRecord('game',{ user: user})
          this.store.createRecord('game', { wordRaw: word})
          .save()
          .then(() => this.transitionTo('game', game));
          user.save();

      } else {
        alert("Special characters and numbers are not allowed");
      }
      Ember.$('createNewGame').click();
    }


  }
});
