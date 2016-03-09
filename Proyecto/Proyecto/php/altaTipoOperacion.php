<?php
$conection = new mysqli("localhost", "root", "", "traktor");
$conection->query("SET NAMES UTF8");
$id = $_POST['txtId'];
$nombre = $_POST['txtNombre'];
$importe = $_POST['txtImporte'];

$sql = "INSERT INTO tipo_operacion VALUES(".$id.", '".$nombre."', ".$importe.")";
if($conection->query($sql))
	$resultado = "Tipo de Operación Añadido con Éxito.";
else
	$resultado = "Este Tipo de Operación ya fue añadido.";
$conection->close();
echo $resultado;
?>