
App.Router.map(function() {
  // put your routes here
  this.resource('about');

  this.resource('songs', function() {
    this.resource('song', {path: '/:song_id'}, function() {
      this.route('edit');
    });

    this.route('add');
  });

});



App.SongsRoute = Ember.Route.extend({
  model: function() {
 console.log('songs route model')
    if(localStorage.getItem('songs')) {
      // console.log('localstorage')
      // console.log(localStorage.getItem('songs'))
      // return localStorage.getItem('songs');
    }
    else {
      return App.Song.all();
    }
  }
});


App.SongRoute = Ember.Route.extend({
  model: function(params) {
    return App.Song.find(params.song_id);
  },

  setupController: function(controller) {
    controller.set('editing', false);
  }
});


App.SongEditRoute = Ember.Route.extend({

  model: function(params) {
    return App.Song.find(params.song_id);
  },

  setupController: function(controller, model) {
    this.controllerFor('song').set('editing', true);
  }
});



