<?php
$nombre     = isset($_GET['nombre']) ? $_GET['nombre'] : '';
$apellidos  = isset($_GET['apellidos']) ? $_GET['apellidos'] : '';
$telefono   = isset($_GET['telefono']) ? $_GET['telefono'] : '';
$email      = isset($_GET['email']) ? $_GET['email'] : '';
$motivo     = isset($_GET['motivo']) ? $_GET['motivo'] : 'Evaluación';
$estudios   = isset($_GET['estudios']) ? implode(", ", $_GET['estudios']) : 'Ninguno';
$consulta   = isset($_GET['consulta']) ? $_GET['consulta'] : '';

if (empty($nombre) || empty($apellidos) || empty($telefono) || empty($email) || empty($consulta)) {
    echo "Por favor, complete todos los campos obligatorios.";
    exit;
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Datos Recibidos</title>
</head>
<body>
    <h2>Información recibida:</h2>

    <table border="1">
        <thead>
            <tr>
                <th>Campo</th>
                <th>Valor</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>Nombre:</td><td><?php echo htmlspecialchars($nombre); ?></td></tr>
            <tr><td>Apellidos:</td><td><?php echo htmlspecialchars($apellidos); ?></td></tr>
            <tr><td>Teléfono:</td><td><?php echo htmlspecialchars($telefono); ?></td></tr>
            <tr><td>Email:</td><td><?php echo htmlspecialchars($email); ?></td></tr>
            <tr><td>Motivo de la consulta:</td><td><?php echo htmlspecialchars($motivo); ?></td></tr>
            <tr><td>Estudios:</td><td><?php echo htmlspecialchars($estudios); ?></td></tr>
            <tr><td>Consulta:</td><td><?php echo nl2br(htmlspecialchars($consulta)); ?></td></tr>
        </tbody>
    </table>
</body>
</html>