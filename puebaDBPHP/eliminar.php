<?php
require 'conexionBDbaloncesto.php';
$id = $_GET["id"];
$sql = "DELETE FROM elementos WHERE id=".$id;
$queElemento = mysqli_query($conn, $sql);
header("Location: ejemploInsercion.php");

?>
