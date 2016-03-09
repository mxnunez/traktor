$("#formularioCliente input[type=button]").click(modificarCliente);

function modificarCliente(){
	var arrayValidar = validarFormularioCliente("modificar");
	if(arrayValidar[0]){
		var oFormulario = document.querySelector("#formularioCliente");
		var sDni = oFormulario.selectDni.options[oFormulario.selectDni.selectedIndex].value;
		var sNombre = oFormulario.txtNombre.value;
		var sApellidos = oFormulario.txtApellidos.value;
		var iTelefono = oFormulario.txtTelefono.value;
		var iProvincia = oFormulario.provincia.options[oFormulario.provincia.selectedIndex].value;
		
		var oCliente = new Cliente(sDni, sNombre, sApellidos, iTelefono, iProvincia);
		var sCliente = "cliente="+JSON.stringify(oCliente);
		$.ajax("php/modificarCliente.php", {
			async: true,
			cache: false,
			data: sCliente,
			dataType : 'text',
			method : 'POST',
			complete : function(jqAjax, sStatus){
				muestraAlerta(jqAjax.responseText);
				cargarFormularioModificarCliente();
			}
		});
	}
	else{
		muestraAlerta(arrayValidar[1]);
	}
}
