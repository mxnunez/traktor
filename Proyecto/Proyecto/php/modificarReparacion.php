<?php
$conection = new mysqli("localhost", "root", "", "traktor");
$conection->query("SET NAMES UTF8");
$resultado = "";
$sql = "UPDATE reparacion SET Matricula='".$_POST['selectMatricula']."', Fecha='".date("Y-m-d", strtotime($_POST['txtFecha']))."', Descripcion='".$_POST['txtDescripcion']."' WHERE ID='".$_POST['selectReparacion']."'";
if($conection->query($sql))
	$resultado="Reparación Actualizada con Éxito.";
else
	$resultado="Error al altualizar la reparación.";
$conection->close();
echo $resultado;
?>