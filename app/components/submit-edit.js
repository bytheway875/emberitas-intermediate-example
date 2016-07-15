import Ember from 'ember';

export default Ember.Component.extend({
  object: null,
  property: '',
  currentValue: Ember.computed('object', 'property', {
    get(){
       var objectProperty = this.get('objectProperty');
       return this.get(objectProperty);
    },
    set(key, value){
      return value;
    }
  }),
  objectProperty: Ember.computed('object', 'property', function(){
    return `object.${this.get('property')}`;
  }),
  didInsertElement(){
    this._super(...arguments);
    console.log('did insert element');
  },
  didUpdateAttrs() {
    this._super(...arguments);
    this.set('newValue', '')
  },
  willDestroyElement(){
    this._super(...arguments);
    console.log('will destroy element');
  },
  actions: {
    setValue(newValue){
      let property = this.get('property');
      this.get('object').set(property, newValue);
      this.send('saveObject');
      this.set('currentValue', newValue);
    },
    saveObject(){
      this.get('object').save().then(() => {
        console.log('The object was saved.')
      }).catch(() => {
        console.log('The object was not saved');
      }).finally(() => {
        console.log('Our object is ' + this.get('object.currentState.stateName'));
      });
    }
  }

});
