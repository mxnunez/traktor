$("#formularioVehiculo input[type=button]").click(modificarVehiculo);

function modificarVehiculo(){
	var arrayValidar = validarFormularioVehiculo("modificar");
	if(arrayValidar[0]){
		var sParametros = $("#formularioVehiculo").serialize();
		$.post("php/modificarVehiculo.php", sParametros, function(jqRespuesta, sEstatus, jqAjax){
			muestraAlerta(jqRespuesta);
			cargarFormularioModificarVehiculo();
		}, "text");
	}
	else{
		muestraAlerta(arrayValidar[1]);
	}
}