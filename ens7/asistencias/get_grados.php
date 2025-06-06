<?php
$conn = new mysqli("localhost", "palin", "palin", "ens7");

$result = $conn->query("SELECT * FROM GRADOS");
$grados = [];
while($row = $result->fetch_assoc()) {
    $grados[] = $row;
}

header('Content-Type: application/json');
echo json_encode($grados);
?>