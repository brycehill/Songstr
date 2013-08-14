<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'>
<title>Songster</title>
  <link rel='stylesheet' href='src/css/bootstrap.css'>
  <link rel='stylesheet' href='src/css/style.css'>
</head>
<body>

  <!-- Application Template -->
  <script type='text/x-handlebars'>
    <header>
      <h1>Songster</h1>

      <nav>
        <ul class='nav nav-tabs'>
          <li>{{#linkTo index}}Home{{/linkTo}}</li>
          <li>{{#linkTo 'songs'}}Songs{{/linkTo}}</li>
          <li>{{#linkTo 'songs.add'}}Add{{/linkTo}}</li>
          <li>{{#linkTo 'about'}}About{{/linkTo}}</li>
        </ul>
      </nav>
    </header>

    <div class='content'>
      {{outlet}}
    </div>

    <footer></footer>
  </script>

  <!-- Main Index template -->
  <script type='text/x-handlebars' id='index'>
  INDEX

  </script>


  <!-- About Page template -->
  <script type='text/x-handlebars' id='about'>
    <p>Songster is a blah blah Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    est laborum.<p/>
  </script>


  <script type='text/x-handlebars' id='songs'>
    <div class='span3'>
      <p><strong>Songs:</strong></p>
        <ul id='songs' class='songs'>
          {{#each song in model}}
            <li>
              {{#linkTo 'song' song}}{{song.title}}{{/linkTo}}
              <span class='remove-btn' {{action 'remove' song.id}}>&times;<span>
            </li>
          {{/each}}
        </ul>
     </div>

    <div class='span9'>
      {{outlet}}
    </div>

  </script>


  <script type='text/x-handlebars' id='song'>
    {{#if editing}}
      <button class='btn btn-info btn-mini' {{action close}}>Close</button>
      <div class='editor'>
        {{outlet}}
      </div>
    {{else}}
      {{#linkTo song.edit}}
        <button class='btn btn-info btn-mini'>edit</button>
      {{/linkTo}}
    {{/if}}

    <h2>{{title}}</h2>
    <h3>by {{artist}}</h3>
  </script>


  <script type='text/x-handlebars' id='song/edit'>
    <form>
      <div class='control-group'>
        {{view App.InputEditField valueBinding=controllers.song.title }}
      </div>

      <div class='control-group'>
        {{view App.InputEditField valueBinding=controllers.song.artist }}
      </div>

      <div class='control-group'>
        {{view App.InputEditField valueBinding=controllers.song.album }}
      </div>

      <div class='control-group'>
        <button class='btn btn-primary btn-mini' {{action save controllers.song}}>Save</button>
      </div>
    </form>
  </script>



  <script type='text/x-handlebars' id='songs/add'>
    <p>Add a song.</p>
    <form id='add-song'>
      <div class='control-group'>
        {{view App.InputAddField placeholder='Title' valueBinding='title'}}
      </div>

      <div class='control-group'>
        {{view App.InputAddField placeholder='Artist' valueBinding='artist'}}
      </div>

      <div class='control-group'>
        {{view App.InputAddField placeholder='Album' valueBinding='album'}}
      </div>

      <button {{action 'add' this}} class='btn btn-primary btn-mini'>Add</button>
    </form>
  </script>

  <script src='public/Songster.js'></script>

</body>
</html>
