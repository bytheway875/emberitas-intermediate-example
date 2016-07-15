import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('profile', function() {
    this.route('friends', function() {
      this.route('edit', { path: '/edit/:profile_id' });
    });
  });
});

export default Router;
