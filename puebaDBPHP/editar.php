<?php
require 'conexionBDbaloncesto.php';

$id = $_GET["id"];
$sql = "SELECT * FROM elementos WHERE id = ".$id;
$queElemento = mysqli_query($conn, $sql);
$rsElemento = mysqli_fetch_assoc($queElemento);
$total = mysqli_num_rows($queElemento);

?>
<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <form method="POST" action="procesarEdit.php">
	<label for="nombre">Nombre</label>
    <input type="text" id="nombre" name="nombre" value="<?php echo $rsElemento["nombre"]; ?>" required >
    <br />
    <label for="Caratula">Caracteristica</label>
    <input type="text" size="75" id="caracteristica" name="caracteristica" value="<?php echo $rsElemento["caracteristica"]; ?>" required>
    <br />
        <label for="Descripcion">Descripcion</label>
        <br/>
    <textarea style="resize:none;" rows="10" cols="40" id="descripcion" name="descripcion" required><?php echo $rsElemento["descripcion"]; ?></textarea>
    <input type="hidden" readonly id="id" name="id" value="<?php echo $rsElemento["id"]; ?>" />
    <button type="submit">Actualizar</button>
    <button type="reset">Recargar valores</button>
</form>
  </body>
</html>
