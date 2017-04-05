 // CONTROLLER
import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    select(model) {
      // console.log('i am the date ' + (model.date).toString())
      model.save()
    }
  }
});
