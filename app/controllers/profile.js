import Ember from 'ember';

export default Ember.Controller.extend({
  name: 'Emberita',
  color: 'green',
  someInformation: Ember.computed('name', 'color', function(){
    return 'Your name is ' + this.get('name') + ' and your favorite color is ' + this.get('color');
  }),
  colorStyle: Ember.computed('color', function() {
    var color = CSS.escape(this.get('color'));
    return Ember.String.htmlSafe("color: " + color);
  }),
  actions: {
    setName(newName){
      this.set('name', newName);
    },
    setColor(newColor){
      this.set('color', newColor);
    }
  }
});
