
App.SongsController = Ember.Controller.extend({

  songs: [],

  // ,

  // reloadSongs: function() {
  //   // console.log('got Destroyed!!')
  //   // Something changed...
  //   console.log('hasOwnProperty')
  //   // this.set()
  //   //this.set('model', this.songs);
  // }.observes('songs.@each.isDestroyed')

  remove: function(id) {
    var song = App.Song.find(id);
console.log(song)
    $.ajax({
      url: 'src/lib/ajax.php',
      type: 'post',
      data: {
        action: 'remove',
        song_id: parseInt(id, 10)
      }
    }).then(function() {
      // song.destroy();
      App.Song.songs.removeObject(song)
    })
      
  }
});

App.SongController = Ember.ObjectController.extend({

  editing: false,

  close: function() {
    this.set('editing', false);
    this.transitionToRoute('song');
  },

  edit: function() {
    this.set('editing', true);
  }

});


App.SongEditController = Ember.Controller.extend({

  needs: "song",

  save: function( song ) {
    var songs = App.Song.all();
    // validation or whatever, then...
    song.edit(song.id);
  }
});


App.SongsAddController = Ember.Controller.extend({

  needs: 'songs',

  title:  null,
  artist: null,
  album:  null,

  add: function() {
    var self = this
        newSong = {
          title: this.title,
          artist: this.artist,
          album: this.album
        };

    $.ajax({
      url: 'src/lib/ajax.php',
      type: 'post',
      data: {
        action: 'add_song',
        title: newSong.title,
        artist: newSong.artist,
        album: newSong.album
      },
      success: function(response) {
        newSong.id = response.id;
        App.Song.songs.addObject( App.Song.create(newSong) );
      }
    });
  }

});