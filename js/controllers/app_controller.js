
// Holds all of our songs.
// App.SongsController = Ember.ArrayController.create();


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
console.log('saving')
console.log(songs[0])
console.log('song')
console.log(song)
  App.Song.update({id:3,title:"newtititle"});
    // var tmp = $.map(song, function(val, i) {
    //   console.log(typeof val)
    //   //console.log(typeof i)
    //   if(typeof val == "string")
    // });

//     $.each(songs, function(index, value) {
//       if(this.id == song.id) {
//         console.log('these match')
//         console.log('before')
//         console.log(this)
//         console.log(this.value)
//         $.each(this, function(index, value) {
//           //this[index] = song.get(index)


//           console.log(song.get(index))
//           this[index] = song.get(index)
//           console.log('after')
//           console.log(this[index])
//         });

//       }
//     })
//     song.set('title', song.get('title'))

    //localStorage.setItem("songs", songs);
  }
});


App.SongsAddController = Ember.Controller.extend({

  title: null,
  artist: null,
  album: null,

  add: function(  ) {
console.log('adding')

    App.Song.add({
      id: (App.Song.all().length + 1),
      title: this.title,
      artist: this.artist,
      album: this.album
    });
  }

});