<?php

/*
  Función para mostrar datos.
  Si la petición incluye formulario se trata de una búsqueda
  En otro caso se muestran todos los datos
  IMPORTANTE: lo único que cambia es la query
*/

function verDatos($camposBusqueda, $conn){

  $query = queryBusqueda($camposBusqueda);
  $result = $conn->query($query);

  if(isset($result) && $result){ // La query está bien

    $arrayElementos = array();

    if ($result->num_rows > 0) { // Se han encontrado resultados
      $contador = 0;
      while($row = $result->fetch_assoc()) {
         //   echo "<br />";
         //   var_dump($row);
         //   echo "<br />";

          /* Como $row es un array asociativo con los datos de un elemento
             lo metemos directamente en el array de elementos
             (hay que tener cuidado con las claves, si en el json no se tienen que
              llamar igual que los nombres de las columnas de la BD se pueden
              poner alias en la query)
            */
          array_push($arrayElementos, $row);
          $contador++;
      }

      /* Una vez tenemos completo el array de elementos creamos los campos
          del messaje final */
      $arrayMensaje = array(
        "estado" => "OK",
        "numJugadores" => $contador,
        "jugadores" => $arrayElementos
      );

    } else { // La tabla está vacía o no se han encontrado resultados
      $arrayMensaje = array(
        "estado" => "OK",
        "numJugadores" => 0,
      );
    }

  }else{  // Si hay algún problema con la query o con la conexión
    $arrayMensaje = array(
      "estado" => "KO",
      "mensaje" => "Error al acceder a la base de datos",
      "query" => $query,
      "error" => $conn->error
    );
    // Importante: los dos últimos campos solo se mandan si se está en debugeando
    // Nunca se envía esa información al usuario final
  }

  return $arrayMensaje;

}

/*
  Función que forma la query de búsqueda
  dependiendo de lo que le haya llegado del formulario
  (Si $camposBusqueda tiene algo incluimos where en la query)

  Se podría mejorar si sabemos los tipos de datos de las columnas
  (usar LIKE para campos de texto y = para numéricos)
*/

  function queryBusqueda($camposBusqueda){

    $query = "SELECT * FROM elementos";

    if(isset($camposBusqueda) && (count($camposBusqueda) > 0) ){
      $contador = 0;
      foreach ($camposBusqueda as $columna => $valor) {
        if($contador == 0){
          $query .= " WHERE $columna LIKE '%$valor%'";
        }else{
          $query .= " AND $columna LIKE '%$valor%'";
        }
        $contador++;
      }
    }

    return $query;
  }

 ?>
