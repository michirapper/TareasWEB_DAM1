<?php

require 'conexionBDbaloncesto.php';
$query = "SELECT * FROM elementos";
$queElemento = mysqli_query($conn, $query);
?>

<html>
<head>
  <title>Ejemplo de inserción</title>
</head>
<body>
  <form method="GET" action="resultado.php" accept-charset="UTF-8" class="navbar-form" id="searchbar">
    <div class="input-group" id="navbar-search">
      <input name="busqueda" type="search" required>
        <span >
          <button class="btn btn-primary" type="submit"><i class="fa fa-search"></i> </button>
          </span>
      </div>
</form>
  <form action="ejemploInsercion.php" method="post">
    <label>Nombre: </label><input type="text" name="nombre" id="nombreInput"  /><br />
    <label>Descripcion: </label><input type="text" name="descripcion" id="caracteristicaInput"  /><br />
    <label>Caracteristica: </label><input type="text" name="caracteristica" id="descripcionInput" /><br />

    <br>
    <input type="submit" name="Insertar" value="Insertar" />
    <input type="submit" name="Buscar" value="Buscar" />
    <input type="submit" name="Actualizar" value="Actualizar" />
  </form> <br />
  <?php while ($ident = mysqli_fetch_assoc($queElemento)) { ?>
       <div class="elemento">
                    <?php  echo "<input type='hidden' readonly id='capa_".$ident['id']."' name='id' value='".$ident['id']."' />"?>
                    <?php  echo "<span id='nombre_".$ident['id']."'>".$ident['nombre']."</span>";?>|
                    <?php  echo "<span id='descripcion_".$ident['id']."'>".$ident['descripcion']."</span>";?>|
                    <?php  echo "<span id='caracteristica_".$ident['id']."'>".$ident['caracteristica']."</span>";?>|

                    <!--<a href="editar.php?id=<?php echo $ident['id'];?>"><i class="fas fa-edit"></i></a>-->
                    <a href="#" onclick="pasarDatos(<?php echo $ident['id'];?>)"><i class="fas fa-edit"></i></a>
                    <a href="eliminar.php?id=<?php echo $ident['id'];?>"><i class="fas fa-minus-circle"></i></a>
       </div>
       <?php } ?>
  <?php
    if(isset($_POST['Insertar']) && isset($_POST['nombre']) && isset($_POST['descripcion']) ){
      $miNombre=$_POST['nombre'];
      $miDescripcion = $_POST['descripcion'];
      $miCaracteristica = $_POST['caracteristica'];
      $miQuery  = "INSERT into elementos (nombre, descripcion, caracteristica)";
      $miQuery .= " VALUES ('$miNombre','$miDescripcion','$miCaracteristica')";

      echo "<br>".$miQuery;


      if ($conn->query($miQuery) === TRUE) {
        echo "<br>Nuevo registro realizado correctamente";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }
      $conn->close(); // cierre de conexión con la BBDD
    }elseif (isset($_POST['Buscar']) && isset($_POST['nombre']) && isset($_POST['descripcion'])) {
      $miNombre=$_POST['nombre'];
      $miDescripcion = $_POST['descripcion'];
      $miCaracteristica = $_POST['caracteristica'];
      trim ($miNombre);
      trim ($miDescripcion);
      trim ($miCaracteristica);
      $miNombre = addslashes($miNombre);
      $miDescripcion = addslashes($miDescripcion);
      $miCaracteristica = addslashes($miCaracteristica);

      $consulta = "select * from elementos where nombre like '%". $miNombre."%' && descripcion like '%". $miDescripcion."%' && caracteristica like '%". $miCaracteristica."%'";
      echo $consulta;
      $resultado = mysqli_query($conn,$consulta);
      $num_resultados = mysqli_num_rows($resultado);
      echo "<hr>";
      echo "<p>Número de elementos encontrados: ".$num_resultados."</p>";
        for ($i=0; $i <$num_resultados; $i++)
        {
           $row = mysqli_fetch_array($resultado);

           echo "<input type='hidden' readonly id='capa_".$row['id']."' name='id' value='".$row['id']."' />";
           echo "&nbsp";
           echo "<span id='nombre_".$row['id']."'>".$row['nombre']."</span>";
           echo "&nbsp";
           echo "<span id='descripcion_".$row['id']."'>".$row['descripcion']."</span>";
           echo "&nbsp";
           echo "<span id='caracteristica_".$row['id']."'>".$row['caracteristica']."</span>";
           echo "&nbsp";
           echo "<a href='#' onclick='pasarDatos(".$row['id'].")'><i class='fas fa-edit'></i></a>";
           echo "<a href='eliminar.php?id='".$row['id']."><i class='fas fa-minus-circle'></i></a>";
           echo "<br>";
        }
      $conn->close(); // cierre de conexión con la BBDD
    }

   ?>
<br />
<script src="./myScript.js" charset="utf-8"></script>
<script src="https://kit.fontawesome.com/c499afeb6a.js" crossorigin="anonymous"></script>
</body>
</html>
