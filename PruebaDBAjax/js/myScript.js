function pasarDatos(idCapa) {

  var miNombre = document.getElementById("nombre_" + idCapa).innerHTML;
  var miDescripcion = document.getElementById("descripcion_" + idCapa).innerHTML;
  var miCaracteristica = document.getElementById("caracteristica_" + idCapa).innerHTML;

  document.getElementById('idInput').value = idCapa;
  document.getElementById('nombreInput').value = miNombre;
  document.getElementById('caracteristicaInput').value = miCaracteristica;
  document.getElementById('descripcionInput').value = miDescripcion;
}
//function cargaDatos(){
//  var xhttp = new XMLHttpRequest();
//  xhttp.onreadystatechange = function() {

//  if (this.readyState == 4 && this.status == 200) {
//  alert(this.responseText);
//    var myObj = JSON.parse(this.responseText);


//document.getElementById("capaPrincipal").innerHTML = myObj.numJugadores;
//    }
//  };
//xhttp.open("GET", "http://127.0.0.1:8000/miguel/PruebaDBAjax/verTodos.php", true);
//xhttp.send();
//}



function cargaDatos() {

  console.log('Inicio carga datos');

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
        alert("No se encuentra la pagina.Revisa la url");
      }
    }
  };
  xhttp.open("GET", "http://127.0.0.1:8000/miguel/PruebaDBAjax/verTodos.php", true);
  xhttp.send();
}




function pintaDatos(numero, arrayJugadores) {
  let capaPrincipal = document.getElementById("capaPrincipal");
  for (i = 0; i < numero; i++) {
    var miJugador = arrayJugadores[i];
    let miCapa = document.createElement("div");
    miCapa.setAttribute("id", "capa_" + miJugador.id);

    capaPrincipal.appendChild(miCapa);

    for (var x in miJugador) {
      var elemento = document.createElement("p");
      elemento.setAttribute("id", x + "_" + miJugador.id);
      var textNombre = document.createTextNode(miJugador[x]);
      elemento.appendChild(texto);
      miCapa.appendChild(elemento);
    }
  }
}


function envioAjax() {
  console.log('Inicio carga datos');

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    //   var myObj = JSON.parse(this.responseText);
    //   if (myObj.estado == "OK") {
    //     pintaMensaje();
    //   } else {
    //     pintaError();
    //   }
    // } else {
    //   if (this.status == 404 && this.readyState == 4) {
    //     alert("No se encuentra la pagina.Revisa la url");
    //   }
     }
  };
  xhttp.open("POST", "http://127.0.0.1:8000/miguel/PruebaDBAjax/insertarUNO.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("nombre=prueba&caracteristica=AJAX&descripcion=una");
}
