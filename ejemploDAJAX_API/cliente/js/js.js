function cargaDatos() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      console.log(myObj);
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
  xhttp.open("GET", "http://localhost:8000/miguel/ejemploDAJAX_API/servidor/puertaEntrada.php", true);
  xhttp.send();
}
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
function pintaJugador(miJugador, contenedor) {
  var x;
  var capaJugador = document.createElement("div");
  var carta = document.createElement("div");
  var cartaBody = document.createElement("div");
  var cartaTitulo = document.createElement("h4");
  var cartaSubtitulo = document.createElement("h6");
  var cartaTexto = document.createElement("p");
  var botonBorrar = document.createElement("input")
  var cartaEdad = document.createElement("span")
  capaJugador.setAttribute("class", "col-12 col-lg-6");
  capaJugador.setAttribute("id", "jugador_" + miJugador.id);
  carta.setAttribute("class", "card");
  cartaBody.setAttribute("class", "card-body");
  cartaTitulo.setAttribute("class", "card-title");
  cartaTitulo.setAttribute("id", "nombre_" + miJugador.id);
  cartaSubtitulo.setAttribute("class", "card-subtitle mb-2 text-muted");
  cartaSubtitulo.setAttribute("id", "caracteristica_" + miJugador.id);
  cartaTexto.setAttribute("class", "card-text");
  cartaTexto.setAttribute("id", "descripcion_" + miJugador.id);
  cartaEdad.setAttribute("id", "edad_" + miJugador.id);
  var TituloCarta = document.createTextNode(miJugador.nombre);
  var EdadCarta = document.createTextNode(miJugador.edad);
  var SubtituloCarta = document.createTextNode(miJugador.caracteristica + " " );
  var TextoCarta = document.createTextNode(miJugador.descripcion);
  cartaBody.setAttribute("onclick", "pasaDatos(" + miJugador.id + ")");
  botonBorrar.setAttribute("type", "button");
  botonBorrar.setAttribute("value", "Borrar");
  botonBorrar.setAttribute("class", "btn btn-primary");
  botonBorrar.setAttribute("onclick", "borrarAjax(" + miJugador.id + ")");
  contenedor.appendChild(capaJugador);
  capaJugador.appendChild(carta);
  carta.appendChild(cartaBody);
  cartaBody.appendChild(cartaTitulo);
  cartaBody.appendChild(cartaSubtitulo);
  cartaBody.appendChild(cartaEdad);
  cartaBody.appendChild(cartaTexto);
  cartaTitulo.appendChild(TituloCarta);
  cartaSubtitulo.appendChild(SubtituloCarta);
  cartaEdad.appendChild(EdadCarta);
  cartaTexto.appendChild(TextoCarta);
  carta.appendChild(botonBorrar);
}
function borrarAjax(idCapa) {
  var articulo = "jugador_" + idCapa ;
  var articuloOBj = document.getElementById(articulo);
  console.log(articulo);
  var datosForm = "id=" + idCapa;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      var myObj = JSON.parse(this.responseText);
      if (myObj.estado == "OK") {
        //alert("Eliminado correctamente");
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
  xhttp.open("DELETE", "http://localhost:8000/miguel/ejemploDAJAX_API/servidor/puertaEntrada.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(datosForm);
}
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
      console.log(this.responseText);
      var myObj = JSON.parse(this.responseText);
      if (myObj.estado == "OK") {
        //alert(myObj.mensaje);
        pasaDatosInversa(id);
        limpiarCampos();
      } else {
        alert("Error al actualizar la información");
      }
    } else {
      if (this.status == 404 && this.readyState == 4) {
        alert("No se encuentra la página. Revisa la url ");
      }
    }
  };
  xhttp.open("PUT", "http://localhost:8000/miguel/ejemplosBDAjax_API/servidor/puertaEntrada.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(datosForm);
}
