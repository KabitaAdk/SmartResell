<?php
$servername = "localhost";
$username = "root";       // XAMPP default
$password = "";           // XAMPP default
$dbname = "used_iphone_marketplace";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Optional: set charset
$conn->set_charset("utf8");
?>
