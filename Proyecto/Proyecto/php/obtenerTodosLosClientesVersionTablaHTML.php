<?php
$conection = new mysqli("localhost", "root", "", "traktor");
$conection->query("SET NAMES UTF8");
$resultSet = $conection->query("SELECT * FROM cliente");
$tabla = "<table class='table table-hover'><thead><tr><th colspan='5'>CLIENTES</th></tr><thead><tbody>";
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