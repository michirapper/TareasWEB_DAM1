<html>
<head>
  <title>Pruebas Cookies</title>
</head>
<body>

<?php
session_start();
if(isset($_SESSION["contador"])) {
  	$contador = $_SESSION["contador"] + 1;
    echo "Hola de nuevo!!!<br/>";
    echo "Es la ".  $contador . " que vienes";
    $_SESSION["contador"] = $contador;
} else {
  $contador=0;
    echo "Es la ".  $contador . " que vienes";
    $_SESSION["contador"] = $contador;
}
if(isset($_GET['reset'])){
  $contador = 1;
  $_SESSION["contador"] = $contador;
}
if(isset($_GET['destroy'])){
  // remove all session variables
  session_unset();

  // destroy the session
  session_destroy();
}


?>

<br/>
<a href="<?php echo $_SERVER['PHP_SELF']; ?>">Recarga la página</a><br/>

<a href="<?php echo $_SERVER['PHP_SELF']."?reset=1"; ?>">Reiniciar contador</a>
<a href="<?php echo $_SERVER['PHP_SELF']."?destroy=1"; ?>">destruir sesion contador</a>

</body>
</html>
