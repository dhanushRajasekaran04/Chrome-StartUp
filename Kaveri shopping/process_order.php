<?php
// Get data from the AJAX request
$name = $_POST['name'];
$number = $_POST['number'];
$address = $_POST['address'];
$totalAmount = $_POST['totalAmount'];
$paymentMethod = $_POST['paymentMethod'];

// Format the order details
$orderDetails = "Name: $name\nNumber: $number\nAddress: $address\nTotal Amount: $totalAmount\nPayment Method: $paymentMethod\n\n";

// File to store orders (make sure it's writable by the server)
$filePath = 'C:\Users\DHANUSHR\Documents\Kaveri shopping';

// Append the order details to the file
file_put_contents($filePath, $orderDetails, FILE_APPEND);

// Return a response (you can customize this based on your needs)
$response = array('status' => 'success', 'message' => 'Order placed successfully!');
echo json_encode($response);
?>
