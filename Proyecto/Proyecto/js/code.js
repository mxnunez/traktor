var oDatos = new Array();
var bAltaOperacionAbierto = false;
var bEliminaOperacionAbierto = false;

$(document).ready(function(){
	crearAcordeonGestor();
	$("#dialogoFormularios").dialog({autoOpen: false});
	$("#panelCliente input[value=ALTA]").click(cargarFormularioAltaCliente);
	$("#panelCliente input[value=MODIFICAR]").click(cargarFormularioModificarCliente);
	$("#panelCliente input[value=LISTAR]").click(listarTodosLosClientes);
	$("#panelVehiculo input[value=ALTA]").click(cargarFormularioAltaVehiculo);
	$("#panelVehiculo input[value=MODIFICAR]").click(cargarFormularioModificarVehiculo);
	$("#panelVehiculo input[value=LISTAR]").click(listarVehiculosPorFiltro);
	$("#panelReparacion input[value=ALTA]").click(cargarFormularioAltaReparacion);
	$("#panelReparacion input[value=MODIFICAR]").click(cargarFormularioModificarReparacion);
	$("#panelReparacion input[value=LISTAR]").click(listarReparacionesPorFiltro);
	$("#panelTipoOperacion input[value=ALTA]").click(cargarFormularioAltaTipoOperacion);
	$("#panelTipoOperacion input[value=MODIFICAR]").click(cargarFormularioModificarTipoOperacion);
	$("#panelTipoOperacion input[value=LISTAR]").click(listarTodosLosTiposDeOperaciones);
	$("#dialogoAlertas").dialog({
		autoOpen: false,
		close: function(){
			$(this).empty();
		},
		closeOnEscape: false,
		resizable: false,
		modal: true,
		hide: {
             effect: "blind",
             duration: 300
        },
        show: {
			effect: "fold",
			duration: 300
		},
		width: 650,
		position: {my: "right", at: "top", of: window},
		buttons: [{
			text: "Aceptar",
            click: function(){
                $(this).dialog("close");
             }
		}]
	});
	var jqBoton = $("<input type='button' value='CERRAR' class='btn btn-info btn-lg'/>");
	jqBoton.addClass("boton-invisible").click(ocultarCapaListados);
	$("#capaListados").append($(jqBoton));
	$("#dialogoFiltrosVehiculos").dialog({
		autoOpen: false,
		close: function(){
			$("#dialogoFiltrosVehiculos input[type=text]").val("");
		},
		closeOnEscape: false,
		resizable: false,
		modal: true,
		hide: {
             effect: "blind",
             duration: 300
        },
        show: {
			effect: "fold",
			duration: 300
		},
		width: 650,
		position: {my: "right", at: "top", of: window},
		buttons: [{
			text: "Aceptar",
            click: function(){
                $(this).dialog("close");
				var oCampo = $("#dialogoFiltrosVehiculos input[type=text]").get(0);
				oCampo.value = oCampo.value.trim();
				$.get("php/obtenerVehiculosFiltrados.php", "filtro="+oCampo.value, function(jqTabla, sEstatus, jqAjax){
					$(jqTabla).insertBefore($("#capaListados > input"));
					mostrarCapaListados();
				}, "html");
             }
		}]
	});
	
	$("#dialogoFiltrosReparacion").dialog({
		autoOpen: false,
		closeOnEscape: false,
		resizable: false,
		modal: true,
		hide: {
             effect: "blind",
             duration: 300
        },
        show: {
			effect: "fold",
			duration: 300
		},
		width: 650,
		position: {my: "right", at: "top", of: window},
		buttons: [{
			text: "Aceptar",
            click: function(){
                $(this).dialog("close");
				//coger fechas seleccionadas
				var sFecha1 = $("#txtCalendario1").val();
				var sFecha2 = $("#txtCalendario2").val();
				$.get("php/obtenerReparacionesPorFiltro.php", "fecha1="+sFecha1+"&fecha2="+sFecha2, function(jqTabla, sEstatus, jqAjax){
					$(jqTabla).insertBefore($("#capaListados > input"));
					mostrarCapaListados();
				}, "html");
             }
		}]
	});
	
	$("#calendario1").datepicker({
		altField : "#txtCalendario1",
		altFormat : $.datepicker.ATOM,
		changeYear: true,
  		changeMonth: true,
		dayNamesMin : ["D","L","M","X","J","V","S"],
		monthNamesShort : ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"]
	});
	
	$("#calendario2").datepicker({
		altField : "#txtCalendario2",
		altFormat : $.datepicker.ATOM,
		changeYear: true,
  		changeMonth: true,
		dayNamesMin : ["D","L","M","X","J","V","S"],
		monthNamesShort : ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"]
	});
});

function crearAcordeonGestor(){
	$("#acordeonGestor").accordion({
		collapsible: false,		
		active: 0,
		heightStyle: "fill"
	});
}

function crearDialogoFormularios(){
	$("#dialogoFormularios").dialog({
		autoOpen: false,
		beforeClose: function(){
			oDatos = new Array();
		},
		closeOnEscape: false,
		resizable: true,
		modal: true,
		hide: {
             effect: "blind",
             duration: 300
        },
        show: {
			effect: "fold",
			duration: 300
		},
		width: 650,
		position: { my: "left", at: "top", of: window }
	});
}

function cargarFormularioAltaCliente(){
	destruirDialogo();
	$("#dialogoFormularios")[0].title="Alta de Cliente";
	crearDialogoFormularios();
	$("#dialogoFormularios").load("ajax/forms/formularioCliente.html", null, function(){
		$("#formularioCliente input[type=button]").val("Alta");
		cargarScriptAltaCliente();
		cargarSelectProvincias1();
	});
	$("#dialogoFormularios").dialog("open");
}

function cargarSelectProvincias1(){
	
	var arrayProvincias = null;
	if(localStorage["provincias"]!=null){
        arrayProvincias=JSON.parse(localStorage["provincias"]);
        //cargar select
		cargarSelectProvincias2(arrayProvincias);
    }
	else{
        $.get("php/obtenerProvincias.php",null,function(jqRespuesta, sEstatus, jqAjax){
			localStorage["provincias"]=JSON.stringify(jqRespuesta);
			//cargar select
			cargarSelectProvincias2(jqRespuesta);
		},"json");
    }
}

function cargarSelectProvincias2(jqProvincias){
	var jqSelect = $("#provincia");
	$(jqSelect).empty().append("<option>Seleccione una provincia...</option>");
	for(var i=0; i<$(jqProvincias).size(); i++){
		var jqOption = $("<option value='"+$(jqProvincias).get(i).codigo+"'>"+$(jqProvincias).get(i).provincia+"</option>").appendTo($(jqSelect));
	}
}

function cargarScriptAltaCliente(){
	$.getScript("ajax/scripts/altaCliente.js");
}

function cargarFormularioModificarCliente(){
	destruirDialogo();
	$("#dialogoFormularios")[0].title="Modificación de Cliente";
	crearDialogoFormularios();
	$("#dialogoFormularios").load("ajax/forms/formularioCliente.html", null, function(){
		$("#formularioCliente input[type=button]").val("Modificar");
		var jqSelect = $("<select class='form-control' name='selectDni'><option>Seleccione un cliente</option></select>");
		$("#txtDni").replaceWith(jqSelect);
		cargarClientesDeLaBaseDeDatos(jqSelect);
		cargarSelectProvincias1();
		jqSelect.change(function(){
			if($(this)[0].selectedIndex>0){
				var oClienteSeleccionado = null;
				var bEncontrado = false;
				for(var i=0; i<oDatos.length && !bEncontrado; i++){
					if(oDatos[i]["DNI"]==$(this)[0].options[$(this)[0].selectedIndex].value){
						oClienteSeleccionado = oDatos[i];
						bEncontrado = true;
					}
				}
				$("#txtNombre").val(oClienteSeleccionado['Nombre']);
				$("#txtApellidos").val(oClienteSeleccionado['Apellidos']);
				$("#txtTelefono").val(oClienteSeleccionado['Telefono']);
				$("#provincia").val(oClienteSeleccionado['Provincia']);
			}
			else{
				$("#formularioCliente")[0].reset();
			}
		});
		cargarScriptModificarCliente();
	});
	$("#dialogoFormularios").dialog("open");
}

function cargarScriptModificarCliente(){
	$.getScript("ajax/scripts/modificarCliente.js");
}

function cargarClientesDeLaBaseDeDatos(jqSelect){
	oDatos = new Array();
	var jqSelect = jqSelect;
	$.get("php/obtenerTodosLosClientes.php", null, function(jqDatos, sEstatus, jqAjax){
		for(var i=0; i<jqDatos.length; i++){
			var jqOption = $("<option value='"+jqDatos[i]['DNI']+"'>DNI: "+jqDatos[i]['DNI']+" Nombre: "+jqDatos[i]['Nombre']+"</option>");
			jqSelect.append(jqOption);
			oDatos.push(jqDatos[i]);
		}
	}, "json");
}

function cargarFormularioAltaVehiculo(){
	destruirDialogo();
	$("#dialogoFormularios")[0].title="Alta de Vehículo";
	crearDialogoFormularios();
	$("#dialogoFormularios").load("ajax/forms/formularioVehiculo.html", null, function(){
		$("#formularioVehiculo input[type=button]").val("Alta");
		cargarClientesDeLaBaseDeDatos($("#formularioVehiculo select"));
		cargarScriptAltaVehiculo();
	});
	$("#dialogoFormularios").dialog("open");
}

function cargarScriptAltaVehiculo(){
	$.getScript("ajax/scripts/altaVehiculo.js");
}

function cargarFormularioModificarVehiculo(){
	destruirDialogo();
	$("#dialogoFormularios")[0].title="Modificación de Vehículo";
	crearDialogoFormularios();
	$("#dialogoFormularios").load("ajax/forms/formularioVehiculo.html", null, function(){
		$("#formularioVehiculo input[type=button]").val("Modificar");
		var jqSelect = $("<select class='form-control' name='selectVehiculo'><option>Seleccione un vehículo</option></select>");
		$("#txtMatricula").replaceWith(jqSelect);
		cargarVehiculosDeLaBaseDeDatos(jqSelect);
		cargarClientesDeLaBaseDeDatos($("#formularioVehiculo select[name=selectCliente]"));
		jqSelect.change(function(){
			if($(this)[0].selectedIndex>0){
				var oVehiculoSeleccionado = null;
				var bEncontrado = false;
				for(var i=0; i<oDatos.length && !bEncontrado; i++){
					if(oDatos[i]["Matricula"]==$(this)[0].options[$(this)[0].selectedIndex].value){
						oVehiculoSeleccionado = oDatos[i];
						bEncontrado = true;
					}
				}
				$("#selectCliente")[0].selectedIndex = $("#selectCliente option[value="+oVehiculoSeleccionado['DNI_Cliente']+"]")[0].index;
				$("#txtMarca").val(oVehiculoSeleccionado['Marca']);
				$("#txtModelo").val(oVehiculoSeleccionado['Modelo']);
				$("#txtCombustible").val(oVehiculoSeleccionado['Combustible']);
			}
			else{
				$("#formularioVehiculo")[0].reset();
			}
		});
		cargarScriptModificarVehiculo();
	});
	$("#dialogoFormularios").dialog("open");
}

function cargarScriptModificarVehiculo(){
	$.getScript("ajax/scripts/modificarVehiculo.js");
}

function cargarVehiculosDeLaBaseDeDatos(jqSelect){
	oDatos = new Array();
	var jqSelect = jqSelect;
	$.get("php/obtenerTodosLosVehiculos.php", null, function(jqDatos, sEstatus, jqAjax){
		for(var i=0; i<jqDatos.length; i++){
			var jqOption = $("<option value='"+jqDatos[i]['Matricula']+"'>Matrícula: "+jqDatos[i]['Matricula']+"</option>");
			jqSelect.append(jqOption);
			oDatos.push(jqDatos[i]);
		}
	}, "json");
}

function cargarFormularioAltaReparacion(){
	destruirDialogo();
	$("#dialogoFormularios")[0].title="Alta de Reparación";
	crearDialogoFormularios();
	$("#dialogoFormularios").load("ajax/forms/formularioReparacion.html", null, function(){
		$("#formularioReparacion input[class='btn btn-info']").val("Alta");
		crearDatePickerParaFormularioDeReparacion();
		cargarVehiculosDeLaBaseDeDatos($("#selectMatricula"));
		$("#formularioReparacion").click(function(){
			if($("#txtFecha:focus").size() > 0){
				$("#datePickerFormularioReparacion").show();
			}
			else{
				$("#datePickerFormularioReparacion").hide();
			}
		});
		cargarScriptAltaReparacion();
	});
	$("#dialogoFormularios").dialog("open");
}

function cargarFormularioModificarReparacion(){
	destruirDialogo();
	$("#dialogoFormularios")[0].title="Modificación de Reparación";
	crearDialogoFormularios();
	$("#dialogoFormularios").load("ajax/forms/formularioReparacion.html", null, function(){
		$("#formularioReparacion input[type=button]").val("Modificar");
		var jqSelect = $("<select class='form-control' name='selectReparacion' id='selectReparacion'><option>Seleccione una reparación</option></select>");
		$("#txtId").replaceWith(jqSelect);
		cargarReparacionesDeLaBaseDeDatos(jqSelect);
		cargarVehiculosDeLaBaseDeDatos($("#selectMatricula"));
		jqSelect.change(function(){
			if($(this)[0].selectedIndex>0){
				var oReparacionSeleccionada = null;
				var bEncontrado = false;
				for(var i=0; i<oDatos.length && !bEncontrado; i++){
					if(oDatos[i]["ID"]==$(this)[0].options[$(this)[0].selectedIndex].value){
						oReparacionSeleccionada = oDatos[i];
						bEncontrado = true;
					}
				}
				$("#selectMatricula")[0].selectedIndex = $("#selectMatricula option[value='"+oReparacionSeleccionada['Matricula']+"']")[0].index;
				$("#txtFecha").val(oReparacionSeleccionada['Fecha']);
				$("#txtDescripcion").val(oReparacionSeleccionada['Descripcion']);
				//llenar combo de eliminar operaciones
				$("#selectBorrarOperaciones").empty().append($("<option>Seleccione una operación</option>"));
				$.get("php/obtenerTodasLasOperacionesDeUnaReparacion.php", "reparacion="+$(this).get(0).options[$(this).get(0).selectedIndex].value, function(jqOperaciones, sEstatus, jqAjax){
					for(var i=0; i<$(jqOperaciones).size(); i++){
						var oOption = document.createElement("OPTION");
						oOption.text="Operación: ID => "+$(jqOperaciones).get(i).ID+" Unidades => "+$(jqOperaciones).get(i).Unidades+"";
						oOption.value=$(jqOperaciones).get(i).ID;
						$("#selectBorrarOperaciones").get(0).appendChild(oOption);
					}
					
				}, "json");
			}
			else{
				$("#formularioReparacion")[0].reset();
				//vaciarComboEliminarOperaciones
				$("#selectBorrarOperaciones").empty().append($("<option>Seleccione una operación</option>"));
			}
		});
		cargarScriptModificarReparacion();
		crearDatePickerParaFormularioDeReparacion();
		$("#formularioReparacion").click(function(){
			if($("#txtFecha:focus").size() > 0){
				$("#datePickerFormularioReparacion").show();
			}
			else{
				$("#datePickerFormularioReparacion").hide();
			}
		});
		var jqBoton = $('<input type="button" class="btn btn-warning" id="botonAltaOperacion" value="Alta Operación"/>');
		jqBoton.insertAfter($("#formularioReparacion"));
		$('<input type="button" class="btn btn-danger" value="Eliminar Operación" id="botonBorrarOperacion"/>').insertAfter($(jqBoton));
		//cargar formulario alta operacion
		$("<div>").load("ajax/forms/formularioOperacion.html", null, function(){
			bAltaOperacionAbierto = false;
			bEliminaOperacionAbierto = false;
			$("#botonAltaOperacion").click(mostrarFormularioAltaOperacion);
			cargarScriptAltaOperacion();
			$(this).insertAfter($("#botonAltaOperacion")).hide();
			$("#botonBorrarOperacion").click(mostrarFormularioEliminarOperacion);
			$("<select class='form-control' id='selectBorrarOperaciones' name='selectBorrarOperaciones'><option>Seleccione una operación</option></select>").insertAfter($("#botonBorrarOperacion")).hide();
			$("#selectBorrarOperaciones").change(borraOperacion);
			cargarTiposDeOperacionesDeLaBaseDeDatos($("#formularioOperacion select"));
			//cargarScriptAltaReparacion();
		});
	});
	$("#dialogoFormularios").dialog("open");
}

function cargarScriptModificarReparacion(){
	$.getScript("ajax/scripts/modificarReparacion.js");
}

function cargarReparacionesDeLaBaseDeDatos(jqSelect){
	oDatos = new Array();
	var jqSelect = jqSelect;
	$.get("php/obtenerTodasLasReparaciones.php", null, function(jqDatos, sEstatus, jqAjax){
		for(var i=0; i<jqDatos.length; i++){
			var jqOption = $("<option value='"+jqDatos[i]['ID']+"'>ID: "+jqDatos[i]['ID']+" Vehículo: "+jqDatos[i]['Matricula']+"</option>");
			jqSelect.append(jqOption);
			oDatos.push(jqDatos[i]);
		}
	}, "json");
}

function cargarScriptAltaReparacion(){
	$.getScript("ajax/scripts/altaReparacion.js");
}

function mostrarFormularioAltaOperacion(){
	if(bAltaOperacionAbierto){
		$("#formularioOperacion").parent().hide();
		$("#formularioOperacion").get(0).reset();
		$("#formularioOperacion *").removeClass("error");
	}
	else{
		$("#formularioOperacion").parent().show();
	}
	bAltaOperacionAbierto = !bAltaOperacionAbierto;
}

function cargarScriptAltaOperacion(){
	$.getScript("ajax/scripts/altaOperacion.js");
}

function mostrarFormularioEliminarOperacion(){
	if(bEliminaOperacionAbierto){
		$("#selectBorrarOperaciones").hide();
	}
	else{
		$("#selectBorrarOperaciones").show();
	}
	bEliminaOperacionAbierto = !bEliminaOperacionAbierto;
}

function borraOperacion(){
	if($("#selectBorrarOperaciones")[0].selectedIndex > 0){
		if(confirm("¿Deseas borrar esta operación?")){
			var iIdOperacion = $("#selectBorrarOperaciones")[0].options[$("#selectBorrarOperaciones")[0].selectedIndex].value;
			$.post("php/eliminarOperacion.php", "id="+iIdOperacion, function(jqRespuesta, sEstatus, jqAjax){
					if(jqRespuesta=="Operación eliminada con éxito"){
						$("#selectBorrarOperaciones").hide();
						bEliminaOperacionAbierto = !bEliminaOperacionAbierto;
						//actualizar combo
						$("#selectBorrarOperaciones").empty().append($("<option>Seleccione una operación</option>"));
						$.get("php/obtenerTodasLasOperacionesDeUnaReparacion.php", "reparacion="+$("#selectReparacion").get(0).options[$("#selectReparacion").get(0).selectedIndex].value, function(jqOperaciones, sEstatus, jqAjax){
							for(var i=0; i<$(jqOperaciones).size(); i++){
								var oOption = document.createElement("OPTION");
								oOption.text="Operación: ID => "+$(jqOperaciones).get(i).ID+" Unidades => "+$(jqOperaciones).get(i).Unidades+"";
								oOption.value=$(jqOperaciones).get(i).ID;
								$("#selectBorrarOperaciones").get(0).appendChild(oOption);
							}
						}, "json");
					}
					muestraAlerta(jqRespuesta);
			}, "text");
		}
	}
	else{
		$("#selectBorrarOperaciones")[0].selectedIndex = 0;
	}		
}

/*function cargarOperacionesDeLaBaseDeDatos(jqSelect){
	oDatos = new Array();
	var jqSelect = jqSelect;
	$.get("php/obtenerTodasLasOperaciones.php", null, function(jqDatos, sEstatus, jqAjax){
		for(var i=0; i<jqDatos.length; i++){
			var jqOption = $("<option value='"+jqDatos[i]['ID']+"'>ID: "+jqDatos[i]['ID']+"</option>");
			jqSelect.append(jqOption);
			oDatos.push(jqDatos[i]);
		}
	}, "json");
}*/

function crearDatePickerParaFormularioDeReparacion(){
	$("#datePickerFormularioReparacion").datepicker({
		altField : "#txtFecha",
		dateFormat : "dd'-'mm'-'yy",
		changeYear: true,
  		changeMonth: true,
		defaultDate: "+0d",
  		minDate: "-1y",
  		maxDate: "+0d",
		dayNamesMin : ["D","L","M","X","J","V","S"],
		monthNamesShort : ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"]
	}).hide();
}

function cargarFormularioAltaTipoOperacion(){
	destruirDialogo();
	$("#dialogoFormularios")[0].title="Alta de Tipo de Operación";
	crearDialogoFormularios();
	$("#dialogoFormularios").load("ajax/forms/formularioTipoOperacion.html", null, function(){
		$("#formularioTipoOperacion input[type=button]").val("Alta");
		cargarScriptAltaTipoOperacion();
	});
	$("#dialogoFormularios").dialog("open");
}

function cargarScriptAltaTipoOperacion(){
	$.getScript("ajax/scripts/altaTipoOperacion.js");
}

function cargarFormularioModificarTipoOperacion(){
	destruirDialogo();
	$("#dialogoFormularios")[0].title="Modificación de Tipo de Operación";
	crearDialogoFormularios();
	$("#dialogoFormularios").load("ajax/forms/formularioTipoOperacion.html", null, function(){
		$("#formularioTipoOperacion input[type=button]").val("Modificar");
		var jqSelect = $("<select class='form-control' name='selectTipoOperacion'><option>Seleccione un tipo de operación</option></select>");
		$("#txtId").replaceWith(jqSelect);
		cargarTiposDeOperacionesDeLaBaseDeDatos(jqSelect);
		jqSelect.change(function(){
			if($(this)[0].selectedIndex>0){
				var oTipoOperacionSeleccionado = null;
				var bEncontrado = false;
				for(var i=0; i<oDatos.length && !bEncontrado; i++){
					if(oDatos[i]["ID"]==$(this)[0].options[$(this)[0].selectedIndex].value){
						oTipoOperacionSeleccionado = oDatos[i];
						bEncontrado = true;
					}
				}
				$("#txtNombre").val(oTipoOperacionSeleccionado['Nombre']);
				$("#txtImporte").val(oTipoOperacionSeleccionado['Importe']);
			}
			else{
				$("#formularioTipoOperacion")[0].reset();
			}
		});
		cargarScriptModificarTipoDeOperacion();
	});
	$("#dialogoFormularios").dialog("open");
}

function cargarTiposDeOperacionesDeLaBaseDeDatos(jqSelect){
	oDatos = new Array();
	var jqSelect = jqSelect;
	$.get("php/obtenerTodosLosTiposDeOperaciones.php", null, function(jqDatos, sEstatus, jqAjax){
		for(var i=0; i<jqDatos.length; i++){
			var jqOption = $("<option value='"+jqDatos[i]['ID']+"'>ID: "+jqDatos[i]['ID']+" Nombre: "+jqDatos[i]['Nombre']+"</option>");
			jqSelect.append(jqOption);
			oDatos.push(jqDatos[i]);
		}
	}, "json");
}

function cargarScriptModificarTipoDeOperacion(){
	$.getScript("ajax/scripts/modificarTipoOperacion.js");
}

function destruirDialogo(){
	$("#dialogoFormularios").dialog("destroy");
}

function validarFormularioCliente(sOperacion){
	var bValidado = true;
	var sErrores = "";
	var oFormulario = $("#formularioCliente").get(0); 
	
	if(sOperacion=="alta"){
		var oExpReg = /^\d{8}[A-Z|a-z]{1}$/;
		oFormulario.txtDni.value = oFormulario.txtDni.value.trim();
		var oCampoDni = oFormulario.txtDni;
		if(!oExpReg.test(oCampoDni.value)){
			if(bValidado)
				oCampoDni.focus();
				
			bValidado = false;
			sErrores += "<p>El campo 'DNI' tiene que tener uno de los siguientes formatos '00000000A' o '00000000a'</p>";
			$(oCampoDni).addClass("error");
		}
		else{
			$(oCampoDni).removeClass("error");
		}
	}
	else{
		var oSelectDni = oFormulario.selectDni;
		if(oSelectDni.selectedIndex <= 0){
			if(bValidado)
				oSelectDni.focus();
				
			bValidado = false;
			sErrores += "<p>Debe seleccionar un cliente para ser modificado.</p>";
			$(oSelectDni).addClass("error");
		}
		else{
			$(oSelectDni).removeClass("error");
		}
	}
	
	oExpReg = /^[a-zA-Z\s\u00f1\u00d1áéíóúÁÉÍÓÚ]{2,20}$/;
	oFormulario.txtNombre.value = oFormulario.txtNombre.value.trim();
	var oCampoNombre = oFormulario.txtNombre;
	if(!oExpReg.test(oCampoNombre.value)){
		if(bValidado)
			oCampoNombre.focus();
			
		bValidado = false;
		sErrores += "<p>El campo 'Nombre' tiene que tener entre 2 y 20 carácteres y que no sean especiales.</p>";
		$(oCampoNombre).addClass("error");
	}
	else{
		$(oCampoNombre).removeClass("error");
	}
	
	oExpReg = /^[a-zA-Z\s\u00f1\u00d1áéíóúÁÉÍÓÚ]{2,30}$/;
	oFormulario.txtApellidos.value = oFormulario.txtApellidos.value.trim();
	var oCampoApellidos = oFormulario.txtApellidos;
	if(!oExpReg.test(oCampoApellidos.value)){
		if(bValidado)
			oCampoApellidos.focus();
			
		bValidado = false;
		sErrores += "<p>El campo 'Apellidos' tiene que tener entre 2 y 30 carácteres y que no sean especiales.</p>";
		$(oCampoApellidos).addClass("error");
	}
	else{
		$(oCampoApellidos).removeClass("error");
	}
	
	oExpReg = /^\d{9}$/;
	oFormulario.txtTelefono.value = oFormulario.txtTelefono.value.trim();
	var oCampoTelefono = oFormulario.txtTelefono;
	if(!oExpReg.test(oCampoTelefono.value)){
		if(bValidado)
			oCampoTelefono.focus();
			
		bValidado = false;
		sErrores += "<p>El campo 'Teléfono' debe tener 9 dígitos.</p>";
		$(oCampoTelefono).addClass("error");
	}
	else{
		$(oCampoTelefono).removeClass("error");
	}
		
	/*oExpReg = /^[a-zA-Z\s\u00f1\u00d1\dáéíóúÁÉÍÓÚ\/\º\ª\,\.]{5,40}$/;
	oFormulario.txtDireccion.value = oFormulario.txtDireccion.value.trim();
	var oCampoDireccion = oFormulario.txtDireccion;
	if(!oExpReg.test(oCampoDireccion.value)){
		if(bValidado)
			oCampoDireccion.focus();
			
		bValidado = false;
		sErrores += "<p>El campo 'Dirección' debe tener entre 5 y 40 carácteres.</p>";
		$(oCampoDireccion).addClass("error");
	}
	else{
		$(oCampoDireccion).removeClass("error");
	}*/
	var oSelectProvincia = oFormulario.provincia;
	if(oSelectProvincia.selectedIndex<=0){
		if(bValidado)
			oSelectProvincia.focus();
		
		bValidado = false;
		$(oSelectProvincia).addClass("error");
		sErrores += "<p>Debe seleccionar una provincia.</p>";
	}
	else{
		$(oSelectProvincia).removeClass("error");
	}
	
	var arrayRespuesta = new Array(bValidado, sErrores);
	return arrayRespuesta;
}

function validarFormularioVehiculo(sOperacion){
	var bValidado = true;
	var sErrores = "";
	var oFormulario = $("#formularioVehiculo").get(0);
	
	if(sOperacion=="alta"){
		var oExpReg = /^[A-Z]{1,2}\s\d{4}\s([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]){3}$/;
		oFormulario.txtMatricula.value = oFormulario.txtMatricula.value.trim();
		var oCampoMatricula = oFormulario.txtMatricula;
		if(!oExpReg.test(oCampoMatricula.value)){
			if(bValidado)
				oCampoMatricula.focus();
			
			bValidado = false;
			sErrores += "<p>El campo 'Matrícula' no es válido.</p>";
			$(oCampoMatricula).addClass("error");
		}
		else{
			$(oCampoMatricula).removeClass("error");
		}
	}
	else{
		var oSelectVehiculo = oFormulario.selectVehiculo;
		if(oSelectVehiculo.selectedIndex <= 0){
			if(bValidado)
				oSelectVehiculo.focus();
				
			bValidado = false;
			sErrores += "<p>Debe seleccionar un vehículo para ser modificado.</p>";
			$(oSelectVehiculo).addClass("error");
		}
		else{
			$(oSelectVehiculo).removeClass("error");
		}
	}
	
	var oSelectCliente = oFormulario.selectCliente;
	if(oSelectCliente.selectedIndex <= 0){
		if(bValidado)
				oSelectCliente.focus();
				
		bValidado = false;
		sErrores += "<p>Debe seleccionar un cliente.</p>";
		$(oSelectCliente).addClass("error");
	}
	else{
		$(oSelectCliente).removeClass("error");
	}
	
	oExpReg = /^[a-zA-Z\s]{1,20}$/;
	oFormulario.txtMarca.value = oFormulario.txtMarca.value.trim();
	var oCampoMarca = oFormulario.txtMarca;
	if(!oExpReg.test(oCampoMarca.value)){
		if(bValidado)
			oCampoMarca.focus();
		
		bValidado = false;
		sErrores += "<p>El campo 'Marca' debe tener entre 1 y 20 carácteres sin que sean especiales y no acentuados.</p>";
		$(oCampoMarca).addClass("error");
	}
	else{
		$(oCampoMarca).removeClass("error");
	}
	
	oExpReg = /^[a-zA-Z\s]{1,20}$/;
	oFormulario.txtModelo.value = oFormulario.txtModelo.value.trim();
	var oCampoModelo = oFormulario.txtModelo;
	if(!oExpReg.test(oCampoModelo.value)){
		if(bValidado)
			oCampoModelo.focus();
		
		bValidado = false;
		sErrores += "<p>El campo 'Modelo' debe tener entre 1 y 20 carácteres sin que sean especiales y no acentuados.</p>";
		$(oCampoModelo).addClass("error");
	}
	else{
		$(oCampoModelo).removeClass("error");
	}
	
	oExpReg = /^[a-zA-Z\s]{1,10}$/;
	oFormulario.txtCombustible.value = oFormulario.txtCombustible.value.trim();
	var oCampoCombustible = oFormulario.txtCombustible;
	if(!oExpReg.test(oCampoCombustible.value)){
		if(bValidado)
			oCampoCombustible.focus();
		
		bValidado = false;
		sErrores += "<p>El campo 'Combustible' debe tener entre 1 y 10 carácteres sin que sean especiales y no acentuados.</p>";
		$(oCampoCombustible).addClass("error");
	}
	else{
		$(oCampoCombustible).removeClass("error");
	}
	
	var arrayRespuesta = new Array(bValidado, sErrores);
	return arrayRespuesta;
}

function validarFormularioTipoOperacion(sOperacion){
	var bValidado = true;
	var sErrores = "";
	var oFormulario = $("#formularioTipoOperacion").get(0);
	
	if(sOperacion=="alta"){
		var oExpReg = /^\d{1,10}$/;
		oFormulario.txtId.value = oFormulario.txtId.value.trim();
		var oCampoId = oFormulario.txtId;
		if(!oExpReg.test(oCampoId.value)){
			if(bValidado)
				oCampoId.focus();
				
			bValidado = false;
			sErrores += "<p>El campo 'ID' debe tener entre 1 y 10 dígitos.</p>";
			$(oCampoId).addClass("error");
		}
		else{
			$(oCampoId).removeClass("error");
		}
	}
	else{
		var oSelectTipoOperacion = oFormulario.selectTipoOperacion;
		if(oSelectTipoOperacion.selectedIndex <= 0){
			if(bValidado)
				oSelectTipoOperacion.focus();
				
			bValidado = false;
			sErrores += "<p>Debe seleccionar un tipo de operación para ser modificado.</p>";
			$(oSelectTipoOperacion).addClass("error");
		}
		else{
			$(oSelectTipoOperacion).removeClass("error");
		}
	}
	
	oExpReg = /^[a-zA-Z\s\u00f1\u00d1\dáéíóúÁÉÍÓÚ]{1,20}$/;
	oFormulario.txtNombre.value = oFormulario.txtNombre.value.trim();
	var oCampoNombre = oFormulario.txtNombre;
	if(!oExpReg.test(oCampoNombre.value)){
		if(bValidado)
			oCampoNombre.focus();
			
		bValidado = false;
		sErrores += "<p>El campo 'Nombre' debe tener entre 2 y 20 carácteres.</p>";
		$(oCampoNombre).addClass("error");
	}
	else{
		$(oCampoNombre).removeClass("error");
	}
	
	oExpReg = /^\d{1,5}(\.\d{1,2})?$/;
	oFormulario.txtImporte.value = oFormulario.txtImporte.value.trim();
	var oCampoImporte = oFormulario.txtImporte;
	if(!oExpReg.test(oCampoImporte.value)){
		if(bValidado)
			oCampoImporte.focus();
			
		bValidado = false;
		sErrores += "<p>El campo 'Importe' debe tener el formato '00000.00'.</p>";
		$(oCampoImporte).addClass("error");
	}
	else{
		$(oCampoImporte).removeClass("error");
	}
	
	var arrayRespuesta = new Array(bValidado, sErrores);
	return arrayRespuesta;
}

function validarFormularioOperacion(sOperacion){
	var bValidado = true;
	var sErrores = "";
	var oFormulario = $("#formularioOperacion").get(0);
	
	var oSelectReparacion = $("#formularioReparacion").get(0).selectReparacion;
	if(oSelectReparacion.selectedIndex <= 0){
		if(bValidado)
			oSelectReparacion.focus();
		
		bValidado = false;
		sErrores += "<p>Debe seleccionar una reparación.</p>";
		$(oSelectReparacion).addClass("error");
	}
	else{
		$(oSelectReparacion).removeClass("error");
	}
	
	var oSelectTipoOperacion = oFormulario.selectTipo;
	if(oSelectTipoOperacion.selectedIndex <= 0){
		if(bValidado)
				oSelectTipoOperacion.focus();
				
		bValidado = false;
		sErrores += "<p>Debe seleccionar un tipo de operación.</p>";
		$(oSelectTipoOperacion).addClass("error");
	}
	else{
		$(oSelectTipoOperacion).removeClass("error");
	}
	
	oExpReg = /^\d{1,3}$/;
	oFormulario.txtUnidades.value = oFormulario.txtUnidades.value.trim();
	var oCampoUnidades = oFormulario.txtUnidades;
	if(!oExpReg.test(oCampoUnidades.value)){
		if(bValidado)
			oCampoUnidades.focus();
				
		bValidado = false;
		sErrores += "<p>El campo 'Unidades' debe tener entre 1 y 3 dígitos.</p>";
		$(oCampoUnidades).addClass("error");
	}
	else{
		$(oCampoUnidades).removeClass("error");
	}
	
	var arrayRespuesta = new Array(bValidado, sErrores);
	return arrayRespuesta;
}

function validarFormularioReparacion(sOperacion){
	var bValidado = true;
	var sErrores = "";
	var oFormulario = $("#formularioReparacion").get(0);
	
	if(sOperacion=="alta"){
		var oExpReg = /^\d{1,10}$/;
		oFormulario.txtId.value = oFormulario.txtId.value.trim();
		var oCampoId = oFormulario.txtId;
		if(!oExpReg.test(oCampoId.value)){
			if(bValidado)
				oCampoId.focus();
					
			bValidado = false;
			sErrores += "<p>El campo 'ID' debe tener entre 1 y 10 dígitos.</p>";
			$(oCampoId).addClass("error");
		}
		else{
			$(oCampoId).removeClass("error");
		}
	}
	else{
		var oSelectReparacion = oFormulario.selectReparacion;
		if(oSelectReparacion.selectedIndex <= 0){
			if(bValidado)
				oSelectReparacion.focus();
				
			bValidado = false;
			sErrores += "<p>Debe seleccionar una reparación para ser modificada.</p>";
			$(oSelectReparacion).addClass("error");
		}
		else{
			$(oSelectReparacion).removeClass("error");
		}
	}
	
	var oSelectVehiculo = oFormulario.selectMatricula;
	if(oSelectVehiculo.selectedIndex <= 0){
		if(bValidado)
			oSelectVehiculo.focus();
			
		bValidado = false;
		sErrores += "<p>Debe seleccionar un vehículo.</p>";
		$(oSelectVehiculo).addClass("error");
	}
	else{
		$(oSelectVehiculo).removeClass("error");
	}
	
	var oExpReg = /^[a-zA-Z\s\u00f1\u00d1\dáéíóúÁÉÍÓÚ\/\º\ª\.\,]{1,80}$/;
	oFormulario.txtDescripcion.value = oFormulario.txtDescripcion.value.trim();
	var oCampoDescripcion = oFormulario.txtDescripcion;
	if(!oExpReg.test(oCampoDescripcion.value)){
		if(bValidado)
			oCampoDescripcion.focus();
			
		bValidado = false;
		sErrores += "<p>El campo 'Descripción' tiene que tener entre 1 y 80 caráteres.</p>";
		$(oCampoDescripcion).addClass("error");
	}
	else{
		$(oCampoDescripcion).removeClass("error");
	}
	
	var arrayRespuesta = new Array(bValidado, sErrores);
	return arrayRespuesta;
}

function muestraAlerta(sMensaje){
	$("#dialogoAlertas").html(sMensaje).dialog("open");
}

function listarTodosLosClientes(){
	$.get("php/obtenerTodosLosClientesVersionTablaHTML.php", null, function(jqTabla, sEstatus, jqAjax){
		$(jqTabla).insertBefore($("#capaListados > input"));
		mostrarCapaListados();
	}, "html");
}

function listarTodosLosTiposDeOperaciones(){
	$.get("php/obtenerTodosLosTiposDeOperacionesVersionXML.php", null, function(jqXML, sEstatus, jqAjax){
		//contruir tabla html
		var sTabla="<table class='table table-hover'><thead><tr><th colspan='3'>TIPOS DE OPERACIONES</th></tr></thead><tbody>";
		var oDatos = jqXML.querySelector("datos");
		var tiposDeOperacion = oDatos.children;
		for(var i=0; i<tiposDeOperacion.length; i++){
			sTabla+="<tr>";
			sTabla+="<td>"+tiposDeOperacion[i].querySelector("id").innerHTML+"</td>";
			sTabla+="<td>"+tiposDeOperacion[i].querySelector("nombre").innerHTML+"</td>";
			sTabla+="<td>"+tiposDeOperacion[i].querySelector("importe").innerHTML+"</td>";
			sTabla+="</tr>"
		}
		sTabla+="</tbody></table>";
		$(sTabla).insertBefore($("#capaListados > input"));
		mostrarCapaListados();
	}, "xml");
}

function listarVehiculosPorFiltro(){
	$("#dialogoFiltrosVehiculos").dialog("open");
}

function listarReparacionesPorFiltro(){
	$("#dialogoFiltrosReparacion").dialog("open");
}

function mostrarCapaListados(){
	$("#capaListados").addClass("capa-listados-extended", 1500);
	$("#capaListados > input").removeClass("boton-invisible");
}

function ocultarCapaListados(){
	var jqBoton = $("<input type='button' value='CERRAR' class='btn btn-info btn-lg'/>");
	jqBoton.addClass("boton-invisible").click(ocultarCapaListados);
	$("#capaListados").removeClass("capa-listados-extended", 1500, function(){
		$(this).empty().append($(jqBoton));
	});
}