// Model


// Instance methods
App.Song = Ember.Object.extend({

  update: function(song) {
    console.log('updating...')

    var songs = this.all();

    //songs.push( App.Song.create(song))
    // var title = this.get('title'),
    //     artist = this.get('artist'),
    //     album = this.get('album');

  }
});


// Class methods
App.Song.reopenClass({

  // hard coding these for demo purposes.

  all: function() {
    var songs = [];

    $.getJSON('songs.json', function( data ) {
      console.log(data)
      songs.push( App.Song.create(this) );
    });

    return songs;
  },

  //
  dataChanged: function() {
    console.log('data changed')
  }.observes('data'),


  // Add a song to our list.
  add: function( song ) {
console.log('adding in model');
    this.data.push( song );

    // now update the list of songs somehow...
  },


  find: function(id) {
    var songs = this.all();

    for(song in songs) {
      var obj = songs[song];

      if(typeof obj != "undefined" && obj.hasOwnProperty('artist')) {
        if(obj.id == id) {
          return obj;
        }
      }
    }

  }

});