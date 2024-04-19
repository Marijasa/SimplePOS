<?php

require_once('./config.php');

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



// Endpoint para crear una nueva venta con los productos relacionados
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  $data = json_decode(file_get_contents('php://input'), true);
  $total = $data['total'];
  $cliente = $data['cliente'];
  $tipoPago = $data['id_tipo_pago'];

  $sql = "INSERT INTO ventas (total, nombre_cliente, id_tipo_pago) VALUES ($total, '$cliente', $tipoPago)";
  if ($conn->query($sql) === TRUE) {
    $id_venta = $conn->insert_id;

      // venta creada 
      // ahora crear productos
      foreach ($data['productos'] as $producto) {
        $prodId = $producto['id'];
        $prodCantidad = $producto['cantidad'];
        $prodPrecio = $producto['precio'];

        $complete = true;

        $sql = "INSERT INTO venta_producto (id_venta, id_producto, cantidad, precio) VALUES ($id_venta, $prodId, $prodCantidad, $prodPrecio)";
        if ($conn->query($sql) !== TRUE) {
          $complete = false;
        }
      }
      if($complete) {
        echo json_encode(["message" => "Venta creada correctamente", "id" => $id_venta]);
    } else {
        echo json_encode(["message" => "Error al crear los productos de la venta: " . $conn->error]);
    }
  } else {
      echo json_encode(["message" => "Error al crear la venta: " . $conn->error]);
  }

  // $datos = json_decode(file_get_contents('php://input'), true);
  
  // // Insertar la nueva venta en la base de datos
  // $query_venta = "INSERT INTO ventas (total, nombre_cliente, fecha_venta) VALUES (?, ?, ?)";
  // $stmt_venta = $conn->prepare($query_venta);
  // $stmt_venta->bind_param('dss', $datos['total'], $datos['cliente'], $datos['fecha']);
  // $stmt_venta->execute();
  // $id_venta = $stmt_venta->insert_id;

  // // Insertar los productos relacionados en la tabla venta_producto
  // foreach ($datos['productos'] as $producto) {
  //     $query_producto = "INSERT INTO venta_producto (id_venta, id_producto, cantidad, precio) VALUES (?, ?, ?, ?)";
  //     $stmt_producto = $conn->prepare($query_producto);
  //     $stmt_producto->bind_param('iiid', $id_venta, $producto['id'], $producto['cantidad'], $producto['precio']);
  //     $stmt_producto->execute();
  // }
  
  // echo json_encode(['mensaje' => 'Venta creada correctamente']);
}

// Cerrar la conexión a la base de datos
$conn->close();
?>