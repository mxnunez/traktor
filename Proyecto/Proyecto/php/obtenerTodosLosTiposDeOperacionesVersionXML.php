<?php
$conection = new mysqli("localhost", "root", "", "traktor");
$conection->query("SET NAMES UTF8");
$resultSet = $conection->query("SELECT * FROM tipo_operacion");
$xml =  '<datos>';
while($fila = $resultSet->fetch_array(MYSQLI_ASSOC)){
	$xml.="<tipo_operacion>";
	$xml.="<id>".$fila['ID']."</id>";
	$xml.="<nombre>".$fila['Nombre']."</nombre>";
	$xml.="<importe>".$fila['Importe']."</importe>";
	$xml.="</tipo_operacion>";
}
$xml.="</datos>";
$conection->close();
echo $xml;
?>