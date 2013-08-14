// Model
/*
NOTE

Extend modified the prototype
CREATE is a new instance.

*/

// Instance methods
App.Song = Ember.Object.extend({

  
  edit: function(id) {
   var self  = this,
       data = { 
          action: 'edit',
          song_id: this.get('id'),
          title: this.get('title'), 
          artist: this.get('artist'), 
          album: this.get('album'), 
       };

    $.ajax({
      url: 'src/lib/ajax.php',
      type: 'post',
      data: data,
      success: function(response) {
        if (response.hasOwnProperty('success')) {
          console.log('success')
        }
      }
    })    
  }
});


// Class methods
App.Song.reopenClass({
all: function() {
    var self  = this,
        songs = this.songs = [];

    $.ajax({
      url: 'src/lib/ajax.php',
      type: 'post',
      data: { action: 'get_songs' }
    })
    .then(function(data) {
      data.songs.forEach(function( song ){
        songs.addObject( App.Song.create(song) );
      });

      return songs;
    });

    // Return a blank array that is filled in the callback.
    return songs;
  },

  find: function(id) {
    var id = parseInt(id, 10), 
        song = App.Song.create();

    if(this.songs.length > 0) {
      this.songs.forEach(function(s) {
        if (parseInt(s.id, 10) == id) return s; 
      });   
    } else {
      $.ajax({
        url: 'src/lib/ajax.php',
        type: 'post',
        data: { action: 'find', song_id: id }
      })
      .then(function(data) {
        return song.setProperties(data);
      });

      return song;
    }
  },
  
  
});