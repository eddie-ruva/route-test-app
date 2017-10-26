import Ember from 'ember';

const { get } = Ember;

export default Ember.Route.extend({
	model() {
    return Ember.RSVP.reject();
	},

  actions: {
    error() {
      if (get(this.paramsFor('top'), 'category')) {
        this.transitionTo({ queryParams: { category: null }});
      } else {
        this.transitionTo('top.work');
      }
      return false
    }
  }
});

