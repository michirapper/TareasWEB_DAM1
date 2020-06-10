<?php

require 'conexionBDbaloncesto.php';


$arrayJugadores = array();

$query = "SELECT * FROM elementos";

$result = $conn->query($query);

if(isset($result) && $result){
  if ($result->num_rows > 0) {

    $contador = 0;

    while($row = $result->fetch_assoc()) {
       //   echo "<br />";
       //   var_dump($row);
       //   echo "<br />";

        /* Como $row es un array asociativo con los datos de un jugador
           lo metemos directamente en el array de jugadores
           (hay que tener cuidado con las claves, si en el json no se tienen que
            llamar igual que los nombres de las columnas de la BD se pueden
            poner alias en la query)
          */
        array_push($arrayJugadores, $row);

        $contador++;

    }

  } else { // La tabla está vacía
      echo "0 results";
  }

  $arrayMensaje = array(
    "estado" => "OK",
    "numJugadores" => $contador,
    "jugadores" => $arrayJugadores
  );

}else{  // Si hay algún problema con la query o con la conexión
  echo $conn->error;
}

// cierre de conexión con la BBDD
 $conn->close();


// Codificamos el array del mensaje para escribirlo
$mensajeFinalJSON = json_encode($arrayMensaje,JSON_PRETTY_PRINT);

//echo "<pre>";

echo $mensajeFinalJSON;

//echo "</pre>";

?>
