<?php

require_once('./config.php');


// Endpoint para obtener todos los productos
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['id'])) {
        // Obtener un producto por su ID
        $id = $_GET['id'];
        $sql = "SELECT p.*, tp.nombre as tipo_producto, tp.color FROM productos p INNER JOIN tipos_producto tp ON tp.id = p.id_tipo_producto WHERE p.id = $id";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            echo json_encode($row);
        } else {
            echo json_encode(["message" => "Producto no encontrado"]);
        }
    } else {
        // Obtener todos los productos
        $sql = "SELECT p.*, tp.nombre as tipo_producto, tp.color FROM productos p INNER JOIN tipos_producto tp ON tp.id = p.id_tipo_producto order by id_tipo_producto";
        $result = $conn->query($sql);
        $rows = [];
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $rows[] = $row;
            }
        }
        echo json_encode($rows);
    }
}

// Endpoint para crear un nuevo producto
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $nombre = $data['nombre'];
    $precio = $data['precio'];
    $id_tipo_producto = $data['id_tipo_producto'];
  $activo = $data['activo'];
    $sql = "INSERT INTO productos (nombre, precio, activo, id_tipo_producto) VALUES ('$nombre', $precio, $activo, $id_tipo_producto)";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "Producto creado exitosamente"]);
    } else {
        echo json_encode(["message" => "Error al crear el producto: " . $conn->error]);
    }
}

// Endpoint para actualizar un producto
if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
  $data = json_decode(file_get_contents("php://input"), true);
  $id = $data['id'];
  $nombre = $data['nombre'];
  $precio = $data['precio'];
  $id_tipo_producto = $data['id_tipo_producto'];
  $activo = $data['activo'];
  $sql = "UPDATE productos SET nombre='$nombre', precio=$precio, activo=$activo, id_tipo_producto=$id_tipo_producto WHERE id=$id";
  if ($conn->query($sql) === TRUE) {
      echo json_encode(["message" => "Producto actualizado exitosamente"]);
  } else {
      echo json_encode(["message" => "Error al actualizar el producto: " . $conn->error]);
  }
}

// Endpoint para eliminar un producto
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
  // echo '<pre>';
  // var_dump($_SERVER);
  // echo '</pre>';
    $id = $_GET['id'];
    $sql = "DELETE FROM productos WHERE id=$id";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "Producto eliminado exitosamente"]);
    } else {
        echo json_encode(["message" => "Error al eliminar el producto: " . $conn->error]);
    }
}

// Cerrar conexión a la base de datos
$conn->close();

?>

