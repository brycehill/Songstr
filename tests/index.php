<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Songster Unit Tests</title>
  <link rel="stylesheet" href="../vendor/css/qunit.css">
  <link rel="stylesheet" href="tests.css">
  <link rel="stylesheet" href="../src/css/styles.css">
  <link rel="stylesheet" href="../src/css/bootstrap.css">
</head>
<body>
  <div id="qunit"></div>
  <div id="ember-testing-container">
    <div id="ember-testing">
      <?php require('../index.php'); ?>
    </div>
  </div>

  <script src="../vendor/js/qunit-1.12.0.js"></script>
  <script src="../vendor/js/sinon-1.7.3.js"></script>
  <script src="../vendor/js/jquery-1.9.1.js"></script>
  <script src="../vendor/js/handlebars-1.0.0-rc.4.js"></script>
  <script src="../vendor/js/ember-1.0.0-rc.5.js"></script>
  <script src="../public/Songster.js"></script>
  <script src="setupTests.js"></script>
  <script src="tests.js"></script>
</body>
</html>