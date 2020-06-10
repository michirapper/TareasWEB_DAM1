<?php
require 'conexionBDbaloncestoMichirapper.php';
?>
<!DOCTYPE html>
<html>

<head>
  <script src="js/myScriptMichirapper.js"></script>
  <title>Resultado Busqueda</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>

<body>
  <?php
$terminobusqueda = $_GET['search'];
trim ($terminobusqueda);
$terminobusqueda = addslashes($terminobusqueda);
$consulta = "select * from elementos where nombre like '%". $terminobusqueda."%' || descripcion like '%". $terminobusqueda."%' || caracteristica like '%". $terminobusqueda."%' || edad like '%". $terminobusqueda."%'";
$resultado = mysqli_query($conn,$consulta);
$num_resultados = mysqli_num_rows($resultado);
echo "<p>Número de elementos encontrados: ".$num_resultados."</p>";
  for ($i=0; $i <$num_resultados; $i++)
  {
     $row = mysqli_fetch_array($resultado);
     echo "<article id='jugador_".$row['id']."' onclick='pasaDatos(".$row['id'].")'>";
     echo "<p>";
     echo "<span>id: </span>";
     echo "<span id='id_ ".$row['id']."' class='id'>".$row['id']."</span>";
     echo "</p>";
     echo "<p>";
     echo "<span>nombre: </span>";
     echo "<span id='nombre_".$row['id']."' class='nombre'>".$row['nombre']."</span>";
     echo "</p>";
     echo "<p>";
     echo "<span>descripcion: </span>";
     echo "<span id='descripcion_".$row['id']."' class='descripcion'>".$row['descripcion']."</span>";
     echo "</p>";
     echo "<p>";
     echo "<span>caracteristica: </span>";
     echo "<span id='caracteristica_".$row['id']."' class='caracteristica'>".$row['caracteristica']."</span>";
     echo "</p>";
     echo "<p>";
     echo "<span>edad: </span>";
     echo "<span id='edad_'".$row['id']." class='edad'>".$row['edad']."</span>";
     echo "</p>";
     echo "<input type='button' value='Borrar' onclick='borrarAjax(".$row['id'].")'>";
     echo "</article>";


  }
?>
  </section>
</body>
</html>
