$("#formularioTipoOperacion input[type=button]").click(modificarTipoOperacion);

function modificarTipoOperacion(){
	var arrayValidar = validarFormularioTipoOperacion("modificar");
	if(arrayValidar[0]){
		var sParametros = $("#formularioTipoOperacion").serialize();
		$.post("php/modificarTipoOperacion.php", sParametros, function(jqRespuesta, sEstatus, jqAjax){
			muestraAlerta(jqRespuesta);
			cargarFormularioModificarTipoOperacion();
		}, "text");
	}
	else{
		muestraAlerta(arrayValidar[1]);
	}
}