-- Creamos la base de datos
CREATE DATABASE IF NOT EXISTS pos_database;

-- Nos aseguramos de utilizar la base de datos
USE pos_database;

-- Creamos la tabla para los productos
CREATE TABLE IF NOT EXISTS productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL
);

-- Volcando datos para la tabla pos_database.productos: ~11 rows (aproximadamente)
INSERT INTO `productos` (`id`, `nombre`, `precio`, `activo`) VALUES
                                                               (2, 'CHIFRIJO', 2000.00, 1),
                                                               (3, 'EMPANADA POLLO', 500.00, 0),
                                                               (4, 'EMPANADA QUESO', 500.00, 1),
                                                               (5, 'EMPANADA FRIJOL', 500.00, 1),
                                                               (6, 'EMPANADA CHIVERRE', 250.00, 1),
                                                               (7, 'CHALUPA', 1500.00, 0),
                                                               (8, 'NACHO POLLO', 2000.00, 0),
                                                               (9, 'AGUADULCE', 500.00, 1),
                                                               (10, 'CAFE', 500.00, 1),
                                                               (11, 'GASEOSA', 500.00, 1),
                                                               (12, 'PINCHO', 1000.00, 1),
                                                               (13, 'SOBRANTE DE QUESO', 1000.00, 0);

-- Creamos la tabla para los tipos de pago
CREATE TABLE IF NOT EXISTS tipos_pago (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

-- Insertamos algunos tipos de pago por defecto
INSERT INTO tipos_pago (nombre) VALUES ('Efectivo'), ('Sinpe');

-- Creamos la tabla para las ventas
CREATE TABLE ventas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    total DECIMAL(10,2) NOT NULL,
    id_tipo_pago INT NOT NULL,
    nombre_cliente VARCHAR(255) NOT NULL,
    fecha_venta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_tipo_pago) REFERENCES tipos_pago(id)
);


-- Creamos la tabla intermedia para relacionar ventas y productos
CREATE TABLE venta_producto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_venta INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (id_venta) REFERENCES ventas(id),
    FOREIGN KEY (id_producto) REFERENCES productos(id)
);


ALTER TABLE productos ADD COLUMN activo TINYINT NOT NULL DEFAULT(1);