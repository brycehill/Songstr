var App = App || Ember.Application.create({
   LOG_TRANSITIONS: true
});


/*
 *  ROUTER
 */

 App.Router.map(function() {
  this.route('about');

  this.resource('songs', function() {
    this.route('add');
    this.resource('song', {path: '/:song_id'}, function() {
      this.route('edit');
    });
  });
});

App.SongsRoute = Ember.Route.extend({
  model: function() {
    return App.Song.all();
  }
});

App.SongRoute = Ember.Route.extend({
  model: function(params) {
    return App.Song.find(params.song_id);
  },

  setupController: function(controller, model) {
    this._super(controller, model)
    controller.set('editing', false);
  }
});

App.SongEditRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    this.controllerFor('song').set('editing', true);
  }
});