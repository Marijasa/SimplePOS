<?php

// Conexión a la base de datos
$servername = "localhost";
$username = "tu_usuario";
$password = "tu_contraseña";
$database = "pos_database";

$conn = new mysqli($servername, $username, $password, $database);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Endpoint para obtener todas las ventas
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['id'])) {
        // Obtener una venta por su ID
        $id = $_GET['id'];
        $sql = "SELECT v.*, vp.id_producto, vp.cantidad, tp.nombre AS tipo_pago_nombre FROM ventas v LEFT JOIN venta_producto vp ON v.id = vp.id_venta LEFT JOIN tipos_pago tp ON v.id_tipo_pago = tp.id WHERE v.id = $id";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $ventas = [];
            while ($row = $result->fetch_assoc()) {
                $venta_id = $row['id'];
                if (!isset($ventas[$venta_id])) {
                    $ventas[$venta_id] = [
                        "id" => $row['id'],
                        "total" => $row['total'],
                        "tipo_pago" => $row['tipo_pago_nombre'],
                        "fecha_venta" => $row['fecha_venta'],
                        "productos" => []
                    ];
                }
                if ($row['id_producto'] !== null) {
                    $ventas[$venta_id]['productos'][] = [
                        "id_producto" => $row['id_producto'],
                        "cantidad" => $row['cantidad']
                    ];
                }
            }
            echo json_encode(array_values($ventas));
        } else {
            echo json_encode(["message" => "Venta no encontrada"]);
        }
    } else {
        // Obtener todas las ventas
        $sql = "SELECT v.*, vp.id_producto, vp.cantidad, tp.nombre AS tipo_pago_nombre FROM ventas v LEFT JOIN venta_producto vp ON v.id = vp.id_venta LEFT JOIN tipos_pago tp ON v.id_tipo_pago = tp.id";
        $result = $conn->query($sql);
        $ventas = [];
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $venta_id = $row['id'];
                if (!isset($ventas[$venta_id])) {
                    $ventas[$venta_id] = [
                        "id" => $row['id'],
                        "total" => $row['total'],
                        "tipo_pago" => $row['tipo_pago_nombre'],
                        "fecha_venta" => $row['fecha_venta'],
                        "productos" => []
                    ];
                }
                if ($row['id_producto'] !== null) {
                    $ventas[$venta_id]['productos'][] = [
                        "id_producto" => $row['id_producto'],
                        "cantidad" => $row['cantidad']
                    ];
                }
            }
        }
        echo json_encode(array_values($ventas));
    }
}

// Resto del código...

// Cerrar conexión a la base de datos
$conn->close();

?>
