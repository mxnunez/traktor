$("#formularioReparacion > input[type=button]").click(modificarReparacion);

function modificarReparacion(){
	var arrayValidar = validarFormularioReparacion("modificar");
	if(arrayValidar[0]){
		var sParametros = $("#formularioReparacion").serialize();
		$.post("php/modificarReparacion.php", sParametros, function(jqRespuesta, sEstatus, jqAjax){
			muestraAlerta(jqRespuesta);
			cargarFormularioModificarReparacion();
		}, "text");
	}
	else{
		muestraAlerta(arrayValidar[1]);
	}
}