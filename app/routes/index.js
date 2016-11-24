import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    createNewGame() {
  const  isValid = function(word) {
        let pattern = new RegExp(/^[a-zA-Z ]+$/); //Acceptalbe chars - whit
        return pattern.test(word);
      };
      let word = this.controller.get('newGameWord');

        if (isValid(word)) {
          let game = this.store.createRecord('game', {wordRaw: word});
          game
            .save()
            .then( () => this.transitionTo('game', game));

        } else {
          alert("Special characters and numbers are not allowed");
        }
        Ember.$('createNewGame').click();
    }

    
  }
});
