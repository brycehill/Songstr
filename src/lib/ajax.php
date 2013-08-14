<?php

header('Content-type: application/json');

$data = array();
$error = false;

$mysqli = new mysqli('localhost', 'root', '', 'songster');

if ($mysqli->connect_errno) {
    $error = true;
    $data['error'] = "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}




if(!$error) {
  switch( $_POST['action'] ) {

    case "get_songs":
      $result = $mysqli->query('SELECT * FROM songs');

      if (!$result) {
        error_log( "MySQL error: " . $mysqli->error );
        $data['error'] = "Error querying database";
      } else {
        $data["songs"] = array();
        while($row = $result->fetch_assoc()) {
          if (!array_key_exists($row["id"], $data["songs"])) {
            $data["songs"][] = $row;
          }
        }

        $result->close();
      }

    break;

    case "add_song":
      $title = $mysqli->real_escape_string($_POST['title']);
      $artist = $mysqli->real_escape_string($_POST['artist']);
      $album = $mysqli->real_escape_string($_POST['album']);

      $sql = "INSERT INTO songs (title, artist, album) VALUES ('$title', '$artist', '$album')";
      // error_log("SQL: ".$sql);

      $result = $mysqli->query($sql);

      if ($result === true) {
        $data["success"] = true;
        $data['id'] = $mysqli->insert_id;
      } else {
        error_log( "MySQL error: " . $mysqli->error );
        $data[ "error" ] = "Error inserting new song.";
      }
    break;

    case "find":
      $id = $mysqli->real_escape_string($_POST['song_id']);

      $sql = "SELECT * FROM songs WHERE id = '$id' ";

      $result = $mysqli->query($sql);

      if (!$result) {
        error_log( "MySQL error: " . $mysqli->error );
        $data['error'] = "Error querying database";
      } else {
        $data = $result->fetch_assoc();
      }
    break;

    case "edit":
      $id = $mysqli->real_escape_string($_POST['song_id']);
      $title = $mysqli->real_escape_string($_POST['title']);
      $artist = $mysqli->real_escape_string($_POST['artist']);
      $album = $mysqli->real_escape_string($_POST['album']);

      $sql = "UPDATE songs SET `title` = '$title', `artist` = '$artist', `album` = '$album' WHERE id = '$id' ";
      // error_log("SQL: ".$sql);
      
      $result = $mysqli->query($sql);

      if ($result === true) {
        $data["success"] = true;
      } else {
        error_log( "MySQL error: " . $mysqli->error );
        $data[ "error" ] = "Error Editing song.";
      }
    break;

    case 'remove':
       $id = $mysqli->real_escape_string($_POST['song_id']);
       $sql = "DELETE FROM songs WHERE id = '$id'";
       // error_log("SQL: ".$sql);

      $result = $mysqli->query($sql);

      if ($result === true) {
        $data["success"] = true;
      } else {
        error_log( "MySQL error: " . $mysqli->error );
        $data[ "error" ] = "Error deleting song.";
      }
    break;
  }
}



echo json_encode($data);