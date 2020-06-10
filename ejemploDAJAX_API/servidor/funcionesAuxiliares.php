<?php

/*
  Función que comprueba si los datos que recibimos son correctos
  dependiendo de la petición (GET, POST, PUT o DELETE)
*/

function datosCorrectos($metodo, $_DATA){
  $todoOK = true;

  switch ($metodo) {
    case 'GET':

      break;
    case 'POST':
    if(!isset($_DATA['descripcion']) ||
       !isset($_DATA['caracteristica']) || !isset($_DATA['nombre']) ||
       !isset($_DATA['edad'])  ){
        $todoOK = false;
    }
      break;
    case 'PUT':
      if(count($_DATA)<>5){
        $todoOK = false;
      }else{
        if(!isset($_DATA['id']) || !isset($_DATA['descripcion']) ||
           !isset($_DATA['caracteristica']) || !isset($_DATA['nombre']) ||
           !isset($_DATA['edad'])  ){
            $todoOK = false;
        }
      }
      break;
    case 'DELETE':
      if(count($_DATA)<>1){
        $todoOK = false;
      }else{
        if(!isset($_DATA['id'])){
            $todoOK = false;
        }
      }
      break;
    default:
      $todoOK = false;
      break;
  }

  return $todoOK;
}

/*
  Función que ejecuta la query y forma el mensaje JSON que se va a devolver
  Sirve para modificación y borrado que son iguales
*/

function ejecutaQuery($miQuery, $conn, $accion){
  // echo "<br />";
  // echo $miQuery;
  // echo "<br />";

  if ($conn->query($miQuery) === TRUE) {

      $afectados = $conn->affected_rows;

      if($afectados > 0){
        $mensaje = "$accion realizada correctamente";
      }else{
        $mensaje = "$accion no afecta a los datos";
      }

      $arrayMensaje = array(
        "estado" =>  "OK",
        "mensaje" => $mensaje,
        "afectados" => $afectados
      );
      if($accion == 'Alta') {
        /*
          Si es una inserción nos quedamos con el útlimo id y
          lo incluimos en la respuesta además del estado y el mensaje
        */
        $idInsertado = $conn->insert_id;
        $arrayMensaje['idInsertado'] = $idInsertado;
      }
  }else{  // Error en la query
      $arrayMensaje = array(
        "estado" =>  "KO",
        "mensaje" => "Se ha producido un error al actualizar la información",
        "query" => $miQuery,
        "error" => $conn->error
      );
      // Importante: los dos últimos campos solo se mandan si se está debugeando
      // Nunca se envía esa información al usuario final
      // Lo utizamos para poder probar desde postman y ver el error que se produce
  }
  return $arrayMensaje;
}
?>
