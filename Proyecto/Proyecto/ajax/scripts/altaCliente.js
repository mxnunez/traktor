$("#formularioCliente input[type=button]").click(altaCliente);

function altaCliente(){
	var arrayValidar = validarFormularioCliente("alta");
	if(arrayValidar[0]){
		var sParametros = $("#formularioCliente").serialize();
		$.post("php/altaCliente.php", sParametros, function(jqRespuesta, sEstatus, jqAjax){
			if(jqRespuesta=="Cliente Añadido con Éxito."){
				$("#formularioCliente")[0].reset();
			}
				muestraAlerta(jqRespuesta);
		}, "text");
	}
	else{
		muestraAlerta(arrayValidar[1]);
	}
}