<?php

require 'conexionBDbaloncestoMichirapper.php';
require 'funcionesAuxiliaresMichirapper.php';

//echo "<h1>ESTOY EN INSERTAR UNO</h1>";

// echo "<br/>";
// var_dump($_POST);
// echo "<br/>";

//Comprobar que los datos están correctos
if(datosCorrectos()){ // datosCorrectos
  $miNombre=$_POST['nombre'];
  $miDescripcion = $_POST['descripcion'];
  $miCaracteristica = $_POST['caracteristica'];
  $miEdad = $_POST['edad'];

  $miQuery  = "INSERT into elementos (nombre, descripcion, caracteristica, edad)";
  $miQuery .= " VALUES ('$miNombre','$miDescripcion','$miCaracteristica', $miEdad)";

  if ($conn->query($miQuery) === TRUE) {

      // Si se ha realizado correcamente la inserción nos quedamos con el útlimo id
      $idInsertado = $conn->insert_id;

      // En la respuesta además del estado y el mensaje, incluimos el id del último insertado
      $arrayMensaje = array(
        "estado" =>  "OK",
        "mensaje" => "Insertado correctamente",
        "idInsertado" => $idInsertado
      );

  }else{  // Error en la query

      $arrayMensaje = array(
        "estado" =>  "KO",
        "mensaje" => "Error al insertar"
      );
  }

}else{  // Me han enviado mal la información
  $arrayMensaje = array(
    "estado" =>  "KO",
    "mensaje" => "Envio de información incorrecto"
  );
}


$mensajeJSON = json_encode($arrayMensaje,JSON_PRETTY_PRINT);

//echo "<pre>";

echo $mensajeJSON;


 ?>
