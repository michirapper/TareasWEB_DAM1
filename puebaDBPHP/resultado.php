<?php
     require 'conexionBDbaloncesto.php';
?>
<!DOCTYPE html>
<html>
<head>
<title>Resultado busqueda</title>
</head>
  <?php
$terminobusqueda = $_GET['busqueda'];
trim ($terminobusqueda);
$terminobusqueda = addslashes($terminobusqueda);
$consulta = "select * from elementos where nombre like '%". $terminobusqueda."%' || descripcion like '%". $terminobusqueda."%' || caracteristica like '%". $terminobusqueda."%'";
$resultado = mysqli_query($conn,$consulta);
$num_resultados = mysqli_num_rows($resultado);
echo "<p>Número de elementos encontrados: ".$num_resultados."</p>";
  for ($i=0; $i <$num_resultados; $i++)
  {
     $row = mysqli_fetch_array($resultado);
     echo $row['nombre'];
     echo "&nbsp";
     echo $row['descripcion'];
     echo "&nbsp";
     echo $row['caracteristica'];
     echo "&nbsp";
     echo "<a href='editar.php?id='".$row['id']."><i class='fas fa-edit'></i></a>";
     echo "<a href='eliminar.php?id='".$row['id']."><i class='fas fa-minus-circle'></i></a>";
     echo "<br>";
  }
?>
  </section>
</body>
</html>
