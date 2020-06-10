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
  $miId = $_POST['id'];

  $miQuery  = "UPDATE elementos SET nombre = '$miNombre' , descripcion = '$miDescripcion', caracteristica = '$miCaracteristica', edad = '$miEdad' WHERE id = $miId";
  if ($conn->query($miQuery) === TRUE) {

      $arrayMensaje = array(
        "estado" =>  "OK",
        "mensaje" => "Actualizado correctamente",
        "IdModificado" => $miId,
        "Afectadas" => $conn->affected_rows
      );

  }else{  // Error en la query

      $arrayMensaje = array(
        "estado" =>  "KO",
        "mensaje" => "Error al actualizar"
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
