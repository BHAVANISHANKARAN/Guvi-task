<?php
// Login script
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['email']) && isset($_POST['password'])) {
  $email = $_POST['email'];
  $password = $_POST['password'];
  // Connect to database
  $conn = mysqli_connect('localhost', 'root', '', 'mywebsite');
  if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
  }
  // Prepare SQL statement
  $stmt = mysqli_prepare($conn, 'SELECT * FROM users WHERE email = ? AND password = ?');
  mysqli_stmt_bind_param($stmt, 'ss', $email, $password);
  // Execute SQL statement
  mysqli_stmt_execute($stmt);
  $result = mysqli_stmt_get_result($stmt);
  // Check if user exists
  if (mysqli_num_rows($result) == 1) {
    // User authenticated
    echo 'success';
  } else {
    // Login failed
    echo 'error';
  }
  // Close statement and connection
  mysqli_stmt_close($stmt);
  mysqli_close($conn);
}
?>