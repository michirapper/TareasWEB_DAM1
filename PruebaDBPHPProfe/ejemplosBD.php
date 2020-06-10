<?php

require 'conexionBDbaloncesto.php';

?>

<html>
<head>
  <title>Ejemplo de conexión con una base de datos</title>
  <link rel="stylesheet" type="text/css" href="estilos.css">
  <script src="js/myScript.js"></script>
</head>
<body>

  <main>
      <h1>EJEMPLO DE CONEXIÓN CON BASE DE DATOS</h1>

      <section id='right'>

        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">

          <label>Id: </label><input type="text" id="idInput" name="id"   /><br />
          <label>Nombre: </label><input type="text" id="nombreInput" name="nombre"   /><br />
          <label>Descripcion: </label><input type="text" id="descripcionInput" name="descripcion"  /><br />
          <label>Caracteristica: </label><input type="text" id="caracteristicaInput" name="caracteristica"   /><br />
          <input type="submit" name="boton" value="Insertar"  />
          <input type="submit" name="boton" value="Modificar"  /><br />
        </form>
        <br />
        <?php

          // echo "<p class='mensajeDebug'>El formulario contiene lo siguiente (DEBUG): </p>";
          // echo "<pre class='mensajeDebug'>";
          // var_dump($_POST);
          // echo "</pre>";

          if(isset($_POST['boton'])){
            // Hemos recibido el formulario y hacemos la acción requerida

            $miId=$_POST['id'];
            $miNombre=$_POST['nombre'];
            $miDescripcion = $_POST['descripcion'];
            $miCaracteristica = $_POST['caracteristica'];

            $botonPulsado = $_POST['boton'];
            switch ($botonPulsado) {
              case 'Modificar':
                  $miQuery = "UPDATE elementos SET ";
                  $miQuery .= " nombre = '$miNombre' , ";
                  $miQuery .= " descripcion = '$miDescripcion' , ";
                  $miQuery .= " caracteristica = '$miCaracteristica' ";
                  $miQuery .= " WHERE id = '$miId'";
                break;
              case 'Insertar':
                  $miQuery  = "INSERT into elementos (nombre, descripcion, caracteristica)";
                  $miQuery .= " VALUES ('$miNombre','$miDescripcion','$miCaracteristica')";
                  break;
              default:
                  echo "ERROR. LA ACCION SOLICITADA NO ESTA DISPONIBLE";
                break;
            }

            if ($conn->query($miQuery) === TRUE) {


              // echo "<p class='mensajeDebug'>Query realizada (DEBUG): $miQuery </p>";

              echo "<p class='mensajeDebug'>Acción realizada correctamente</p>";

              echo "<p class='mensajeDebug'>Filas afectadas: $conn->affected_rows</p>";
            } else {
              echo "<p class='mensajeDebug'>Error en SQL!!!<br />";
              echo " Query realizada: <br /> " . $miQuery;
              echo "<br> Error: " . $conn->error;
            }

          }







         ?>
        <br />

      </section>

      <!-- Por estilos lo pongo a la izquierda pero en código
           está después de recibir el formulario para poder
           mostrar los cambios que se hayan realizado -->

      <section id='left'>
        <h2> DATOS JUGADORES </h2>

        <?php

        $query = "SELECT * FROM elementos";

        $result = $conn->query($query);
        if(isset($result) && $result){
          if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
              $miId = $row['id'];
              echo "<article id='capa_$miId' onclick='pasaDatos($miId)'>";
              foreach ($row as $nombreColumna => $valor) {
                echo "<p>
                  <b>$nombreColumna: </b>
                  <span id='".$nombreColumna."_".$miId."'> $valor </span>
                </p>".PHP_EOL;
              }
              echo "</article>".PHP_EOL;
            }
          } else {
          echo "0 results";
          }
        }else{
        echo $conn->error;
        }


         ?>


      </section>



  </main>

<?php
// cierre de conexión con la BBDD
 $conn->close();

 ?>

</body>
</html>
