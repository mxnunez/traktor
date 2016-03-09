$("#formularioReparacion input[class='btn btn-info']").click(altaReparacion);
function altaReparacion(){
	//validaciones
	var arrayValidar = validarFormularioReparacion("alta");
	if(arrayValidar[0]){
		var sParametros = $("#formularioReparacion").serialize();
		$.post("php/altaReparacion.php", sParametros, function(jqRespuesta, sEstatus, jqAjax){

			if(jqRespuesta=="Reparación añadida con éxito."){
				//alta operaciones
				/*for(var i=0; i < oOperaciones.length; i++){
					oOperaciones[i].idReparacion = $("#formularioReparacion input").first().get(0).value;
				}
				$.post("php/altaOperaciones.php", "operaciones="+JSON.stringify(oOperaciones), function(jqRespuesta, sEstatus, jqAjax){
					if(jqRespuesta=="Reparación y Operaciones insertadas."){
						$("#formularioReparacion")[0].reset();
						$("#formularioOperacion")[0].reset();
						$("#selectBorrarOperaciones").get(0).selectedIndex = 0;
						
						$("#formularioOperacion").parent().hide();
						$("#selectBorrarOperaciones").hide().empty().append($("<option>Seleccione una operación</option>"));
						
						bAltaOperacionAbierto = false;
						bEliminaOperacionAbierto = false;
						
						oOperaciones = new Array();
					}
						
				}, "text");*/
				$("#formularioReparacion").get(0).reset();
			}
			muestraAlerta(jqRespuesta);	
		}, "text");
	}
	else{
		muestraAlerta(arrayValidar[1]);
	}
}