<?php

require_once('./config.php');


// Endpoint para obtener todos los productos
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['id'])) {
        // Obtener un producto por su ID
        $id = $_GET['id'];
        $sql = "SELECT * FROM productos WHERE id = $id";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            echo json_encode($row);
        } else {
            echo json_encode(["message" => "Producto no encontrado"]);
        }
    } else {
        // Obtener todos los productos
        $sql = "SELECT * FROM productos";
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
    $sql = "INSERT INTO productos (nombre, precio) VALUES ('$nombre', $precio)";
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
  $sql = "UPDATE productos SET nombre='$nombre', precio=$precio WHERE id=$id";
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

