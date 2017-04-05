 // CONTROLLER
import Ember from 'ember';

export default Ember.Controller.extend({

  title: '',
  body: '',
  date: '',

  actions: {
    submitReminder() {
      const reminder = this.getProperties('title', 'body', 'date');
      this.get('store').createRecord('reminder', reminder).save().then(() => {
        this.setProperties({title: '', body: '', date: ''})
      });
    }
  }
});
