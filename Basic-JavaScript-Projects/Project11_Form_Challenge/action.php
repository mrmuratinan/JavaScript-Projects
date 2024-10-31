<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data

    $pn = $_POST['phonenumber'];

    // Simple validation
    if (!empty($pn)) {
        echo "<h2>Thank you!</h2>";
        echo "<p>We have received your phone number: $pn</p>";
    } else {
        echo "<p>Please fill in all fields.</p>";
    }
} else {
    echo "<p>Form not submitted correctly.</p>";
}
?>