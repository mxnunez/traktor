<?php
$conection = new mysqli("localhost", "root", "", "traktor");
$conection->query("SET NAMES UTF8");
$dni = $_POST['txtDni'];
$nombre = $_POST['txtNombre'];
$apellidos = $_POST['txtApellidos'];
$telefono = $_POST['txtTelefono'];
$provincia = $_POST['provincia'];
$resultado = "";

$sql = "INSERT INTO cliente VALUES('".$dni."', '".$nombre."', '".$apellidos."', ".$telefono.", ".$provincia.")";
if($conection->query($sql))
	$resultado = "Cliente Añadido con Éxito.";
else
	$resultado = "Este Cliente ya fue añadido.";
$conection->close();
echo $resultado;
?>