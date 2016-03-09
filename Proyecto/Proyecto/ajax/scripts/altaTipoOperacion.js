$("#formularioTipoOperacion input[type=button]").click(altaTipoOperacion);
function altaTipoOperacion(){
	var arrayValidar = validarFormularioTipoOperacion("alta");
	if(arrayValidar[0]){
		var sParametros = $("#formularioTipoOperacion").serialize();
		$.post("php/altaTipoOperacion.php", sParametros, function(jqRespuesta, sEstatus, jqAjax){
			if(jqRespuesta=="Tipo de Operación Añadido con Éxito.")
				$("#formularioTipoOperacion")[0].reset();
			
			muestraAlerta(jqRespuesta);
		}, "text");
	}
	else{
		muestraAlerta(arrayValidar[1]);
	}
}