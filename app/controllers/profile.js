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
    // two different ways to define promises
    setName(newName){
      this.set('model.name', newName);
      this.send('saveModel');
    },
    setColor(newColor){
      this.set('model.favoriteColor', newColor);
      this.send('saveModel');
    },
    saveModel(){
      this.get('model').save().then(()=> {
        console.log('The model was saved');
      }).catch(()=> {
        console.log('The model was not saved');
      }).finally(()=> {
        console.log(this.get('model.currentState.stateName'));
      });
    }
  }
});
