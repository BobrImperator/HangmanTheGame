import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('new-game');
  this.route('my-session');
  this.route('play-with-me');
  this.route('game');
});

export default Router;
