<?php
$id = $_POST['txtId'];
$matricula = $_POST['selectMatricula'];
$fecha = date("Y-m-d", strtotime($_POST['txtFecha']));
$descripcion = $_POST['txtDescripcion'];

$conection = new mysqli("localhost", "root", "", "traktor");
$conection->query("SET NAMES UTF8");
$resultado="";

$sql = "INSERT INTO reparacion VALUES(".$id.", '".$matricula."', '".$fecha."', '".$descripcion."')";
if($conection->query($sql))
	$resultado="Reparación añadida con éxito.";
else
	$resultado="Esta reparación ya fue añadida.";

$conection->close();
echo $resultado;
?>