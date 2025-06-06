<?php
$conn = new mysqli("localhost", "palin", "palin", "ens7");
$data = json_decode(file_get_contents('php://input'), true);

$conn->autocommit(FALSE);

try {
    // Eliminar asistencias existentes para la fecha y grado
    $delete = $conn->prepare("DELETE FROM ASISTENCIA WHERE id_grado = ? AND fecha = ?");
    $delete->bind_param("is", $data['id_grado'], $data['fecha']);
    $delete->execute();

    // Insertar nuevas asistencias
    $insert = $conn->prepare("
        INSERT INTO ASISTENCIA (id_grado, id_estudiante, tipo_asistencia, fecha)
        VALUES (?, ?, ?, ?)
    ");
    
    foreach($data['asistencias'] as $asistencia) {
        $insert->bind_param("iiss", 
            $data['id_grado'],
            $asistencia['id_estudiante'],
            $asistencia['tipo_asistencia'],
            $data['fecha']
        );
        $insert->execute();
    }
    
    $conn->commit();
    echo json_encode(['message' => 'Asistencia guardada correctamente']);
} catch(Exception $e) {
    $conn->rollback();
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
?>