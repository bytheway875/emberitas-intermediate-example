import Ember from 'ember';

export default Ember.Controller.extend({
  color: Ember.computed.readOnly('model.favoriteColor'),
  someInformation: Ember.computed('model.{name,favoriteColor}', function(){
    return 'Your name is ' + this.get('model.name') + ' and your favorite color is ' + this.get('model.favoriteColor').;
  }),
  colorStyle: Ember.computed('color', function() {
    var color = CSS.escape(this.get('color'));
    return Ember.String.htmlSafe("color: " + color);
  }),
  actions: {
    setName(newName){
      this.set('model.name', newName);
      this.get('model').save();
      // Warning: this will alert that the model was saved whether the save is successful
      // or not!!
      alert('The model was saved');

    },
    setColor(newColor){
      this.set('model.favoriteColor', newColor);
      this.get('model').save();
      // Warning: this will alert that the model was saved whether the save is successful
      // or Not!!
      alert('The model was saved');


    }
  }
});
