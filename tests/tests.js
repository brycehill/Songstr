
App.Song.songs = {
  
}


/**
 * Testing the app's Songs Controllers. 
 */
(function(){

  module('Songs Controller Tests', {
    setup: function() {
      //Ember.run(App, App.addvanceReadiness)
      App.reset();
    }
  });

  test("Make sure the homepage loads", function() {
    visit('/').then(function() {
      ok(exists('*'), 'Exists');
      ok(exists('h1'), 'Exists');
    })
  });

  test("Visit Songs", function() {
    visit('/songs').then(function(){
      ok(exists('#songs'), 'List of songs exists');
      // Add more
       
    })
  });

  test("Visit Add", function() {
    visit('/songs/add').then(function(){
      ok(exists('#add-song'), 'Add songs form exists');
      // Add more
       
    })
  });

  test("Visit A Specific Song", function() {
    visit('/songs/1').then(function(){
      ok(exists('#songs'), 'List of songs exists');
    })
  });

  test("Visit Editing A Specific Song", function() {
    visit('/songs/1/edit').then(function(){
      ok(exists('h2'), 'Song Title exists.');
    })
  });

  test("Delete a Song", function() {
    
    visit('/songs/').then(function(){
      var ul = $('#songs'),
          li = ul.find('li');

      ok(exists(ul), 'List of songs exists');
      ok(li.size() > 0, 'There are songs in the list');

      // li.trigger('mouseover');

      // ok(li.next('.remove-btn'))

    })

  });
}())




