<?php

require 'funcionesAuxiliares.php';

/*
  $_SERVER contiene datos del servidor
  c
  Entre ellos podemos obtener el método http con el que se
  ha hecho la petición
*/

$method = $_SERVER['REQUEST_METHOD'];

/*
 Guarda en $_DATA lo recibido en el formulario
 independientemente de la petición http (GET, PUT, POST, DELETE)
 y la codificación (x-www-urlencode, raw)
*/

$recibido = file_get_contents('php://input');

// echo "<br>";
// echo "<pre>";
// echo var_dump($recibido);
// echo "</pre>";
// echo "<br>";

$primerCaracter = substr ($recibido,0,1);
// echo "<br>";
// echo $primerCaracter;
// echo "<br>";

if($primerCaracter == '{'){ // Me han enviado los datos con un json
  $_DATA = json_decode($recibido, true);
  // echo "<br>";
  // echo "Nos han enviado un json";
  // echo "<br>";
}else{
  // echo "<br>";
  // echo "Nos han enviado un formulario 'normal'";
  // echo "<br>";
  parse_str( $recibido, $_DATA);

}



// echo "<br>";
// echo "<pre>";
// echo var_dump($_DATA);
// echo "</pre>";
// echo "</br>";
// die();

/*
  Antes de hacer nada comprobamos que los datos que nos han
  enviado en el formulario son correctos
  (la función está en el archivo funcionesAuxiliares)
  Si los datos no son correctos simplemente se crea el mensaje con el error
*/
if(datosCorrectos($method, $_DATA)){
  require 'conexionBDbaloncesto.php'; // Establecemos conexión con la BD
  /*
    Switch para llamar a una función u otra
    en función del método HTTP de la petición

    En cada caso se hace el include correspondiente
    (se pueden tener todas las funciones en un único archivo
    pero lo he separado para que el código esté más organizado)

    GET => tanto para ver todos como para búsqueda
           si no se envía nada en el formulario se muestran todos
           si se envía algo cambiamos la query e incluimos WHERE
    POST => para insertar
    PUT => para modificar
    DELETE => para borrar
  */
  switch ($method) {
    case 'GET':
      require 'apiGET.php';
      $arrayMensaje = verDatos($_DATA, $conn);
      break;
    case 'POST':
      require 'apiPOST.php';
      $arrayMensaje = insertarUNO($_DATA, $conn);
      break;
    case 'PUT':
      require 'apiPUT.php';
      $arrayMensaje = modificarUNO($_DATA, $conn);
      break;
    case 'DELETE':
      require 'apiDELETE.php';
      $arrayMensaje = borrarUNO($_DATA, $conn);
      break;
    default:
      $arrayMensaje = array(
        "estado" =>  "KO",
        "mensaje" => "Método $method no implementado"
      );
      break;
  }

  $conn->close(); // cierre de conexión con la BBDD

}else{  // Los datos que nos han enviado no son correctos o están incompletos
  $arrayMensaje = array(
    "estado" =>  "KO",
    "mensaje" => "No se puede completar la acción con los datos recibidos"
  );
}

// Codificamos el array del mensaje para escribirlo
$mensajeFinalJSON = json_encode($arrayMensaje,JSON_PRETTY_PRINT);

//echo "<pre>";
echo $mensajeFinalJSON;
//echo "</pre>";

?>
