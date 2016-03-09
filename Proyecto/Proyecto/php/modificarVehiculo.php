<?php
$conection = new mysqli("localhost", "root", "", "traktor");
$conection->query("SET NAMES UTF8");
$resultado = "";
$sql = "UPDATE vehiculo SET DNI_Cliente='".$_POST['selectCliente']."', Marca='".$_POST['txtMarca']."', Modelo='".$_POST['txtModelo']."', Combustible='".$_POST['txtCombustible']."' WHERE Matricula='".$_POST['selectVehiculo']."'";
if($conection->query($sql))
	$resultado="Vehículo Actualizado con Éxito.";
else
	$resultado="Error al altualizar el vehículo.";
$conection->close();
echo $resultado;
?>