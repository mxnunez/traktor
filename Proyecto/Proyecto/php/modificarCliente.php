<?php
$conection = new mysqli("localhost", "root", "", "traktor");
$conection->query("SET NAMES UTF8");
$cliente = json_decode($_POST['cliente']);
$resultado = "";

$dni = $cliente->dni;
$nombre = $cliente->nombre;
$apellidos = $cliente->apellidos;
$telefono = $cliente->telefono;
$provincia = $cliente->provincia;

$sql = "UPDATE cliente SET Nombre='".$nombre."', Apellidos='".$apellidos."', Telefono=".$telefono.", Provincia=".$provincia." WHERE DNI='".$dni."'";
if($conection->query($sql))
	$resultado="Cliente actualizado con éxito.";
else
	$resultado="Error en la actualización.";

$conection->close();
echo $resultado;
?>