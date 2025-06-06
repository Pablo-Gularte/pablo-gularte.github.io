<?php
$conn = new mysqli("localhost", "palin", "palin", "ens7");

$idGrado = $_GET['id_grado'];
$fecha = $_GET['fecha'];

// Obtener estudiantes con su asistencia del día si existe
$query = "
    SELECT e.*, a.tipo_asistencia 
    FROM ESTUDIANTES e
    LEFT JOIN ASISTENCIA a ON e.id = a.id_estudiante 
        AND a.fecha = '$fecha'
    WHERE e.id_grado = $idGrado
";

$result = $conn->query($query);
$estudiantes = [];
while($row = $result->fetch_assoc()) {
    $row['asistencia'] = $row['tipo_asistencia'] ?? 'P';
    unset($row['tipo_asistencia']);
    $estudiantes[] = $row;
}

header('Content-Type: application/json');
echo json_encode($estudiantes);
?>