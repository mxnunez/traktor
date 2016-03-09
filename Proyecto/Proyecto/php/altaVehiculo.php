<?php
$conection = new mysqli("localhost", "root", "", "traktor");
$conection->query("SET NAMES UTF8");
$resultado="";
$matricula = $_POST['txtMatricula'];
$cliente = $_POST['selectCliente'];
$marca = $_POST['txtMarca'];
$modelo = $_POST['txtModelo'];
$combustible = $_POST['txtCombustible'];

$sql = "INSERT INTO vehiculo VALUES('".$matricula."', '".$cliente."', '".$marca."', '".$modelo."', '".$combustible."')";
if($conection->query($sql))
	$resultado = "Vehículo Añadido con Éxito.";
else
	$resultado = "Este Vehículo ya fue añadido.";

$conection->close();
echo $resultado;
?>