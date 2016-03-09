$("#formularioOperacion input[type=button]").click(altaOperacion);

function altaOperacion(){
	//validaciones
	var arrayValidar = validarFormularioOperacion("");
	if(arrayValidar[0]){
		var oFormulario = $("#formularioOperacion")[0];
		var iIdReparacion = $("#formularioReparacion").get(0).selectReparacion.options[$("#formularioReparacion").get(0).selectReparacion.selectedIndex].value;
		var iIDTipoOperacion = oFormulario.selectTipo.options[oFormulario.selectTipo.selectedIndex].value;
		var iUnidades = oFormulario.txtUnidades.value;
		
		var oOperacion = new Operacion(null, iIdReparacion, iIDTipoOperacion, iUnidades);
		$.post("php/altaOperacion.php", "operacion="+JSON.stringify(oOperacion), function(jqRespuesta, sEstatus, jqAjax){
			muestraAlerta(jqRespuesta);
			oFormulario.reset();
			$("#formularioOperacion").parent().hide();
			bAltaOperacionAbierto = !bAltaOperacionAbierto;
			//actualizar combo
			$("#selectBorrarOperaciones").empty().append($("<option>Seleccione una operación</option>"));
				$.get("php/obtenerTodasLasOperacionesDeUnaReparacion.php", "reparacion="+$("#selectReparacion").get(0).options[$("#selectReparacion").get(0).selectedIndex].value, function(jqOperaciones, sEstatus, jqAjax){
					for(var i=0; i<$(jqOperaciones).size(); i++){
						var oOption = document.createElement("OPTION");
						oOption.text="Operación: ID => "+$(jqOperaciones).get(i).ID+" Unidades => "+$(jqOperaciones).get(i).Unidades;
						oOption.value=$(jqOperaciones).get(i).ID;
						$("#selectBorrarOperaciones").get(0).appendChild(oOption);
					}
				},"json");
			}, "text");
	}
	else{
		muestraAlerta(arrayValidar[1]);
	}
}