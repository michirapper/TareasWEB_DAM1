<?php

/*
  Función que inserta un elemento en la BD
  Recibe los campos del formulario
  Devuelve el array del mensaje (incluyendo el id del nuevo insertado)
*/

function insertarUNO($camposInsercion, $conn){
    $miNombre=$camposInsercion['nombre'];
    $miDescripcion = $camposInsercion['descripcion'];
    $miCaracteristica = $camposInsercion['caracteristica'];
    $miEdad = $camposInsercion['edad'];
    // Creamos la query con los datos del formulario
    $miQuery  = "INSERT into elementos (nombre, descripcion, caracteristica, edad)";
    $miQuery .= " VALUES ('$miNombre','$miDescripcion','$miCaracteristica', '$miEdad')";
    $arrayMensaje = ejecutaQuery($miQuery, $conn,'Alta');
    return $arrayMensaje;
}

?>
