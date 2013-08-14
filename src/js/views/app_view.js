/*
 * Views for my App
 */


App.InputEditField = Ember.TextField.extend({
  type: "text",
  placeholder: "",
  attributeBindings: ["required"],
  required: true
});


App.InputAddField = Ember.TextField.extend({
  type: "text",
  placeholder: "",
  attributeBindings: ["required"],
  required: true
});




App.HoverOverSongView = Ember.View.extend({
  mouseEnter: function(event) {
    this.get('controller').set('hovered', true)
  },

  mouseLeave: function(event) {
    this.get('controller').set('hovered', false)
  }
});