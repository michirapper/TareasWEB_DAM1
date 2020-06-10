<?php
require 'conexionBDbaloncesto.php';
$arrayPadre = array();



$query = "SELECT id as id,
                  nombre as nom
                  caracteristica as car
                  descripcion as des
                  FROM elementos";
$result = $conn->query($query);

if(isset($result) && $result){
  if ($result->num_rows > 0) {
    $contador = 0;
    while ($row = $result->fetch_assoc()) {

      //array_push($arrayPadre, $row);
      $contador++;
    }
  }else {
    echo "0 results";
  }

  $arrayAbuelo = array(
    "estado" => "OK",
    "numJugadores" => $contador,
    "jugadores" => $arrayPadre
  );
}else {
  echo $conn->error;
}
$conn->close();

$arrJSON = json_encode($arrayAbuelo, JSON_PRETTY_PRINT);
echo $arrJSON;
?>
