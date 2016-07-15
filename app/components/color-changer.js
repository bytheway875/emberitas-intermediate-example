import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['colorStyle:style'],
  colorStyle: Ember.computed('color', function() {
    var color = CSS.escape(this.get('color'));
    return Ember.String.htmlSafe("color: " + color);
  })
});
