<?php
require 'conexionBDbaloncesto.php';
$id = $_POST["id"];
$nombre = $_POST["nombre"];
$descripcion = $_POST["descripcion"];
$caracteristica= $_POST["caracteristica"];
var_dump($id);
var_dump($nombre);
var_dump($descripcion);
var_dump($caracteristica);
$sql = "UPDATE elementos SET nombre='".$nombre."', descripcion='".$descripcion."', caracteristica='".$caracteristica."' WHERE id= $id";
mysqli_query($conn, $sql);
header("Location: ejemploInsercion.php");
?>
