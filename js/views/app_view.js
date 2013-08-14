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