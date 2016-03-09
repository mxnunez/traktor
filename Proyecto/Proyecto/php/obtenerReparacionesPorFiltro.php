<?php
$conection = new mysqli("localhost", "root", "", "traktor");
$conection->query("SET NAMES UTF8");

$sql = "SELECT * FROM reparacion WHERE Fecha between '".$_GET['fecha1']."' AND '".$_GET['fecha2']."'";

$resultSet = $conection->query($sql);
$tabla = "<table class='table table-hover'><thead><tr><th colspan='5'>REPARACIONES FILTRADAS POR FECHA</th></tr><thead><tbody>";
while($fila = $resultSet->fetch_array(MYSQLI_ASSOC)){
	$tabla.="<tr>";
	foreach($fila as $valor)
		$tabla.="<td>".$valor."</td>";
		
	$tabla.="</tr>";
}
$tabla.="</tbody></table>";
$conection->close();
echo $tabla;
?>