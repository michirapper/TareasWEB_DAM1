<?php

/*
  Función que inserta un elemento en la BD
  Recibe los campos del formulario
  Devuelve el array del mensaje (incluyendo el id del nuevo insertado)
*/

function modificarUNO($camposInsercion, $conn){
    $miId=$camposInsercion['id'];
    $miNombre=$camposInsercion['nombre'];
    $miDescripcion = $camposInsercion['descripcion'];
    $miCaracteristica = $camposInsercion['caracteristica'];
    $miEdad = $camposInsercion['edad'];
    // Creamos la query con los datos del formulario
    $miQuery  = "UPDATE elementos
                 SET
                  nombre='$miNombre',
                  descripcion='$miDescripcion',
                  caracteristica='$miCaracteristica',
                  edad=$miEdad
                 WHERE id=$miId";
    $arrayMensaje = ejecutaQuery($miQuery, $conn,'Modificación');
    return $arrayMensaje;
}

?>
