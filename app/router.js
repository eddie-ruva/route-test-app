import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('top', { path: '/'}, function() {
    this.route('life');
    this.route('work');
  });
});

export default Router;
