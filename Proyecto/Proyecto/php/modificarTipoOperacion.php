<?php
$conection = new mysqli("localhost", "root", "", "traktor");
$conection->query("SET NAMES UTF8");
$resultado = "";
$sql = "UPDATE tipo_operacion SET Nombre='".$_POST['txtNombre']."', Importe='".$_POST['txtImporte']."' WHERE ID='".$_POST['selectTipoOperacion']."'";
if($conection->query($sql))
	$resultado="Tipo de Operación Actualizado con Éxito.";
else
	$resultado="Error al altualizar el tipo de operación.";
$conection->close();
echo $resultado;
?>