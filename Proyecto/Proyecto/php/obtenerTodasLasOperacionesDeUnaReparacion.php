<?php
$reparacion = $_GET['reparacion'];
$conection = new mysqli("localhost", "root", "", "traktor");
$conection->query("SET NAMES UTF8");
$resultSet = $conection->query("SELECT * FROM operacion WHERE ID_Reparacion=".$reparacion."");
$datos = array();
while($fila = $resultSet->fetch_array(MYSQLI_ASSOC)){
	$datos[] = $fila;
}
$conection->close();
echo json_encode($datos);
?>