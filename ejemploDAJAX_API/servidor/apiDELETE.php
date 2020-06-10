<?php

/*
  Función que inserta un elemento en la BD
  Recibe los campos del formulario
  Devuelve el array del mensaje (incluyendo el id del nuevo insertado)
*/

function borrarUNO($camposInsercion, $conn){
    $miId=$camposInsercion['id'];
    // Creamos la query con los datos del formulario
    $miQuery  = "DELETE FROM elementos
                 WHERE id=$miId";
    $arrayMensaje = ejecutaQuery($miQuery, $conn,'Eliminación');
    return $arrayMensaje;
}

?>
