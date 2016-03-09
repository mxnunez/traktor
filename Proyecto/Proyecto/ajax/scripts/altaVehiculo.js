$("#formularioVehiculo input[type=button]").click(altaVehiculo);
var oAjaxAltaVehiculo = null;

function altaVehiculo(){
	var arrayValidar = validarFormularioVehiculo("alta");
	if(arrayValidar[0]){
		var sParametros = $("#formularioVehiculo").serialize();
		oAjaxAltaVehiculo = objetoXHR();
		oAjaxAltaVehiculo.open("POST", encodeURI("php/altaVehiculo.php"));
		oAjaxAltaVehiculo.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		oAjaxAltaVehiculo.addEventListener("readystatechange", tratarRespuestaAltaVehiculo, false);
		oAjaxAltaVehiculo.send(encodeURI(sParametros));
	}
	else{
		muestraAlerta(arrayValidar[1]);
	}
}

function tratarRespuestaAltaVehiculo(){
	if(oAjaxAltaVehiculo.readyState == 4 && oAjaxAltaVehiculo.status == 200){
		if(oAjaxAltaVehiculo.responseText=="Vehículo Añadido con Éxito.")
			$("#formularioVehiculo")[0].reset();
		
		muestraAlerta(oAjaxAltaVehiculo.responseText);
	}
}

function objetoXHR(){
        if (window.XMLHttpRequest){
            return new XMLHttpRequest();
        }else if (window.ActiveXObject){
            var versionesIE = new Array('Msxml2.XMLHTTP.5.0', 'Msxml2.XMLHTTP.4.0', 'Msxml2.XMLHTTP.3.0', 'Msxml2.XMLHTTP', 'Microsoft.XMLHTTP');
            for (var i = 0; i < versionesIE.length; i++) {
                try {
					return new ActiveXObject(versionesIE[i]);
                }
				catch (errorControlado){}
            }
        }
        throw new Error("No se pudo crear el objeto XMLHttpRequest");
}