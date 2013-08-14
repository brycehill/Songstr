App.SongEditController = Ember.Controller.extend({

  needs: "song",

  save: function( song ) {
    var songs = App.Song.all();
    // validation or whatever, then...
    song.edit(song.id);
  }
});