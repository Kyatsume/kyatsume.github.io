<?php

// Get the user input
$input = $_POST['input'];

// Set the file path
$file = 'device_ids.txt';

// Append the input to the file
file_put_contents($file, $input . PHP_EOL, FILE_APPEND);

// Display a success message
echo 'device registered successfully!';

?>
