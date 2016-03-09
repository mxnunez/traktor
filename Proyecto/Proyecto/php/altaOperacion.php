<?php
$operacion = json_decode($_POST['operacion']);

$conection = new mysqli("localhost", "root", "", "traktor");
$conection->query("SET NAMES UTF8");
$resultado = "";

$idReparacion = $operacion->idReparacion;
$idTipo = $operacion->idTipoOperacion;
$unidades = $operacion->unidades;
	
$sql = "INSERT INTO operacion VALUES(null, ".$idReparacion.", ".$idTipo.", ".$unidades.")";
if($conection->query($sql))
	$resultado = "Operación añadida con éxito.";
else
	$resultado = "Error al insertar operación.";


$conection->close();
echo $resultado;
?>