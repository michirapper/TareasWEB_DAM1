<?php

require 'conexionBDbaloncestoMichirapper.php';
require 'funcionesAuxiliaresMichirapper.php';

if(datosCorrectos()){ // datosCorrectos
  $miId=$_POST['id'];

//  $miQuery  = "DELETE FROM elementos WHERE id=".$miId."";
  $miQuery  = "DELETE FROM elementos WHERE id=".$miId."";

  if ($conn->query($miQuery) === TRUE) {

      $arrayMensaje = array(
        "estado" =>  "OK",
        "mensaje" => "Eliminado correctamente",
        "IdBorrado" => $miId,
        "Afectadas" => $conn->affected_rows
      );

  }else{  // Error en la query

      $arrayMensaje = array(
        "estado" =>  "KO",
        "mensaje" => "Error al eliminar"
      );
  }

}else{  // Me han enviado mal la información
  $arrayMensaje = array(
    "estado" =>  "KO",
    "mensaje" => "Eliminacion de información incorrecto"
  );
}


$mensajeJSON = json_encode($arrayMensaje,JSON_PRETTY_PRINT);

//echo "<pre>";

echo $mensajeJSON;


 ?>
