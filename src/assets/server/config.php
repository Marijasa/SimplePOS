<?php

@header('Access-Control-Allow-Origin: *');

// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$database = "pos_database";

$conn = new mysqli($servername, $username, $password, $database);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}