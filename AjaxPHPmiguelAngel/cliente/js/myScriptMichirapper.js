function pasaDatos(idCapa) {
  var miNombre = document.getElementById("nombre_" + idCapa).innerHTML;
  var miDescripcion = document.getElementById("descripcion_" + idCapa).innerHTML;
  var miCaracteristica = document.getElementById("caracteristica_" + idCapa).innerHTML;
  var miEdad = document.getElementById("edad_" + idCapa).innerHTML;

  document.getElementById('idInput').value = idCapa;
  document.getElementById('nombreInput').value = miNombre;
  document.getElementById('caracteristicaInput').value = miCaracteristica;
  document.getElementById('descripcionInput').value = miDescripcion;
  document.getElementById('edadInput').value = miEdad;

}
function pasaDatosInversa(idCapa) {

  var miId = document.getElementById('idInput').value;
  var miNombre = document.getElementById('nombreInput').value;
  var miDescripcion =document.getElementById('descripcionInput').value;
  var miCaracteristica = document.getElementById('caracteristicaInput').value;
  var miEdad = document.getElementById('edadInput').value;

  document.getElementById("id_" + idCapa).innerHTML = miId;
  document.getElementById("nombre_" + idCapa).innerHTML = miNombre;
  document.getElementById("descripcion_" + idCapa).innerHTML = miDescripcion;
  document.getElementById("caracteristica_" + idCapa).innerHTML = miCaracteristica;
  document.getElementById("edad_" + idCapa).innerHTML = miEdad;

}
function limpiarCampos() {

  document.getElementById('idInput').value = "";
  document.getElementById('nombreInput').value = "";
  document.getElementById('descripcionInput').value = "";
  document.getElementById('caracteristicaInput').value = "";
  document.getElementById('edadInput').value = "";

}

function cargaDatos() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      if (myObj.estado == "OK") {
        pintaDatos(myObj.numJugadores, myObj.jugadores);
      } else {
        pintaError();
      }
    } else {
      if (this.status == 404 && this.readyState == 4) {
        alert("No se encuentra la página. Revisa la url ");
      }
    }
  };
  xhttp.open("GET", "http://127.0.0.1:8000/miguel/AjaxPHPmiguelAngel/servidor/verTodosMichirapper.php", true);
  xhttp.send();

  //console.log('Fin carga datos');

}

/*
    Función que recorre el array de jugadores que hemos recibido del servidor
    y los va pintando por pantalla
*/

function pintaDatos(numero, arrayJugadores) {
  var contenedor = document.getElementById("contenedor");
  for (i = 0; i < numero; i++) {
    var miJugador = arrayJugadores[i];
    pintaJugador(miJugador, contenedor);
  }
}
function eliminarJugador(id, articulo) {
  articulo.parentNode.removeChild(articulo);
}

/*
  Función a la que se llama para insertar un jugador mediante AJAX
  (sin recargar la página)

  Se capturan los datos del formulario y se llama a la página php que hace
  la inserción.

  Si la respuesta es OK, pinta al jugador

*/

function envioAJAX() {

  var nombre = document.getElementById("nombreInput").value;
  var car = document.getElementById("caracteristicaInput").value;
  var des = document.getElementById("descripcionInput").value;
  var edad = document.getElementById("edadInput").value;
  var datosForm = "nombre=" + nombre + "&caracteristica=" + car + "&descripcion=" + des + "&edad=" + edad;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      console.log(this.responseText);
      var myObj = JSON.parse(this.responseText);
      // Si es estado de la respuesta es OK, la inserción se ha realizado correctamente
      if (myObj.estado == "OK") {
        alert(myObj.mensaje); // Mostramos mensaje
        var contenedor = document.getElementById("contenedor");
        // Creamos el objeto jugadorNuevo con los datos que tenemos del formulario
        // Y añadimos el id que nos viene en la respuesta
        var jugadorNuevo = {
          "id": myObj.idInsertado,
          "nombre": nombre,
          "caracteristica": car,
          "descripcion": des,
          "edad": edad
        }
        // Por último pintamos el jugador
        pintaJugador(jugadorNuevo, contenedor);
        limpiarCampos();
      } else {
        pintaError();
      }
    } else {
      if (this.status == 404 && this.readyState == 4) {
        alert("No se encuentra la página. Revisa la url ");
      }
    }
  };
  xhttp.open("POST", "http://127.0.0.1:8000/miguel/AjaxPHPmiguelAngel/servidor/insertarMichirapper.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(datosForm);
}
function borrarAjax(idCapa) {
  var articulo = "jugador_" + idCapa ;
  var articuloOBj = document.getElementById(articulo);
  console.log(articulo);
  var datosForm = "id=" + idCapa;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      console.log(this.responseText);
      var myObj = JSON.parse(this.responseText);
      // Si es estado de la respuesta es OK, la inserción se ha realizado correctamente
      if (myObj.estado == "OK") {
        alert("Eliminado correctamente"); // Mostramos mensaje
        } else {
        alert("Error en la eliminacion");
      }
      eliminarJugador(idCapa, articuloOBj);
    } else {
      if (this.status == 404 && this.readyState == 4) {
        alert("No se encuentra la página. Revisa la url ");
      }
    }
  };
  xhttp.open("POST", "http://127.0.0.1:8000/miguel/AjaxPHPmiguelAngel/servidor/eliminarMichirapper.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(datosForm);
}

function actualizarAJAX() {

  var id = document.getElementById('idInput').value;
  var nombre = document.getElementById("nombreInput").value;
  var car = document.getElementById("caracteristicaInput").value;
  var des = document.getElementById("descripcionInput").value;
  var edad = document.getElementById("edadInput").value;
  var articulo2 = "#jugador_" + id ;
  var datosForm = "nombre=" + nombre + "&caracteristica=" + car + "&descripcion=" + des + "&edad=" + edad + "&id=" + id;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      console.log(this.responseText);
      var myObj = JSON.parse(this.responseText);
      // Si es estado de la respuesta es OK, la inserción se ha realizado correctamente
      if (myObj.estado == "OK") {
        alert(myObj.mensaje); // Mostramos mensaje
        pasaDatosInversa(id);
        limpiarCampos()
      } else {
        pintaError();
      }
    } else {
      if (this.status == 404 && this.readyState == 4) {
        alert("No se encuentra la página. Revisa la url ");
      }
    }
  };
  xhttp.open("POST", "http://127.0.0.1:8000/miguel/AjaxPHPmiguelAngel/servidor/actualizarMichirapper.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(datosForm);
}
/*
   Función auxiliar para pintar en pantalla un jugador
   Se utiliza tanto en la carga inicial como al insertar
*/

function pintaJugador(miJugador, contenedor) {
  var x;
  var capaJugador = document.createElement("article");
  var botonBorrar = document.createElement("input")
  capaJugador.setAttribute("id", "jugador_" + miJugador.id);
  capaJugador.setAttribute("onclick", "pasaDatos(" + miJugador.id + ")");
  botonBorrar.setAttribute("type", "button");
  botonBorrar.setAttribute("value", "Borrar");
  botonBorrar.setAttribute("onclick", "borrarAjax(" + miJugador.id + ")");
  contenedor.appendChild(capaJugador);
  for (x in miJugador) {
    var propiedad = document.createElement("span");
    var textoPropiedad = document.createTextNode(x + ": ");
    propiedad.appendChild(textoPropiedad);
    var valor = document.createElement("span");
    valor.setAttribute("id", x + "_" + miJugador.id);
    valor.setAttribute("class", x );
    var texto = document.createTextNode(miJugador[x]);
    valor.appendChild(texto);
    var elemento = document.createElement("p");
    elemento.appendChild(propiedad);
    elemento.appendChild(valor);
    capaJugador.appendChild(elemento);
    capaJugador.appendChild(botonBorrar);
  }

}
