<?php
$conection = new mysqli("localhost", "root", "", "traktor");
$conection->query("SET NAMES UTF8");
$resultado = "";
$idOperacion = $_POST['id'];

$sql = "DELETE FROM operacion WHERE ID=".$idOperacion."";
if($conection->query($sql))
	$resultado = "Operación eliminada con éxito";
else
	$resultado = "Error al eliminar la operación.";

$conection->close();
echo $resultado;
?>