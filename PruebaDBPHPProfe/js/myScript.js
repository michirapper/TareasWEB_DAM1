function pasaDatos(idCapa) {

  //alert(idCapa);

  var miNombre = document.getElementById("nombre_" + idCapa).innerHTML;
  var miDescripcion = document.getElementById("descripcion_" + idCapa).innerHTML;
  var miCaracteristica = document.getElementById("caracteristica_" + idCapa).innerHTML;

  document.getElementById('idInput').value = idCapa;
  document.getElementById('nombreInput').value = miNombre;
  document.getElementById('caracteristicaInput').value = miCaracteristica;
  document.getElementById('descripcionInput').value = miDescripcion;
}