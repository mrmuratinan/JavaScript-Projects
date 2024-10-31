<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $first = $_POST['fname'];
		$last = $_POST['lname'];
    $email = $_POST['email'];

    // Simple validation
    if (!empty($fname) && !empty($lname)&& !empty($email)) {
        echo "<h2>Thank you!$fname $lname</h2>";
        echo "<p>We have received your phone number: $email</p>";
    } else {
        echo "<p>Please fill in all fields.</p>";
    }
} else {
    echo "<p>Form not submitted correctly.</p>";
}
?>