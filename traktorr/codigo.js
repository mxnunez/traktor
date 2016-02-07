window.addEventListener("load", inicio, false);
var oModelo = null;
var compara="";
var oXML = null;

function inicio(){
	oModelo = new Modelo();
	ocultarTodosLosFormularios();
	
	//ALTAS
	var oBoton = document.querySelector("#btnMostrarFormAltaProveedor");
	oBoton.addEventListener("click", mostrarFormularioAltaProveedor, false);
	
	oBoton = document.querySelector("#btnMostrarFormAltaEmpleado");
	oBoton.addEventListener("click", mostrarFormularioAltaEmpleado, false);
	
	oBoton = document.querySelector("#btnMostrarFormAltaAseguradora");
	oBoton.addEventListener("click", mostrarFormularioAltaAseguradora, false);
	
	oBoton = document.querySelector("#btnMostrarFormAltaCliente");
	oBoton.addEventListener("click", mostrarFormularioAltaCliente, false);
	
	oBoton = document.querySelector("#btnMostrarFormAltaAveria");
	oBoton.addEventListener("click", mostrarFormularioAltaAveria, false);
	
	oBoton = document.querySelector("#btnMostrarFormAltaVehiculo");
	oBoton.addEventListener("click", mostrarFormularioAltaVehiculo, false);
	
	oBoton = document.querySelector("#btnMostrarFormAltaProducto");
	oBoton.addEventListener("click", mostrarFormularioAltaProducto, false);
	
	oBoton = document.querySelector("#btnMostrarFormAltaCategoria");
	oBoton.addEventListener("click", mostrarFormularioAltaCategoria, false);
	
	oBoton = document.querySelector("#btnMostrarFormAltaPresupuesto");
	oBoton.addEventListener("click", mostrarFormularioAltaPresupuesto, false);
	
	oBoton = document.querySelector("#btnMostrarFormAltaFactura");
	oBoton.addEventListener("click", mostrarFormularioAltaFactura, false);
	
	oBoton = document.querySelector("#btnMostrarFormAltaLinea");
	oBoton.addEventListener("click", mostrarFormularioAltaLinea, false);
	
	oBoton = document.querySelector("#formularioProveedor input[type='button']");
	oBoton.addEventListener("click", altaProveedor, false);
	
	oBoton = document.querySelector("#formularioEmpleado input[type='button']");
	oBoton.addEventListener("click", altaEmpleado, false);
	
	oBoton = document.querySelector("#formularioAseguradora input[type='button']");
	oBoton.addEventListener("click", altaAseguradora, false);
	
	oBoton = document.querySelector("#formularioCliente input[type='button']");
	oBoton.addEventListener("click", altaCliente, false);
	
	oBoton = document.querySelector("#formularioAveria input[type='button']");
	oBoton.addEventListener("click", altaAveria, false);
	
	oBoton = document.querySelector("#formularioVehiculo input[type='button']");
	oBoton.addEventListener("click", altaVehiculo, false);
	
	oBoton = document.querySelector("#formularioProducto input[type='button']");
	oBoton.addEventListener("click", altaProducto, false);
	
	oBoton = document.querySelector("#formularioCategoria input[type='button']");
	oBoton.addEventListener("click", altaCategoria, false);
	
	oBoton = document.querySelector("#formularioPresupuesto input[type='button']");
	oBoton.addEventListener("click", altaPresupuesto, false);
	
	oBoton = document.querySelector("#formularioFactura input[type='button']");
	oBoton.addEventListener("click", altaFactura, false);
	
	oBoton = document.querySelector("#formularioLinea input[type='button']");
	oBoton.addEventListener("click", altaLinea, false);
	
	//MOSTRAR
	oBoton = document.querySelector("#btnListarProveedor");
	oBoton.addEventListener("click", mostrarProveedor, false);
	
	oBoton = document.querySelector("#btnListarEmpleado");
	oBoton.addEventListener("click", mostrarEmpleado, false);
	
	oBoton = document.querySelector("#btnListarAseguradora");
	oBoton.addEventListener("click", mostrarAseguradora, false);
	
	oBoton = document.querySelector("#btnListarCliente");
	oBoton.addEventListener("click", mostrarCliente, false);
	
	oBoton = document.querySelector("#btnListarAveria");
	oBoton.addEventListener("click", mostrarAveria, false);
	
	oBoton = document.querySelector("#btnListarVehiculo");
	oBoton.addEventListener("click", mostrarVehiculo, false);
	
	oBoton = document.querySelector("#btnListarProducto");
	oBoton.addEventListener("click", mostrarProducto, false);
	
	oBoton = document.querySelector("#btnListarCategoria");
	oBoton.addEventListener("click", mostrarCategoria, false);
	
	oBoton = document.querySelector("#btnListarPresupuesto");
	oBoton.addEventListener("click", mostrarPresupuesto, false);
	
	oBoton = document.querySelector("#btnListarFactura");
	oBoton.addEventListener("click", mostrarFactura, false);
	
	oBoton = document.querySelector("#btnListarLinea");
	oBoton.addEventListener("click", mostrarLinea, false);
	//ALERTAS
	oBoton = document.querySelector("#alerta a");
	oBoton.addEventListener("click", ocultaMensaje, false);
	
	//CARGAR DATOS
	oBoton = document.querySelector("#btnCargarDatos");
	oBoton.addEventListener("click", cargarDatos, false);
}

function ocultarTodosLosFormularios(){
	var oFormularios = document.querySelectorAll("form");
	for(var i=0; i<oFormularios.length; i++){
		oFormularios[i].style.display = "none";
	}
}

function mostrarFormularioAltaProveedor(){ocultarTodosLosFormularios(); limpiarCampos(document.querySelector("#formularioProveedor")); document.querySelector("#formularioProveedor").style.display="block";}
function mostrarFormularioAltaEmpleado(){ocultarTodosLosFormularios();  limpiarCampos(document.querySelector("#formularioEmpleado")); document.querySelector("#formularioEmpleado").style.display="block";}
function mostrarFormularioAltaAseguradora(){ocultarTodosLosFormularios();  limpiarCampos(document.querySelector("#formularioAseguradora")); document.querySelector("#formularioAseguradora").style.display="block";}
function mostrarFormularioAltaCliente(){ocultarTodosLosFormularios();  limpiarCampos(document.querySelector("#formularioCliente")); document.querySelector("#formularioCliente").style.display="block";}
function mostrarFormularioAltaAveria(){ocultarTodosLosFormularios();  llenarSelectsAveria(); limpiarCampos(document.querySelector("#formularioAveria")); document.querySelector("#formularioAveria").style.display="block";}
function mostrarFormularioAltaVehiculo(){ocultarTodosLosFormularios();  llenarSelectsVehiculo(); limpiarCampos(document.querySelector("#formularioVehiculo")); document.querySelector("#formularioVehiculo").style.display="block";}
function mostrarFormularioAltaProducto(){ocultarTodosLosFormularios();  llenarSelectsProducto(); limpiarCampos(document.querySelector("#formularioProducto")); document.querySelector("#formularioProducto").style.display="block";}
function mostrarFormularioAltaCategoria(){ocultarTodosLosFormularios();  limpiarCampos(document.querySelector("#formularioCategoria")); document.querySelector("#formularioCategoria").style.display="block";}
function mostrarFormularioAltaPresupuesto(){ocultarTodosLosFormularios();  llenarSelectsPresupuesto(); limpiarCampos(document.querySelector("#formularioPresupuesto")); document.querySelector("#formularioPresupuesto").style.display="block";}
function mostrarFormularioAltaFactura(){ocultarTodosLosFormularios();  llenarSelectsFactura(); limpiarCampos(document.querySelector("#formularioFactura")); document.querySelector("#formularioFactura").style.display="block";}
function mostrarFormularioAltaLinea(){ocultarTodosLosFormularios();  llenarSelectsLinea(); limpiarCampos(document.querySelector("#formularioLinea")); document.querySelector("#formularioLinea").style.display="block";}

function cargarSelectVehiculos(){
	var oOptions = new Array();
	var oOption = document.createElement("OPTION");
	oOption.value = "-1";
	oOption.text =  "-- Seleccione un vehículo --";
	oOptions.push(oOption);
	
	var oVehiculos = oModelo.vehiculos;
	for(var i=0; i<oVehiculos.length; i++){
		var oOption = document.createElement("OPTION");
		oOption.value = oVehiculos[i].matricula;
		oOption.text =  "Vehículo: "+oVehiculos[i].matricula;
		oOptions.push(oOption);
	}
	return oOptions;
}
function cargarSelectEmpleados(){
	var oOptions = new Array();
	var oOption = document.createElement("OPTION");
	oOption.value = "-1";
	oOption.text =  "-- Seleccione un empleado --";
	oOptions.push(oOption);
	
	var oEmpleados = oModelo.empleados;
	for(var i=0; i<oEmpleados.length; i++){
		var oOption = document.createElement("OPTION");
		oOption.value = oEmpleados[i].dni;
		oOption.text =  "Empleado: "+oEmpleados[i].dni+" - "+oEmpleados[i].nombre;
		oOptions.push(oOption);
	}
	return oOptions;
}
function cargarSelectCategorias(){
	var oOptions = new Array();
	var oOption = document.createElement("OPTION");
	oOption.value = "-1";
	oOption.text =  "-- Seleccione una categoría --";
	oOptions.push(oOption);
	
	var oCategorias = oModelo.categorias;
	for(var i=0; i<oCategorias.length; i++){
		var oOption = document.createElement("OPTION");
		oOption.value = oCategorias[i].id;
		oOption.text =  "Categoría: "+oCategorias[i].id+" - "+oCategorias[i].nombre;
		oOptions.push(oOption);
	}
	return oOptions;
}
function cargarSelectAseguradoras(){
	var oOptions = new Array();
	var oOption = document.createElement("OPTION");
	oOption.value = "-1";
	oOption.text =  "-- Seleccione una aseguradora --";
	oOptions.push(oOption);
	
	var oAseguradoras = oModelo.aseguradoras;
	for(var i=0; i<oAseguradoras.length; i++){
		var oOption = document.createElement("OPTION");
		oOption.value = oAseguradoras[i].id;
		oOption.text =  "Aseguradora: "+oAseguradoras[i].id+" - "+oAseguradoras[i].nombre;
		oOptions.push(oOption);
	}
	return oOptions;
}
function cargarSelectProveedores(){
	var oOptions = new Array();
	var oOption = document.createElement("OPTION");
	oOption.value = "-1";
	oOption.text =  "-- Seleccione un proveedor --";
	oOptions.push(oOption);
	
	var oProveedores = oModelo.proveedores;
	for(var i=0; i<oProveedores.length; i++){
		var oOption = document.createElement("OPTION");
		oOption.value = oProveedores[i].nif;
		oOption.text =  "Proveedor: "+oProveedores[i].nif+" - "+oProveedores[i].nombre;
		oOptions.push(oOption);
	}
	return oOptions;
}
function cargarSelectLineas(){
	var oOptions = new Array();
	var oOption = document.createElement("OPTION");
	oOption.value = "-1";
	oOption.text =  "-- Seleccione una línea --";
	oOptions.push(oOption);
	
	var oLineas = oModelo.lineasProductos;
	for(var i=0; i<oLineas.length; i++){
		var oOption = document.createElement("OPTION");
		oOption.value = oLineas[i].id;
		oOption.text =  "Línea: "+oLineas[i].id;
		oOptions.push(oOption);
	}
	return oOptions;
}
function cargarSelectAverias(){
	var oOptions = new Array();
	var oOption = document.createElement("OPTION");
	oOption.value = "-1";
	oOption.text =  "-- Seleccione una avería --";
	oOptions.push(oOption);
	
	var oAverias = oModelo.averias;
	for(var i=0; i<oAverias.length; i++){
		var oOption = document.createElement("OPTION");
		oOption.value = oAverias[i].id;
		oOption.text =  "Avería: "+oAverias[i].id;
		oOptions.push(oOption);
	}
	return oOptions;
}
function cargarSelectPresupuestos(){
	var oOptions = new Array();
	var oOption = document.createElement("OPTION");
	oOption.value = "-1";
	oOption.text =  "-- Seleccione un presupuesto --";
	oOptions.push(oOption);
	
	var oPresupuestos = oModelo.presupuestos;
	for(var i=0; i<oPresupuestos.length; i++){
		var oOption = document.createElement("OPTION");
		oOption.value = oPresupuestos[i].id;
		oOption.text =  "Presupuesto: "+oPresupuestos[i].id;
		oOptions.push(oOption);
	}
	return oOptions;
}
function cargarSelectClientes(){
	var oOptions = new Array();
	var oOption = document.createElement("OPTION");
	oOption.value = "-1";
	oOption.text =  "-- Seleccione un cliente --";
	oOptions.push(oOption);
	
	var oClientes = oModelo.clientes;
	for(var i=0; i<oClientes.length; i++){
		var oOption = document.createElement("OPTION");
		oOption.value = oClientes[i].dni;
		oOption.text =  "Cliente: "+oClientes[i].dni+" - "+oClientes[i].nombre;
		oOptions.push(oOption);
	}
	return oOptions;
}
function cargarSelectProductos(){
	var oOptions = new Array();
	var oOption = document.createElement("OPTION");
	oOption.value = "-1";
	oOption.text =  "-- Seleccione un producto --";
	oOptions.push(oOption);
	
	var oProductos = oModelo.productos;
	for(var i=0; i<oProductos.length; i++){
		var oOption = document.createElement("OPTION");
		oOption.value = oProductos[i].id;
		oOption.text =  "Producto: "+oProductos[i].id+" - "+oProductos[i].nombre;
		oOptions.push(oOption);
	}
	return oOptions;
}

function llenarSelectsAveria(){
	var oFormulario = document.querySelector("#formularioAveria");
	var oOptions = oFormulario.querySelectorAll("select option");
	oOptions = Array.prototype.slice.call(oOptions);
	for(var i=0; i<oOptions.length; i++){
		oOptions[i].remove();
	}
	
	var oSelectVehiculos = oFormulario.selectMatriculaVehiculo;
	var oOptionsVehiculo = cargarSelectVehiculos();
	for(var i=0; i<oOptionsVehiculo.length; i++){
		oSelectVehiculos.appendChild(oOptionsVehiculo[i]);
	}
	
	var oSelectEmpleados = oFormulario.selectDniEmpleado;
	var oOptionsEmpleados = cargarSelectEmpleados();
	for(var i=0; i<oOptionsEmpleados.length; i++){
		oSelectEmpleados.appendChild(oOptionsEmpleados[i]);
	}
}

function llenarSelectsVehiculo(){
	var oFormulario = document.querySelector("#formularioVehiculo");
	var oOptions = oFormulario.querySelectorAll("select option");
	oOptions = Array.prototype.slice.call(oOptions);
	for(var i=0; i<oOptions.length; i++){
		oOptions[i].remove();
	}
	
	var oSelectCategorias = oFormulario.selectIdCategoria;
	var oOptionsCategorias = cargarSelectCategorias();
	for(var i=0; i<oOptionsCategorias.length; i++){
		oSelectCategorias.appendChild(oOptionsCategorias[i]);
	}
	
	var oSelectAseguradoras = oFormulario.selectIdAseguradora;
	var oOptionsAseguradoras = cargarSelectAseguradoras();
	for(var i=0; i<oOptionsAseguradoras.length; i++){
		oSelectAseguradoras.appendChild(oOptionsAseguradoras[i]);
	}
	
	var oSelectClientes = oFormulario.selectDniCliente;
	var oOptionsClientes = cargarSelectClientes();
	for(var i=0; i<oOptionsClientes.length; i++){
		oSelectClientes.appendChild(oOptionsClientes[i]);
	}
}

function llenarSelectsProducto(){
	var oFormulario = document.querySelector("#formularioProducto");
	var oOptions = oFormulario.querySelectorAll("select option");
	oOptions = Array.prototype.slice.call(oOptions);
	for(var i=0; i<oOptions.length; i++){
		oOptions[i].remove();
	}
	
	var oSelectProveedores = oFormulario.selectDniProveedor;
	var oOptionsProveedores = cargarSelectProveedores();
	
	for(var i=0; i<oOptionsProveedores.length; i++){
		oSelectProveedores.appendChild(oOptionsProveedores[i]);
	}
}

function llenarSelectsPresupuesto(){
	var oFormulario = document.querySelector("#formularioPresupuesto");
	var oOptions = oFormulario.querySelectorAll("select option");
	oOptions = Array.prototype.slice.call(oOptions);
	for(var i=0; i<oOptions.length; i++){
		oOptions[i].remove();
	}
	
	var oSelectLineas = oFormulario.selectIdLinea;
	var oOptionsLineas = cargarSelectLineas();
	for(var i=0; i<oOptionsLineas.length; i++){
		oSelectLineas.appendChild(oOptionsLineas[i]);
	}
	
	var oSelectAverias = oFormulario.selectIdAveria;
	var oOptionsAverias = cargarSelectAverias();
	for(var i=0; i<oOptionsAverias.length; i++){
		oSelectAverias.appendChild(oOptionsAverias[i]);
	}
}

function llenarSelectsFactura(){
	var oFormulario = document.querySelector("#formularioFactura");
	var oOptions = oFormulario.querySelectorAll("select option");
	oOptions = Array.prototype.slice.call(oOptions);
	for(var i=0; i<oOptions.length; i++){
		oOptions[i].remove();
	}
	
	var oSelectPresupuestos = oFormulario.selectIdPresupuesto;
	var oOptionsPresupuestos = cargarSelectPresupuestos();
	for(var i=0; i<oOptionsPresupuestos.length; i++){
		oSelectPresupuestos.appendChild(oOptionsPresupuestos[i]);
	}
	
	var oSelectClientes = oFormulario.selectDniCliente;
	var oOptionsClientes = cargarSelectClientes();
	for(var i=0; i<oOptionsClientes.length; i++){
		oSelectClientes.appendChild(oOptionsClientes[i]);
	}
}

function llenarSelectsLinea(){
	var oFormulario = document.querySelector("#formularioLinea");
	var oOptions = oFormulario.querySelectorAll("select option");
	oOptions = Array.prototype.slice.call(oOptions);
	for(var i=0; i<oOptions.length; i++){
		oOptions[i].remove();
	}
	
	var oSelectProductos = oFormulario.selectIdProducto;
	var oOptionsProductos = cargarSelectProductos();
	for(var i=0; i<oOptionsProductos.length; i++){
		oSelectProductos.appendChild(oOptionsProductos[i]);
	}
}

function texto(sTexto){
	return document.createTextNode(sTexto);
}

function creaTabla(sTitulo, arrayCabecera, arrayCuerpo){
	var oTabla = document.createElement("table");
		oTabla.classList.add("table");
		oTabla.classList.add("table-hover");
	var oTHead = document.createElement("thead");
	var oTBody = document.createElement("tbody");
		
	oTabla.appendChild(oTHead);
	var oFila= oTHead.insertRow(-1);
	var oCelda = oFila.insertCell(-1);
	oCelda.appendChild(texto(sTitulo));
	oCelda.setAttribute("colspan", arrayCabecera.length);
	var oFila = oTHead.insertRow(-1);
	for(var i=0; i<arrayCabecera.length; i++){
		var oCelda = oFila.insertCell(-1);
		oCelda.appendChild(texto(arrayCabecera[i]));
	}
	oFila.insertCell(-1);
	oTabla.appendChild(oTBody);
	for(var i=0; i<arrayCuerpo.length; i++){
		var oFila = oTBody.insertRow(-1);
		var oCelda;
		
		for(var j=0; j < arrayCuerpo[i].length; j++)
		{
			oCelda = oFila.insertCell(-1);
			var oCampo = document.createElement("input");
			oCampo.addEventListener("keyup", habilitaGuardado, false);
			oCampo.setAttribute("type","text");
			oCampo.classList.add("form-control");
			oCampo.value=arrayCuerpo[i][j];
			oCampo.disabled = true;
			oCelda.appendChild(oCampo);
			
		}
		oFila.insertCell(-1);
	}
	
	return oTabla;
}

function limpiarCampos(oFormulario)
{
	var oFormulario=oFormulario;
	
	for(var i=0;i<oFormulario.elements.length;i++){
		if(oFormulario.elements[i].nodeName=="TEXTAREA")
		{
			oFormulario.elements[i].value="";
		}
		
		else if(oFormulario.elements[i].nodeName=="SELECT")
				oFormulario.elements[i].options.selectedIndex = 0;
		
		else{
			if(oFormulario.elements[i].getAttribute("type")=="text")
				oFormulario.elements[i].value="";
			else if(oFormulario.elements[i].getAttribute("type")=="checkbox")
				oFormulario.elements[i].checked=false;
		}	
		oFormulario.elements[i].classList.remove("error");
	}
}

function altaProveedor(){
	var oFormulario = document.querySelector("#formularioProveedor");
	var bValidado = true;
	var arrayErrores = new Array();
	
	oFormulario.elements[0].value = oFormulario.elements[0].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[0].value);
	if(!oValidacion.validarDni()){
		if(bValidado)
			oFormulario.elements[0].focus();
		
		bValidado = false;
		oFormulario.elements[0].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato del DNI debe ser 12345678A.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[0].classList.remove("error");
	}
	
	oFormulario.elements[1].value = oFormulario.elements[1].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[1].value);
	if(!oValidacion.validarNombre()){
		if(bValidado)
			oFormulario.elements[1].focus();
		
		bValidado = false;
		oFormulario.elements[1].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato del nombre debe tener entre 2 y 40 carácteres no numéricos.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[1].classList.remove("error");
	}
	
	oFormulario.elements[2].value = oFormulario.elements[2].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[2].value);
	if(!oValidacion.validarDireccion()){
		if(bValidado)
			oFormulario.elements[2].focus();
		
		bValidado = false;
		oFormulario.elements[2].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato de la dirección debe tener entre 5 y 80 carácteres.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[2].classList.remove("error");
	}
	
	oFormulario.elements[3].value = oFormulario.elements[3].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[3].value);
	if(!oValidacion.validarTelefono()){
		if(bValidado)
			oFormulario.elements[3].focus();
		
		bValidado = false;
		oFormulario.elements[3].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato del teléfono debe ser de 9 dígitos.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[3].classList.remove("error");
	}
	
	oFormulario.elements[4].value = oFormulario.elements[4].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[4].value);
	if(!oValidacion.validarEmail()){
		if(bValidado)
			oFormulario.elements[4].focus();
		
		bValidado = false;
		oFormulario.elements[4].classList.add("error");
		
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato del email no es válido.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[4].classList.remove("error");
	}
	
	oFormulario.elements[5].value = oFormulario.elements[5].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[5].value);
	if(!oValidacion.validarWeb()){
		if(bValidado)
			oFormulario.elements[5].focus();
		
		bValidado = false;
		oFormulario.elements[5].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato de la web debe ser 'www.miweb.abc'.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[5].classList.remove("error");
	}
	
	oFormulario.elements[6].value = oFormulario.elements[6].value.trim();
	if(oFormulario.elements[6].value==""){
		if(bValidado)
			oFormulario.elements[6].focus();
		
		bValidado = false;
		oFormulario.elements[6].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- La descripción no puede estar vacía.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[6].classList.remove("error");
	}
	
	if(bValidado){
		if(oFormulario.elements[0].value==oModelo.buscarProveedor(oFormulario.elements[0].value).nif){
			var oParrafo = document.createElement("P");
			var oTexto = texto("- Este proveedor ya ha sido almacenado.");
			oParrafo.appendChild(oTexto);
			var arrayMensaje=new Array(oParrafo);
			var sColor="red";
			var sTitulo="PROVEEDOR YA ALMACENADO";
		}
		else{
			var sNif = oFormulario.elements[0].value;
			var sNombre = oFormulario.elements[1].value;
			var sDireccion = oFormulario.elements[2].value;
			var iTelefono = oFormulario.elements[3].value;
			var sEmail = oFormulario.elements[4].value;
			var sWeb = oFormulario.elements[5].value;
			var sDescripcion = oFormulario.elements[6].value;
			var oProveedor = new Proveedor(sNif, sNombre, sDireccion, iTelefono, sEmail, sDescripcion, sWeb);
			oModelo.proveedores.push(oProveedor);
			var oParrafo = document.createElement("P");
			var oTexto = texto("- Proveedor insertado con éxito.");
			oParrafo.appendChild(oTexto);
			var sTitulo = "SUCCESSFULLY!"
			var sColor = "green";
			var arrayMensaje = new Array(oParrafo);
			limpiarCampos(oFormulario);
		}
	}
	else{
		var arrayMensaje=arrayErrores;
		var sColor="red";
		var sTitulo="CAMPOS ERRÓNEOS";
	}
	muestraMensaje(sTitulo,sColor,arrayMensaje);
}

function mostrarProveedor(){
	compara="";
	ocultarTodosLosFormularios();
	var oTabla=oModelo.proveedoresToHTMLTable();
	var oFilas=oTabla.querySelectorAll("tr");
	for(var i=2; i<oFilas.length; i++)
	{
		var btnBorrar = document.createElement("button");
			btnBorrar.setAttribute("type","button");
			btnBorrar.classList.add("borrar");
			btnBorrar.classList.add("btn");
			btnBorrar.classList.add("btn-danger");
			var oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-remove");
			btnBorrar.appendChild(oSpan);
			btnBorrar.addEventListener("click", borrarProveedor, false);
		var btnEditar = document.createElement("button");
			btnEditar.setAttribute("type","button");
			btnEditar.classList.add("editar");
			btnEditar.classList.add("btn");
			btnEditar.classList.add("btn-success");
			oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-pencil");
			btnEditar.appendChild(oSpan);
			btnEditar.addEventListener("click", editar, false);
			
		var btnGuardar = document.createElement("button");
			btnGuardar.setAttribute("type","button");
			btnGuardar.classList.add("btn");
			btnGuardar.classList.add("guardar");
			oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-floppy-disk");
			btnGuardar.addEventListener("click", guardarProveedor, false);
			btnGuardar.appendChild(oSpan);
			btnGuardar.setAttribute("disabled","disabled");
			
		
		oFilas[i].lastChild.appendChild(btnGuardar);
		oFilas[i].lastChild.appendChild(btnEditar);
		oFilas[i].lastChild.appendChild(btnBorrar);
		
	}
	
	var oFormulario=document.querySelector("#formuListar");
	var oElementosFormulario = Array.prototype.slice.call(oFormulario.children);
	for(var i=0; i<oElementosFormulario.length; i++)
		oElementosFormulario[i].remove();
		
	oFormulario.appendChild(oTabla);
	oFormulario.style.display="block";
}

function altaEmpleado(){
	var oFormulario = document.querySelector("#formularioEmpleado");
	var bValidado = true;
	var arrayErrores = new Array();
	
	oFormulario.elements[0].value = oFormulario.elements[0].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[0].value);
	if(!oValidacion.validarDni()){
		if(bValidado)
			oFormulario.elements[0].focus();
		
		bValidado = false;
		oFormulario.elements[0].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato del DNI debe ser '12345678A'.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[0].classList.remove("error");
	}
	
	oFormulario.elements[1].value = oFormulario.elements[1].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[1].value);
	if(!oValidacion.validarNombre()){
		if(bValidado)
			oFormulario.elements[1].focus();
		
		bValidado = false;
		oFormulario.elements[1].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato del nombre debe tener entre 2 y 40 carácteres no numéricos.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[1].classList.remove("error");
	}
	
	oFormulario.elements[2].value = oFormulario.elements[2].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[2].value);
	if(!oValidacion.validarApellidos()){
		if(bValidado)
			oFormulario.elements[2].focus();
		
		bValidado = false;
		oFormulario.elements[2].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato de los apellidos debe tener entre 2 y 60 carácteres no numéricos.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[2].classList.remove("error");
	}
	
	oFormulario.elements[3].value = oFormulario.elements[3].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[3].value);
	if(!oValidacion.validarDepartamento()){
		if(bValidado)
			oFormulario.elements[3].focus();
		
		bValidado = false;
		oFormulario.elements[3].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato del número de departamento debe tener entre 1 o 2 dígitos.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[3].classList.remove("error");
	}
	
	if(bValidado){
		if(oFormulario.elements[0].value==oModelo.buscarEmpleado(oFormulario.elements[0].value).dni){
			var oParrafo = document.createElement("P");
			var oTexto = texto("- Este empleado ya ha sido almacenado.");
			oParrafo.appendChild(oTexto);
			var arrayMensaje=new Array(oParrafo);
			var sColor="red";
			var sTitulo="EMPLEADO YA ALMACENADO";
		}
		else{
			var sDni = oFormulario.elements[0].value;
			var sNombre = oFormulario.elements[1].value;
			var sApellidos = oFormulario.elements[2].value;
			var iDepartamento = oFormulario.elements[3].value;
			var oEmpleado = new Empleado(sDni, sNombre, sApellidos, iDepartamento);
			oModelo.empleados.push(oEmpleado);
			var oParrafo = document.createElement("P");
			var oTexto = texto("- Empleado insertado con éxito.");
			oParrafo.appendChild(oTexto);
			var sTitulo = "SUCCESSFULLY!"
			var sColor = "green";
			var arrayMensaje = new Array(oParrafo);
			limpiarCampos(oFormulario);
		}
	}
	else{
		var arrayMensaje=arrayErrores;
		var sColor="red";
		var sTitulo="CAMPOS ERRÓNEOS";
	}
	muestraMensaje(sTitulo,sColor,arrayMensaje);
}

function mostrarEmpleado(){
	compara="";
	ocultarTodosLosFormularios();
	var oTabla=oModelo.empleadosToHTMLTable();
	var oFilas=oTabla.querySelectorAll("tr");
	for(var i=2; i<oFilas.length; i++)
	{
		var btnBorrar = document.createElement("button");
			btnBorrar.setAttribute("type","button");
			btnBorrar.classList.add("borrar");
			btnBorrar.classList.add("btn");
			btnBorrar.classList.add("btn-danger");
			var oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-remove");
			btnBorrar.appendChild(oSpan);
			btnBorrar.addEventListener("click", borrarEmpleado, false);
		var btnEditar = document.createElement("button");
			btnEditar.setAttribute("type","button");
			btnEditar.classList.add("editar");
			btnEditar.classList.add("btn");
			btnEditar.classList.add("btn-success");
			oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-pencil");
			btnEditar.appendChild(oSpan);
			btnEditar.addEventListener("click", editar, false);
			
		var btnGuardar = document.createElement("button");
			btnGuardar.setAttribute("type","button");
			btnGuardar.classList.add("btn");
			btnGuardar.classList.add("guardar");
			oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-floppy-disk");
			btnGuardar.addEventListener("click", guardarEmpleado, false);
			btnGuardar.appendChild(oSpan);
			btnGuardar.setAttribute("disabled","disabled");
			
		
		oFilas[i].lastChild.appendChild(btnGuardar);
		oFilas[i].lastChild.appendChild(btnEditar);
		oFilas[i].lastChild.appendChild(btnBorrar);
		
	}
	
	var oFormulario=document.querySelector("#formuListar");
	var oElementosFormulario = Array.prototype.slice.call(oFormulario.children);
	for(var i=0; i<oElementosFormulario.length; i++)
		oElementosFormulario[i].remove();
		
	oFormulario.appendChild(oTabla);
	oFormulario.style.display="block";
}

function altaAseguradora(){
	var oFormulario = document.querySelector("#formularioAseguradora");
	var bValidado = true;
	var arrayErrores = new Array();
	
	oFormulario.elements[0].value = oFormulario.elements[0].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[0].value);
	if(!oValidacion.validarId()){
		if(bValidado)
			oFormulario.elements[0].focus();
		
		bValidado = false;
		oFormulario.elements[0].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato del ID debe contar con 4 dígitos.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[0].classList.remove("error");
	}
	
	oFormulario.elements[1].value = oFormulario.elements[1].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[1].value);
	if(!oValidacion.validarNombre()){
		if(bValidado)
			oFormulario.elements[1].focus();
		
		bValidado = false;
		oFormulario.elements[1].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato del nombre debe tener entre 2 y 40 carácteres no numéricos.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[1].classList.remove("error");
	}
	
	oFormulario.elements[2].value = oFormulario.elements[2].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[2].value);
	if(!oValidacion.validarTelefono()){
		if(bValidado)
			oFormulario.elements[2].focus();
		
		bValidado = false;
		oFormulario.elements[2].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato del teléfono debe ser de 9 dígitos.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[2].classList.remove("error");
	}
	
	oFormulario.elements[3].value = oFormulario.elements[3].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[3].value);
	if(!oValidacion.validarEmail()){
		if(bValidado)
			oFormulario.elements[3].focus();
		
		bValidado = false;
		oFormulario.elements[3].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato del email no es válido.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[3].classList.remove("error");
	}
	
	if(bValidado){
		if(oFormulario.elements[0].value==oModelo.buscarAseguradora(oFormulario.elements[0].value).id){
			var oParrafo = document.createElement("P");
			var oTexto = texto("- Esta aseguradora ya ha sido almacenada.");
			oParrafo.appendChild(oTexto);
			var arrayMensaje=new Array(oParrafo);
			var sColor="red";
			var sTitulo="ASEGURADORA YA ALMACENADO";
		}
		else{
			var iId = oFormulario.elements[0].value;
			var sNombre = oFormulario.elements[1].value;
			var iTelefono = oFormulario.elements[2].value;
			var sEmail = oFormulario.elements[3].value;
			var oAseguradora = new Aseguradora(iId, sNombre, iTelefono, sEmail);
			oModelo.aseguradoras.push(oAseguradora);
			var oParrafo = document.createElement("P");
			var oTexto = texto("- Aseguradora insertada con éxito.");
			oParrafo.appendChild(oTexto);
			var sTitulo = "SUCCESSFULLY!"
			var sColor = "green";
			var arrayMensaje = new Array(oParrafo);
			limpiarCampos(oFormulario);
		}
	}
	else{
		var arrayMensaje=arrayErrores;
		var sColor="red";
		var sTitulo="CAMPOS ERRÓNEOS";
	}
	muestraMensaje(sTitulo,sColor,arrayMensaje);
}

function mostrarAseguradora(){
	compara="";
	ocultarTodosLosFormularios();
	var oTabla=oModelo.aseguradorasToHTMLTable();
	var oFilas=oTabla.querySelectorAll("tr");
	for(var i=2; i<oFilas.length; i++)
	{
		var btnBorrar = document.createElement("button");
			btnBorrar.setAttribute("type","button");
			btnBorrar.classList.add("borrar");
			btnBorrar.classList.add("btn");
			btnBorrar.classList.add("btn-danger");
			var oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-remove");
			btnBorrar.appendChild(oSpan);
			btnBorrar.addEventListener("click", borrarAseguradora, false);
		var btnEditar = document.createElement("button");
			btnEditar.setAttribute("type","button");
			btnEditar.classList.add("editar");
			btnEditar.classList.add("btn");
			btnEditar.classList.add("btn-success");
			oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-pencil");
			btnEditar.appendChild(oSpan);
			btnEditar.addEventListener("click", editar, false);
			
		var btnGuardar = document.createElement("button");
			btnGuardar.setAttribute("type","button");
			btnGuardar.classList.add("btn");
			btnGuardar.classList.add("guardar");
			oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-floppy-disk");
			btnGuardar.addEventListener("click", guardarAseguradora, false);
			btnGuardar.appendChild(oSpan);
			btnGuardar.setAttribute("disabled","disabled");
			
		
		oFilas[i].lastChild.appendChild(btnGuardar);
		oFilas[i].lastChild.appendChild(btnEditar);
		oFilas[i].lastChild.appendChild(btnBorrar);
		
	}
	
	var oFormulario=document.querySelector("#formuListar");
	var oElementosFormulario = Array.prototype.slice.call(oFormulario.children);
	for(var i=0; i<oElementosFormulario.length; i++)
		oElementosFormulario[i].remove();
		
	oFormulario.appendChild(oTabla);
	oFormulario.style.display="block";
}

function altaCliente(){
	var oFormulario = document.querySelector("#formularioCliente");
	var bValidado = true;
	var arrayErrores = new Array();
	
	oFormulario.elements[0].value = oFormulario.elements[0].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[0].value);
	if(!oValidacion.validarDni()){
		if(bValidado)
			oFormulario.elements[0].focus();
		
		bValidado = false;
		oFormulario.elements[0].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato del DNI debe ser '12345678A'.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[0].classList.remove("error");
	}
	
	oFormulario.elements[1].value = oFormulario.elements[1].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[1].value);
	if(!oValidacion.validarNombre()){
		if(bValidado)
			oFormulario.elements[1].focus();
		
		bValidado = false;
		oFormulario.elements[1].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato del nombre debe tener entre 2 y 40 carácteres no numéricos.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[1].classList.remove("error");
	}
	
	oFormulario.elements[2].value = oFormulario.elements[2].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[2].value);
	if(!oValidacion.validarApellidos()){
		if(bValidado)
			oFormulario.elements[2].focus();
		
		bValidado = false;
		oFormulario.elements[2].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato de los apellidos debe tener entre 2 y 60 carácteres no numéricos.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[2].classList.remove("error");
	}
	
	oFormulario.elements[3].value = oFormulario.elements[3].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[3].value);
	if(!oValidacion.validarTelefono()){
		if(bValidado)
			oFormulario.elements[3].focus();
		
		bValidado = false;
		oFormulario.elements[3].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato del teléfono debe ser de 9 dígitos.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[3].classList.remove("error");
	}
	
	oFormulario.elements[4].value = oFormulario.elements[4].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[4].value);
	if(!oValidacion.validarDireccion()){
		if(bValidado)
			oFormulario.elements[4].focus();
		
		bValidado = false;
		oFormulario.elements[4].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato de la dirección debe tener entre 5 y 80 carácteres.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[4].classList.remove("error");
	}
	
	oFormulario.elements[5].value = oFormulario.elements[5].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[5].value);
	if(!oValidacion.validarEmail()){
		if(bValidado)
			oFormulario.elements[5].focus();
		
		bValidado = false;
		oFormulario.elements[5].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato del email no es válido.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[5].classList.remove("error");
	}
	
	if(bValidado){
		if(oFormulario.elements[0].value==oModelo.buscarCliente(oFormulario.elements[0].value).dni){
			var oParrafo = document.createElement("P");
			var oTexto = texto("- Este cliente ya ha sido almacenado.");
			oParrafo.appendChild(oTexto);
			var arrayMensaje=new Array(oParrafo);
			var sColor="red";
			var sTitulo="CLIENTE YA ALMACENADO";
		}
		else{
			var sDni = oFormulario.elements[0].value;
			var sNombre = oFormulario.elements[1].value;
			var sApellidos = oFormulario.elements[2].value;
			var iTelefono = oFormulario.elements[3].value;
			var sDireccion = oFormulario.elements[4].value;
			var sEmail = oFormulario.elements[5].value;
			
			var oCliente = new Cliente(sDni, sNombre, sApellidos, iTelefono, sDireccion, sEmail);
			oModelo.clientes.push(oCliente);
			var oParrafo = document.createElement("P");
			var oTexto = texto("- Cliente insertado con éxito.");
			oParrafo.appendChild(oTexto);
			var sTitulo = "SUCCESSFULLY!"
			var sColor = "green";
			var arrayMensaje = new Array(oParrafo);
			limpiarCampos(oFormulario);
		}
	}
	else{
		var arrayMensaje=arrayErrores;
		var sColor="red";
		var sTitulo="CAMPOS ERRÓNEOS";
	}
	muestraMensaje(sTitulo,sColor,arrayMensaje);
}

function mostrarCliente(){
	compara="";
	ocultarTodosLosFormularios();
	var oTabla=oModelo.clientesToHTMLTable();
	var oFilas=oTabla.querySelectorAll("tr");
	for(var i=2; i<oFilas.length; i++)
	{
		var btnBorrar = document.createElement("button");
			btnBorrar.setAttribute("type","button");
			btnBorrar.classList.add("borrar");
			btnBorrar.classList.add("btn");
			btnBorrar.classList.add("btn-danger");
			var oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-remove");
			btnBorrar.appendChild(oSpan);
			btnBorrar.addEventListener("click", borrarCliente, false);
		var btnEditar = document.createElement("button");
			btnEditar.setAttribute("type","button");
			btnEditar.classList.add("editar");
			btnEditar.classList.add("btn");
			btnEditar.classList.add("btn-success");
			oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-pencil");
			btnEditar.appendChild(oSpan);
			btnEditar.addEventListener("click", editar, false);
			
		var btnGuardar = document.createElement("button");
			btnGuardar.setAttribute("type","button");
			btnGuardar.classList.add("btn");
			btnGuardar.classList.add("guardar");
			oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-floppy-disk");
			btnGuardar.addEventListener("click", guardarCliente, false);
			btnGuardar.appendChild(oSpan);
			btnGuardar.setAttribute("disabled","disabled");
			
		
		oFilas[i].lastChild.appendChild(btnGuardar);
		oFilas[i].lastChild.appendChild(btnEditar);
		oFilas[i].lastChild.appendChild(btnBorrar);
		
	}
	
	var oFormulario=document.querySelector("#formuListar");
	var oElementosFormulario = Array.prototype.slice.call(oFormulario.children);
	for(var i=0; i<oElementosFormulario.length; i++)
		oElementosFormulario[i].remove();
		
	oFormulario.appendChild(oTabla);
	oFormulario.style.display="block";
}

function altaAveria(){
	var oFormulario = document.querySelector("#formularioAveria");
	var bValidado = true;
	var arrayErrores = new Array();
	
	oFormulario.elements[0].value = oFormulario.elements[0].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[0].value);
	if(!oValidacion.validarId()){
		if(bValidado)
			oFormulario.elements[0].focus();
		
		bValidado = false;
		oFormulario.elements[0].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato del ID debe contar con 4 dígitos.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[0].classList.remove("error");
	}
	
	if(oFormulario.elements[1].selectedIndex == 0){
		if(bValidado)
			oFormulario.elements[1].focus();
		
		bValidado = false;
		oFormulario.elements[1].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- Debe seleccionar un vehículo.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[1].classList.remove("error");
	}
	
	if(oFormulario.elements[2].selectedIndex == 0){
		if(bValidado)
			oFormulario.elements[2].focus();
		
		bValidado = false;
		oFormulario.elements[2].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- Debe seleccionar un empleado.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[2].classList.remove("error");
	}
	
	if(oFormulario.elements[3].value==""){
		if(bValidado)
			oFormulario.elements[3].focus();
		
		bValidado = false;
		oFormulario.elements[3].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- La descripción no puede estar vacía.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[3].classList.remove("error");
	}
	
	if(bValidado){
		if(oFormulario.elements[0].value==oModelo.buscarAveria(oFormulario.elements[0].value).id){
			var oParrafo = document.createElement("P");
			var oTexto = texto("- Esta avería ya ha sido almacenada.");
			oParrafo.appendChild(oTexto);
			var arrayMensaje=new Array(oParrafo);
			var sColor="red";
			var sTitulo="AVERÍA YA ALMACENADA";
		}
		else{
			var iId = oFormulario.elements[0].value;
			var sMatricula = oFormulario.elements[1].options[oFormulario.elements[1].selectedIndex].value;
			var sDniEmpleado = oFormulario.elements[2].options[oFormulario.elements[2].selectedIndex].value;
			var sDescripcion = oFormulario.elements[3].value;
			
			var oAveria = new Averia(iId, sMatricula, sDniEmpleado, sDescripcion);
			oModelo.averias.push(oAveria);
			var oParrafo = document.createElement("P");
			var oTexto = texto("- Avería insertada con éxito.");
			oParrafo.appendChild(oTexto);
			var sTitulo = "SUCCESSFULLY!"
			var sColor = "green";
			var arrayMensaje = new Array(oParrafo);
			limpiarCampos(oFormulario);
		}
	}
	else{
		var arrayMensaje=arrayErrores;
		var sColor="red";
		var sTitulo="CAMPOS ERRÓNEOS";
	}
	muestraMensaje(sTitulo,sColor,arrayMensaje);
}

function mostrarAveria(){
	compara="";
	ocultarTodosLosFormularios();
	var oTabla=oModelo.averiasToHTMLTable();
	var oFilas=oTabla.querySelectorAll("tr");
	for(var i=2; i<oFilas.length; i++)
	{
		var btnBorrar = document.createElement("button");
			btnBorrar.setAttribute("type","button");
			btnBorrar.classList.add("borrar");
			btnBorrar.classList.add("btn");
			btnBorrar.classList.add("btn-danger");
			var oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-remove");
			btnBorrar.appendChild(oSpan);
			btnBorrar.addEventListener("click", borrarAveria, false);
		var btnEditar = document.createElement("button");
			btnEditar.setAttribute("type","button");
			btnEditar.classList.add("editar");
			btnEditar.classList.add("btn");
			btnEditar.classList.add("btn-success");
			oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-pencil");
			btnEditar.appendChild(oSpan);
			btnEditar.addEventListener("click", editar, false);
			
		var btnGuardar = document.createElement("button");
			btnGuardar.setAttribute("type","button");
			btnGuardar.classList.add("btn");
			btnGuardar.classList.add("guardar");
			oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-floppy-disk");
			btnGuardar.addEventListener("click", guardarAveria, false);
			btnGuardar.appendChild(oSpan);
			btnGuardar.setAttribute("disabled","disabled");
			
		
		oFilas[i].lastChild.appendChild(btnGuardar);
		oFilas[i].lastChild.appendChild(btnEditar);
		oFilas[i].lastChild.appendChild(btnBorrar);
		
	}
	
	var oFormulario=document.querySelector("#formuListar");
	var oElementosFormulario = Array.prototype.slice.call(oFormulario.children);
	for(var i=0; i<oElementosFormulario.length; i++)
		oElementosFormulario[i].remove();
		
	oFormulario.appendChild(oTabla);
	oFormulario.style.display="block";
}

function altaVehiculo(){
	var oFormulario = document.querySelector("#formularioVehiculo");
	var bValidado = true;
	var arrayErrores = new Array();
	
	oFormulario.elements[0].value = oFormulario.elements[0].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[0].value);
	if(!oValidacion.validarMatricula()){
		if(bValidado)
			oFormulario.elements[0].focus();
		
		bValidado = false;
		oFormulario.elements[0].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato de la matrícula debe ser 'AB 0000 ZZZ' o 'A 0000 ZZZ'.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[0].classList.remove("error");
	}
	
	if(oFormulario.elements[1].selectedIndex == 0){
		if(bValidado)
			oFormulario.elements[1].focus();
		
		bValidado = false;
		oFormulario.elements[1].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- Debe seleccionar una categoría.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[1].classList.remove("error");
	}
	
	if(oFormulario.elements[2].selectedIndex == 0){
		if(bValidado)
			oFormulario.elements[2].focus();
		
		bValidado = false;
		oFormulario.elements[2].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- Debe seleccionar una aseguradora.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[2].classList.remove("error");
	}
	
	if(oFormulario.elements[3].selectedIndex == 0){
		if(bValidado)
			oFormulario.elements[3].focus();
		
		bValidado = false;
		oFormulario.elements[3].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- Debe seleccionar un cliente.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[3].classList.remove("error");
	}
	
	oFormulario.elements[4].value = oFormulario.elements[4].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[4].value);
	if(!oValidacion.validarMarca()){
		if(bValidado)
			oFormulario.elements[4].focus();
		
		bValidado = false;
		oFormulario.elements[4].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato de la marca debe tener entre 2 y 30 carácteres.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[4].classList.remove("error");
	}
	
	oFormulario.elements[5].value = oFormulario.elements[5].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[5].value);
	if(!oValidacion.validarModelo()){
		if(bValidado)
			oFormulario.elements[5].focus();
		
		bValidado = false;
		oFormulario.elements[5].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato del modelo debe tener entre 2 y 30 carácteres.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[5].classList.remove("error");
	}
	
	if(bValidado){
		if(oFormulario.elements[0].value==oModelo.buscarVehiculo(oFormulario.elements[0].value).matricula){
			var oParrafo = document.createElement("P");
			var oTexto = texto("- Este vehículo ya ha sido almacenado.");
			oParrafo.appendChild(oTexto);
			var arrayMensaje=new Array(oParrafo);
			var sColor="red";
			var sTitulo="VEHÍCULO YA ALMACENADO";
		}
		else{
			var sMatricula = oFormulario.elements[0].value;
			var iIdCategoria = oFormulario.elements[1].options[oFormulario.elements[1].selectedIndex].value;
			var iIdAseguradora = oFormulario.elements[2].options[oFormulario.elements[2].selectedIndex].value;
			var sDniCliente = oFormulario.elements[3].options[oFormulario.elements[3].selectedIndex].value;
			var sMarca = oFormulario.elements[4].value;
			var sModelo = oFormulario.elements[5].value;
			
			var oVehiculo = new Vehiculo(sMatricula, iIdCategoria, iIdAseguradora, sDniCliente, sMarca, sModelo);
			oModelo.vehiculos.push(oVehiculo);
			var oParrafo = document.createElement("P");
			var oTexto = texto("- Vehíchulo insertado con éxito.");
			oParrafo.appendChild(oTexto);
			var sTitulo = "SUCCESSFULLY!"
			var sColor = "green";
			var arrayMensaje = new Array(oParrafo);
			limpiarCampos(oFormulario);
		}
	}
	else{
		var arrayMensaje=arrayErrores;
		var sColor="red";
		var sTitulo="CAMPOS ERRÓNEOS";
	}
	muestraMensaje(sTitulo,sColor,arrayMensaje);
}

function mostrarVehiculo(){
	compara="";
	ocultarTodosLosFormularios();
	var oTabla=oModelo.vehiculosToHTMLTable();
	var oFilas=oTabla.querySelectorAll("tr");
	for(var i=2; i<oFilas.length; i++)
	{
		var btnBorrar = document.createElement("button");
			btnBorrar.setAttribute("type","button");
			btnBorrar.classList.add("borrar");
			btnBorrar.classList.add("btn");
			btnBorrar.classList.add("btn-danger");
			var oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-remove");
			btnBorrar.appendChild(oSpan);
			btnBorrar.addEventListener("click", borrarVehiculo, false);
		var btnEditar = document.createElement("button");
			btnEditar.setAttribute("type","button");
			btnEditar.classList.add("editar");
			btnEditar.classList.add("btn");
			btnEditar.classList.add("btn-success");
			oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-pencil");
			btnEditar.appendChild(oSpan);
			btnEditar.addEventListener("click", editar, false);
			
		var btnGuardar = document.createElement("button");
			btnGuardar.setAttribute("type","button");
			btnGuardar.classList.add("btn");
			btnGuardar.classList.add("guardar");
			oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-floppy-disk");
			btnGuardar.addEventListener("click", guardarVehiculo, false);
			btnGuardar.appendChild(oSpan);
			btnGuardar.setAttribute("disabled","disabled");
			
		
		oFilas[i].lastChild.appendChild(btnGuardar);
		oFilas[i].lastChild.appendChild(btnEditar);
		oFilas[i].lastChild.appendChild(btnBorrar);
		
	}
	
	var oFormulario=document.querySelector("#formuListar");
	var oElementosFormulario = Array.prototype.slice.call(oFormulario.children);
	for(var i=0; i<oElementosFormulario.length; i++)
		oElementosFormulario[i].remove();
		
	oFormulario.appendChild(oTabla);
	oFormulario.style.display="block";
}

function altaProducto(){
	var oFormulario = document.querySelector("#formularioProducto");
	var bValidado = true;
	var arrayErrores = new Array();
	
	oFormulario.elements[0].value = oFormulario.elements[0].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[0].value);
	if(!oValidacion.validarId()){
		if(bValidado)
			oFormulario.elements[0].focus();
		
		bValidado = false;
		oFormulario.elements[0].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato del ID debe contar con 4 dígitos.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[0].classList.remove("error");
	}
	
	if(oFormulario.elements[1].selectedIndex == 0){
		if(bValidado)
			oFormulario.elements[1].focus();
		
		bValidado = false;
		oFormulario.elements[1].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- Debe seleccionar un proveedor.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[1].classList.remove("error");
	}
	
	oFormulario.elements[2].value = oFormulario.elements[2].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[2].value);
	if(!oValidacion.validarNombre()){
		if(bValidado)
			oFormulario.elements[2].focus();
		
		bValidado = false;
		oFormulario.elements[2].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato del nombre debe tener entre 2 y 40 carácteres no numéricos.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[2].classList.remove("error");
	}
	
	oFormulario.elements[3].value = oFormulario.elements[3].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[3].value);
	if(!oValidacion.validarPrecio()){
		if(bValidado)
			oFormulario.elements[3].focus();
		
		bValidado = false;
		oFormulario.elements[3].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato del precio debe ser '0.00'.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[3].classList.remove("error");
	}
	
	oFormulario.elements[4].value = oFormulario.elements[4].value.trim();
	if(oFormulario.elements[4].value==""){
		if(bValidado)
			oFormulario.elements[4].focus();
		
		bValidado = false;
		oFormulario.elements[4].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- Debe escribir algo en la descripción.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[4].classList.remove("error");
	}
	
	oFormulario.elements[5].value = oFormulario.elements[5].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[5].value);
	if(!oValidacion.validarNumeroDeStocks()){
		if(bValidado)
			oFormulario.elements[5].focus();
		
		bValidado = false;
		oFormulario.elements[5].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato del número de stocks debe tener 1 o 2 dígitos.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[5].classList.remove("error");
	}
	
	if(bValidado){
		if(oFormulario.elements[0].value==oModelo.buscarProducto(oFormulario.elements[0].value).id){
			var oParrafo = document.createElement("P");
			var oTexto = texto("- Este producto ya ha sido almacenado.");
			oParrafo.appendChild(oTexto);
			var arrayMensaje=new Array(oParrafo);
			var sColor="red";
			var sTitulo="PRODUCTO YA ALMACENADO";
		}
		else{
			var iId = oFormulario.elements[0].value;
			var sDniProveedor = oFormulario.elements[1].options[oFormulario.elements[1].selectedIndex].value;
			var sNombre = oFormulario.elements[2].value;
			var fPrecio = oFormulario.elements[3].value;
			var sDescripcion = oFormulario.elements[4].value;
			var iStocks = oFormulario.elements[5].value;
			
			var oProducto = new Producto(iId, sDniProveedor, sNombre, fPrecio, sDescripcion, iStocks);
			oModelo.productos.push(oProducto);
			var oParrafo = document.createElement("P");
			var oTexto = texto("- Producto insertado con éxito.");
			oParrafo.appendChild(oTexto);
			var sTitulo = "SUCCESSFULLY!"
			var sColor = "green";
			var arrayMensaje = new Array(oParrafo);
			limpiarCampos(oFormulario);
		}
	}
	else{
		var arrayMensaje=arrayErrores;
		var sColor="red";
		var sTitulo="CAMPOS ERRÓNEOS";
	}
	muestraMensaje(sTitulo,sColor,arrayMensaje);
}

function mostrarProducto(){
	compara="";
	ocultarTodosLosFormularios();
	var oTabla=oModelo.productosToHTMLTable();
	var oFilas=oTabla.querySelectorAll("tr");
	for(var i=2; i<oFilas.length; i++)
	{
		var btnBorrar = document.createElement("button");
			btnBorrar.setAttribute("type","button");
			btnBorrar.classList.add("borrar");
			btnBorrar.classList.add("btn");
			btnBorrar.classList.add("btn-danger");
			var oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-remove");
			btnBorrar.appendChild(oSpan);
			btnBorrar.addEventListener("click", borrarProducto, false);
		var btnEditar = document.createElement("button");
			btnEditar.setAttribute("type","button");
			btnEditar.classList.add("editar");
			btnEditar.classList.add("btn");
			btnEditar.classList.add("btn-success");
			oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-pencil");
			btnEditar.appendChild(oSpan);
			btnEditar.addEventListener("click", editar, false);
			
		var btnGuardar = document.createElement("button");
			btnGuardar.setAttribute("type","button");
			btnGuardar.classList.add("btn");
			btnGuardar.classList.add("guardar");
			oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-floppy-disk");
			btnGuardar.addEventListener("click", guardarProducto, false);
			btnGuardar.appendChild(oSpan);
			btnGuardar.setAttribute("disabled","disabled");
			
		
		oFilas[i].lastChild.appendChild(btnGuardar);
		oFilas[i].lastChild.appendChild(btnEditar);
		oFilas[i].lastChild.appendChild(btnBorrar);
		
	}
	
	var oFormulario=document.querySelector("#formuListar");
	var oElementosFormulario = Array.prototype.slice.call(oFormulario.children);
	for(var i=0; i<oElementosFormulario.length; i++)
		oElementosFormulario[i].remove();
		
	oFormulario.appendChild(oTabla);
	oFormulario.style.display="block";
}

function altaCategoria(){
	var oFormulario = document.querySelector("#formularioCategoria");
	var bValidado = true;
	var arrayErrores = new Array();
	
	oFormulario.elements[0].value = oFormulario.elements[0].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[0].value);
	if(!oValidacion.validarId()){
		if(bValidado)
			oFormulario.elements[0].focus();
		
		bValidado = false;
		oFormulario.elements[0].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato del ID debe contar con 4 dígitos.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[0].classList.remove("error");
	}
	
	oFormulario.elements[1].value = oFormulario.elements[1].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[1].value);
	if(!oValidacion.validarNombre()){
		if(bValidado)
			oFormulario.elements[1].focus();
		
		bValidado = false;
		oFormulario.elements[1].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato del nombre debe tener entre 2 y 40 carácteres no numéricos.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[1].classList.remove("error");
	}
	
	if(bValidado){
		if(oFormulario.elements[0].value==oModelo.buscarCategoria(oFormulario.elements[0].value).id){
			var oParrafo = document.createElement("P");
			var oTexto = texto("- Esta categoría ya ha sido almacenada.");
			oParrafo.appendChild(oTexto);
			var arrayMensaje=new Array(oParrafo);
			var sColor="red";
			var sTitulo="CATEGORÍA YA ALMACENADA";
		}
		else{
			var iId = oFormulario.elements[0].value;
			var sNombre = oFormulario.elements[1].value;
			
			var oCategoria = new Categoria(iId, sNombre);
			oModelo.categorias.push(oCategoria);
			var oParrafo = document.createElement("P");
			var oTexto = texto("- Categoría insertada con éxito.");
			oParrafo.appendChild(oTexto);
			var sTitulo = "SUCCESSFULLY!"
			var sColor = "green";
			var arrayMensaje = new Array(oParrafo);
			limpiarCampos(oFormulario);
		}
	}
	else{
		var arrayMensaje=arrayErrores;
		var sColor="red";
		var sTitulo="CAMPOS ERRÓNEOS";
	}
	muestraMensaje(sTitulo,sColor,arrayMensaje);
}

function mostrarCategoria(){
	compara="";
	ocultarTodosLosFormularios();
	var oTabla=oModelo.categoriasToHTMLTable();
	var oFilas=oTabla.querySelectorAll("tr");
	for(var i=2; i<oFilas.length; i++)
	{
		var btnBorrar = document.createElement("button");
			btnBorrar.setAttribute("type","button");
			btnBorrar.classList.add("borrar");
			btnBorrar.classList.add("btn");
			btnBorrar.classList.add("btn-danger");
			var oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-remove");
			btnBorrar.appendChild(oSpan);
			btnBorrar.addEventListener("click", borrarCategoria, false);
		var btnEditar = document.createElement("button");
			btnEditar.setAttribute("type","button");
			btnEditar.classList.add("editar");
			btnEditar.classList.add("btn");
			btnEditar.classList.add("btn-success");
			oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-pencil");
			btnEditar.appendChild(oSpan);
			btnEditar.addEventListener("click", editar, false);
			
		var btnGuardar = document.createElement("button");
			btnGuardar.setAttribute("type","button");
			btnGuardar.classList.add("btn");
			btnGuardar.classList.add("guardar");
			oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-floppy-disk");
			btnGuardar.addEventListener("click", guardarCategoria, false);
			btnGuardar.appendChild(oSpan);
			btnGuardar.setAttribute("disabled","disabled");
			
		
		oFilas[i].lastChild.appendChild(btnGuardar);
		oFilas[i].lastChild.appendChild(btnEditar);
		oFilas[i].lastChild.appendChild(btnBorrar);
		
	}
	
	var oFormulario=document.querySelector("#formuListar");
	var oElementosFormulario = Array.prototype.slice.call(oFormulario.children);
	for(var i=0; i<oElementosFormulario.length; i++)
		oElementosFormulario[i].remove();
		
	oFormulario.appendChild(oTabla);
	oFormulario.style.display="block";
}


function altaPresupuesto(){
	var oFormulario = document.querySelector("#formularioPresupuesto");
	var bValidado = true;
	var arrayErrores = new Array();
	
	oFormulario.elements[0].value = oFormulario.elements[0].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[0].value);
	if(!oValidacion.validarId()){
		if(bValidado)
			oFormulario.elements[0].focus();
		
		bValidado = false;
		oFormulario.elements[0].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato del ID debe contar con 4 dígitos.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[0].classList.remove("error");
	}
	
	if(oFormulario.elements[1].selectedIndex == 0){
		if(bValidado)
			oFormulario.elements[1].focus();
		
		bValidado = false;
		oFormulario.elements[1].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- Debe seleccionar una línea.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[1].classList.remove("error");
	}
	
	if(oFormulario.elements[2].selectedIndex == 0){
		if(bValidado)
			oFormulario.elements[2].focus();
		
		bValidado = false;
		oFormulario.elements[2].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- Debe seleccionar una avería.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[2].classList.remove("error");
	}
	
	oFormulario.elements[3].value = oFormulario.elements[3].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[3].value);
	if(!oValidacion.validarPrecio()){
		if(bValidado)
			oFormulario.elements[3].focus();
		
		bValidado = false;
		oFormulario.elements[3].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato del precio debe ser '0.00'.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[3].classList.remove("error");
	}
	
	oFormulario.elements[4].value = oFormulario.elements[4].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[4].value);
	if(!oValidacion.validarFecha()){
		if(bValidado)
			oFormulario.elements[4].focus();
		
		bValidado = false;
		oFormulario.elements[4].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato de la fecha debe ser 'dd/mm/yyyy'.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		var oArrayFecha = oFormulario.elements[4].value.split("/");
		var bExisteFecha = existeFecha(oArrayFecha);
		if(!bExisteFecha){
			if(bValidado)
				oFormulario.elements[4].focus();
			
			bValidado = false;
			oFormulario.elements[4].classList.add("error");
			var oParrafo = document.createElement("P");
			var oTexto = texto("- Esa fecha no existe.");
			oParrafo.appendChild(oTexto);
			arrayErrores.push(oParrafo);
		}
		else{
			oFormulario.elements[4].classList.remove("error");
		}
	}
	
	if(bValidado){
		if(oFormulario.elements[0].value==oModelo.buscarPresupuesto(oFormulario.elements[0].value).id){
			var oParrafo = document.createElement("P");
			var oTexto = texto("- Este presupuesto ya ha sido almacenado.");
			oParrafo.appendChild(oTexto);
			var arrayMensaje=new Array(oParrafo);
			var sColor="red";
			var sTitulo="PRESUPUESTO YA ALMACENADO";
		}
		else{
			var iId = oFormulario.elements[0].value;
			var iIdLinea = oFormulario.elements[1].options[oFormulario.elements[1].selectedIndex].value;
			var iIdAveria = oFormulario.elements[2].options[oFormulario.elements[2].selectedIndex].value;
			var fPrecio = oFormulario.elements[3].value;
			var sFecha = oFormulario.elements[4].value;
			
			var oPresupuesto = new Presupuesto(iId, iIdLinea, iIdAveria, fPrecio, sFecha);
			oModelo.presupuestos.push(oPresupuesto);
			var oParrafo = document.createElement("P");
			var oTexto = texto("- Presupuesto insertado con éxito.");
			oParrafo.appendChild(oTexto);
			var sTitulo = "SUCCESSFULLY!"
			var sColor = "green";
			var arrayMensaje = new Array(oParrafo);
			limpiarCampos(oFormulario);
		}
	}
	else{
		var arrayMensaje=arrayErrores;
		var sColor="red";
		var sTitulo="CAMPOS ERRÓNEOS";
	}
	muestraMensaje(sTitulo,sColor,arrayMensaje);
}
function mostrarPresupuesto(){
	compara="";
	ocultarTodosLosFormularios();
	var oTabla=oModelo.presupuestosToHTMLTable();
	var oFilas=oTabla.querySelectorAll("tr");
	for(var i=2; i<oFilas.length; i++)
	{
		var btnBorrar = document.createElement("button");
			btnBorrar.setAttribute("type","button");
			btnBorrar.classList.add("borrar");
			btnBorrar.classList.add("btn");
			btnBorrar.classList.add("btn-danger");
			var oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-remove");
			btnBorrar.appendChild(oSpan);
			btnBorrar.addEventListener("click", borrarPresupuesto, false);
		var btnEditar = document.createElement("button");
			btnEditar.setAttribute("type","button");
			btnEditar.classList.add("editar");
			btnEditar.classList.add("btn");
			btnEditar.classList.add("btn-success");
			oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-pencil");
			btnEditar.appendChild(oSpan);
			btnEditar.addEventListener("click", editar, false);
			
		var btnGuardar = document.createElement("button");
			btnGuardar.setAttribute("type","button");
			btnGuardar.classList.add("btn");
			btnGuardar.classList.add("guardar");
			oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-floppy-disk");
			btnGuardar.addEventListener("click", guardarPresupuesto, false);
			btnGuardar.appendChild(oSpan);
			btnGuardar.setAttribute("disabled","disabled");
			
		
		oFilas[i].lastChild.appendChild(btnGuardar);
		oFilas[i].lastChild.appendChild(btnEditar);
		oFilas[i].lastChild.appendChild(btnBorrar);
		
	}
	
	var oFormulario=document.querySelector("#formuListar");
	var oElementosFormulario = Array.prototype.slice.call(oFormulario.children);
	for(var i=0; i<oElementosFormulario.length; i++)
		oElementosFormulario[i].remove();
		
	oFormulario.appendChild(oTabla);
	oFormulario.style.display="block";
}

function altaFactura(){
	var oFormulario = document.querySelector("#formularioFactura");
	var bValidado = true;
	var arrayErrores = new Array();
	
	oFormulario.elements[0].value = oFormulario.elements[0].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[0].value);
	if(!oValidacion.validarId()){
		if(bValidado)
			oFormulario.elements[0].focus();
		
		bValidado = false;
		oFormulario.elements[0].classList.add("error");ç
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato del ID debe contar con 4 dígitos.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[0].classList.remove("error");
	}
	
	if(oFormulario.elements[1].selectedIndex == 0){
		if(bValidado)
			oFormulario.elements[1].focus();
		
		bValidado = false;
		oFormulario.elements[1].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- Debe seleccionar un presupuesto.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[1].classList.remove("error");
	}
	
	if(oFormulario.elements[2].selectedIndex == 0){
		if(bValidado)
			oFormulario.elements[2].focus();
		
		bValidado = false;
		oFormulario.elements[2].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- Debe seleccionar un cliente.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[2].classList.remove("error");
	}
	
	oFormulario.elements[4].value = oFormulario.elements[4].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[4].value);
	if(!oValidacion.validarFecha()){
		if(bValidado)
			oFormulario.elements[4].focus();
		
		bValidado = false;
		oFormulario.elements[4].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato de la fecha debe ser 'dd/mm/yyyy'.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		var oArrayFecha = oFormulario.elements[4].value.split("/");
		var bExisteFecha = existeFecha(oArrayFecha);
		if(!bExisteFecha){
			if(bValidado)
				oFormulario.elements[4].focus();
			
			bValidado = false;
			oFormulario.elements[4].classList.add("error");
			var oParrafo = document.createElement("P");
			var oTexto = texto("- Esa fecha no existe.");
			oParrafo.appendChild(oTexto);
			arrayErrores.push(oParrafo);
		}
		else{
			oFormulario.elements[4].classList.remove("error");
		}
	}
	
	if(bValidado){
		if(oFormulario.elements[0].value==oModelo.buscarFactura(oFormulario.elements[0].value).id){
			var oParrafo = document.createElement("P");
			var oTexto = texto("- Esta factura ya ha sido almacenada.");
			oParrafo.appendChild(oTexto);
			var arrayMensaje=new Array(oParrafo);
			var sColor="red";
			var sTitulo="FACTURA YA ALMACENADA";
		}
		else{
			var iId = oFormulario.elements[0].value;
			var iIdPresupuesto = oFormulario.elements[1].options[oFormulario.elements[1].selectedIndex].value;
			var sDniCliente = oFormulario.elements[2].options[oFormulario.elements[2].selectedIndex].value;
			var bPagada = oFormulario.elements[3].checked;
			var sFecha = oFormulario.elements[4].value;
			
			var oFactura = new Factura(iId, iIdPresupuesto, sDniCliente, bPagada, sFecha);
			oModelo.facturas.push(oFactura);
			var oParrafo = document.createElement("P");
			var oTexto = texto("- Factura insertada con éxito.");
			oParrafo.appendChild(oTexto);
			var sTitulo = "SUCCESSFULLY!"
			var sColor = "green";
			var arrayMensaje = new Array(oParrafo);
			limpiarCampos(oFormulario);
		}
	}
	else{
		var arrayMensaje=arrayErrores;
		var sColor="red";
		var sTitulo="CAMPOS ERRÓNEOS";
	}
	muestraMensaje(sTitulo,sColor,arrayMensaje);
}

function mostrarFactura(){
	compara="";
	ocultarTodosLosFormularios();
	var oTabla=oModelo.facturasToHTMLTable();
	var oFilas=oTabla.querySelectorAll("tr");
	for(var i=2; i<oFilas.length; i++)
	{
		var btnBorrar = document.createElement("button");
			btnBorrar.setAttribute("type","button");
			btnBorrar.classList.add("borrar");
			btnBorrar.classList.add("btn");
			btnBorrar.classList.add("btn-danger");
			var oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-remove");
			btnBorrar.appendChild(oSpan);
			btnBorrar.addEventListener("click", borrarFactura, false);
		var btnEditar = document.createElement("button");
			btnEditar.setAttribute("type","button");
			btnEditar.classList.add("editar");
			btnEditar.classList.add("btn");
			btnEditar.classList.add("btn-success");
			oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-pencil");
			btnEditar.appendChild(oSpan);
			btnEditar.addEventListener("click", editar, false);
			
		var btnGuardar = document.createElement("button");
			btnGuardar.setAttribute("type","button");
			btnGuardar.classList.add("btn");
			btnGuardar.classList.add("guardar");
			oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-floppy-disk");
			btnGuardar.addEventListener("click", guardarFactura, false);
			btnGuardar.appendChild(oSpan);
			btnGuardar.setAttribute("disabled","disabled");
			
		
		oFilas[i].lastChild.appendChild(btnGuardar);
		oFilas[i].lastChild.appendChild(btnEditar);
		oFilas[i].lastChild.appendChild(btnBorrar);
		
	}
	
	var oFormulario=document.querySelector("#formuListar");
	var oElementosFormulario = Array.prototype.slice.call(oFormulario.children);
	for(var i=0; i<oElementosFormulario.length; i++)
		oElementosFormulario[i].remove();
		
	oFormulario.appendChild(oTabla);
	oFormulario.style.display="block";
}

function altaLinea(){
	var oFormulario = document.querySelector("#formularioLinea");
	var bValidado = true;
	var arrayErrores = new Array();
	
	oFormulario.elements[0].value = oFormulario.elements[0].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[0].value);
	if(!oValidacion.validarId()){
		if(bValidado)
			oFormulario.elements[0].focus();
		
		bValidado = false;
		oFormulario.elements[0].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato del ID debe contar con 4 dígitos.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[0].classList.remove("error");
	}
	
	if(oFormulario.elements[1].selectedIndex == 0){
		if(bValidado)
			oFormulario.elements[1].focus();
		
		bValidado = false;
		oFormulario.elements[1].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- Debe seleccionar un producto.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[1].classList.remove("error");
	}
	
	oFormulario.elements[2].value = oFormulario.elements[2].value.trim();
	var oValidacion = new Validacion(oFormulario.elements[2].value);
	if(!oValidacion.validarCantidad()){
		if(bValidado)
			oFormulario.elements[2].focus();
		
		bValidado = false;
		oFormulario.elements[2].classList.add("error");
		var oParrafo = document.createElement("P");
		var oTexto = texto("- El formato de cantidad debe tener entre 1 y 7 dígitos.");
		oParrafo.appendChild(oTexto);
		arrayErrores.push(oParrafo);
	}
	else{
		oFormulario.elements[2].classList.remove("error");
	}
	
	if(bValidado){
		if(oFormulario.elements[0].value==oModelo.buscarLinea(oFormulario.elements[0].value).id){
			var oParrafo = document.createElement("P");
			var oTexto = texto("- Esta Línea ya ha sido almacenada.");
			oParrafo.appendChild(oTexto);
			var arrayMensaje=new Array(oParrafo);
			var sColor="red";
			var sTitulo="LÍNEA YA ALMACENADA";
		}
		else{
			var iId = oFormulario.elements[0].value;
			var iIdProducto = oFormulario.elements[1].options[oFormulario.elements[1].selectedIndex].value;
			var iCantidad = oFormulario.elements[2].value;
			
			var oLinea = new LineaProductos(iId, iIdProducto, iCantidad);
			oModelo.lineasProductos.push(oLinea);
			var oParrafo = document.createElement("P");
			var oTexto = texto("- Línea insertada con éxito.");
			oParrafo.appendChild(oTexto);
			var sTitulo = "SUCCESSFULLY!"
			var sColor = "green";
			var arrayMensaje = new Array(oParrafo);
			limpiarCampos(oFormulario);
		}
	}
	else{
		var arrayMensaje=arrayErrores;
		var sColor="red";
		var sTitulo="CAMPOS ERRÓNEOS";
	}
	muestraMensaje(sTitulo,sColor,arrayMensaje);
}

function mostrarLinea(){
	compara="";
	ocultarTodosLosFormularios();
	var oTabla=oModelo.lineasProductosToHTMLTable();
	var oFilas=oTabla.querySelectorAll("tr");
	for(var i=2; i<oFilas.length; i++)
	{
		var btnBorrar = document.createElement("button");
			btnBorrar.setAttribute("type","button");
			btnBorrar.classList.add("borrar");
			btnBorrar.classList.add("btn");
			btnBorrar.classList.add("btn-danger");
			var oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-remove");
			btnBorrar.appendChild(oSpan);
			btnBorrar.addEventListener("click", borrarLinea, false);
		var btnEditar = document.createElement("button");
			btnEditar.setAttribute("type","button");
			btnEditar.classList.add("editar");
			btnEditar.classList.add("btn");
			btnEditar.classList.add("btn-success");
			oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-pencil");
			btnEditar.appendChild(oSpan);
			btnEditar.addEventListener("click", editar, false);
			
		var btnGuardar = document.createElement("button");
			btnGuardar.setAttribute("type","button");
			btnGuardar.classList.add("btn");
			btnGuardar.classList.add("guardar");
			oSpan = document.createElement("span");
			oSpan.classList.add("glyphicon");
			oSpan.classList.add("glyphicon-floppy-disk");
			btnGuardar.addEventListener("click", guardarLinea, false);
			btnGuardar.appendChild(oSpan);
			btnGuardar.setAttribute("disabled","disabled");
			
		
		oFilas[i].lastChild.appendChild(btnGuardar);
		oFilas[i].lastChild.appendChild(btnEditar);
		oFilas[i].lastChild.appendChild(btnBorrar);
		
	}
	
	var oFormulario=document.querySelector("#formuListar");
	var oElementosFormulario = Array.prototype.slice.call(oFormulario.children);
	for(var i=0; i<oElementosFormulario.length; i++)
		oElementosFormulario[i].remove();
		
	oFormulario.appendChild(oTabla);
	oFormulario.style.display="block";
}

function existeFecha(oArrayFecha){
	var iDia = parseInt(oArrayFecha[0]);
	var iMes = parseInt(oArrayFecha[1]);
	var iAnyo = parseInt(oArrayFecha[2]);
	var bExiste = true;
	
	if(iDia<1 || iDia>31)
		bExiste = false;
	else{
		var bBisiesto = false;
		if(iMes==2){
			if(iAnyo%400==0)
				bBisiesto=true;
			else if(iAnyo%4==0 && iAnyo%100!=0)
				bBisiesto=true;
		
			if(bBisiesto){
				if(iDia>29)
					bExiste = false;
			}
			else{
				if(iDia>28)
					bExiste = false;
			}
		}
		else{
			if(iMes==4 || iMes==6 || iMes==9 || iMes==11){
				if(iDia>30)
					bExiste = false;
			}
			else if(iMes<1 || iMes>12)
				bExiste = false;
		}
	}
		
	return bExiste;
}

//FUNCIONES BOTONES DE EDICION

function borrarProveedor(oEvento)
{
	var oEvento= oEvento || window.event;
	var oBotonPulsado = oEvento.target;
	var oTr = oBotonPulsado.parentElement.parentElement;
	var sIdentificacion = oTr.firstElementChild.firstElementChild.value;
	oTr.parentElement.removeChild(oTr);
	var bEncontrado = false;
	
	for(var i=0; i<oModelo.proveedores.length && !bEncontrado; i++){
		if(oModelo.proveedores[i]==oModelo.buscarProveedor(sIdentificacion)){
			oModelo.proveedores.splice(i,1);
			bEncontrado = true;
		}
	}
	
}

function borrarEmpleado(oEvento)
{
	var oEvento= oEvento || window.event;
	var oBotonPulsado = oEvento.target;
	var oTr = oBotonPulsado.parentElement.parentElement;
	var sIdentificacion = oTr.firstElementChild.firstElementChild.value;
	oTr.parentElement.removeChild(oTr);
	var bEncontrado = false;
	
	for(var i=0; i<oModelo.empleados.length && !bEncontrado; i++){
		if(oModelo.empleados[i]==oModelo.buscarEmpleado(sIdentificacion)){
			oModelo.empleados.splice(i,1);
			bEncontrado = true;
		}
	}
	
}

function borrarAseguradora(oEvento)
{
	var oEvento= oEvento || window.event;
	var oBotonPulsado = oEvento.target;
	var oTr = oBotonPulsado.parentElement.parentElement;
	var sIdentificacion = oTr.firstElementChild.firstElementChild.value;
	oTr.parentElement.removeChild(oTr);
	var bEncontrado = false;
	
	for(var i=0; i<oModelo.aseguradoras.length && !bEncontrado; i++){
		if(oModelo.aseguradoras[i]==oModelo.buscarAseguradora(sIdentificacion)){
			oModelo.aseguradoras.splice(i,1);
			bEncontrado = true;
		}
	}
	
}

function borrarCliente(oEvento)
{
	var oEvento= oEvento || window.event;
	var oBotonPulsado = oEvento.target;
	var oTr = oBotonPulsado.parentElement.parentElement;
	var sIdentificacion = oTr.firstElementChild.firstElementChild.value;
	oTr.parentElement.removeChild(oTr);
	var bEncontrado = false;
	
	for(var i=0; i<oModelo.clientes.length && !bEncontrado; i++){
		if(oModelo.clientes[i]==oModelo.buscarCliente(sIdentificacion)){
			oModelo.clientes.splice(i,1);
			bEncontrado = true;
		}
	}
	
}

function borrarAveria(oEvento)
{
	var oEvento= oEvento || window.event;
	var oBotonPulsado = oEvento.target;
	var oTr = oBotonPulsado.parentElement.parentElement;
	var sIdentificacion = oTr.firstElementChild.firstElementChild.value;
	oTr.parentElement.removeChild(oTr);
	var bEncontrado = false;
	
	for(var i=0; i<oModelo.averias.length && !bEncontrado; i++){
		if(oModelo.averias[i]==oModelo.buscarAveria(sIdentificacion)){
			oModelo.averias.splice(i,1);
			bEncontrado = true;
		}
	}
	
}

function borrarVehiculo(oEvento)
{
	var oEvento= oEvento || window.event;
	var oBotonPulsado = oEvento.target;
	var oTr = oBotonPulsado.parentElement.parentElement;
	var sIdentificacion = oTr.firstElementChild.firstElementChild.value;
	oTr.parentElement.removeChild(oTr);
	var bEncontrado = false;
	
	for(var i=0; i<oModelo.vehiculos.length && !bEncontrado; i++){
		if(oModelo.vehiculos[i]==oModelo.buscarVehiculo(sIdentificacion)){
			oModelo.vehiculos.splice(i,1);
			bEncontrado = true;
		}
	}
	
}

function borrarProducto(oEvento)
{
	var oEvento= oEvento || window.event;
	var oBotonPulsado = oEvento.target;
	var oTr = oBotonPulsado.parentElement.parentElement;
	var sIdentificacion = oTr.firstElementChild.firstElementChild.value;
	oTr.parentElement.removeChild(oTr);
	var bEncontrado = false;
	
	for(var i=0; i<oModelo.productos.length && !bEncontrado; i++){
		if(oModelo.productos[i]==oModelo.buscarProducto(sIdentificacion)){
			oModelo.productos.splice(i,1);
			bEncontrado = true;
		}
	}
}

function borrarCategoria(oEvento)
{
	var oEvento= oEvento || window.event;
	var oBotonPulsado = oEvento.target;
	var oTr = oBotonPulsado.parentElement.parentElement;
	var sIdentificacion = oTr.firstElementChild.firstElementChild.value;
	oTr.parentElement.removeChild(oTr);
	var bEncontrado = false;
	
	for(var i=0; i<oModelo.categorias.length && !bEncontrado; i++){
		if(oModelo.categorias[i]==oModelo.buscarCategoria(sIdentificacion)){
			oModelo.categorias.splice(i,1);
			bEncontrado = true;
		}
	}
}

function borrarFactura(oEvento)
{
	var oEvento= oEvento || window.event;
	var oBotonPulsado = oEvento.target;
	var oTr = oBotonPulsado.parentElement.parentElement;
	var sIdentificacion = oTr.firstElementChild.firstElementChild.value;
	oTr.parentElement.removeChild(oTr);
	var bEncontrado = false;
	
	for(var i=0; i<oModelo.facturas.length && !bEncontrado; i++){
		if(oModelo.facturas[i]==oModelo.buscarFactura(sIdentificacion)){
			oModelo.facturas.splice(i,1);
			bEncontrado = true;
		}
	}
}

function borrarPresupuesto(oEvento)
{
	var oEvento= oEvento || window.event;
	var oBotonPulsado = oEvento.target;
	var oTr = oBotonPulsado.parentElement.parentElement;
	var sIdentificacion = oTr.firstElementChild.firstElementChild.value;
	oTr.parentElement.removeChild(oTr);
	var bEncontrado = false;
	
	for(var i=0; i<oModelo.presupuestos.length && !bEncontrado; i++){
		if(oModelo.presupuestos[i]==oModelo.buscarPresupuesto(sIdentificacion)){
			oModelo.presupuestos.splice(i,1);
			bEncontrado = true;
		}
	}
}

function borrarLinea(oEvento)
{
	var oEvento= oEvento || window.event;
	var oBotonPulsado = oEvento.target;
	var oTr = oBotonPulsado.parentElement.parentElement;
	var sIdentificacion = oTr.firstElementChild.firstElementChild.value;
	oTr.parentElement.removeChild(oTr);
	var bEncontrado = false;
	
	for(var i=0; i<oModelo.lineasProductos.length && !bEncontrado; i++){
		if(oModelo.lineasProductos[i]==oModelo.buscarLinea(sIdentificacion)){
			oModelo.lineasProductos.splice(i,1);
			bEncontrado = true;
		}
	}
}

function editar(oEvento)
{
	compara="";
	var oEvento= oEvento || window.event;
	var oBotonPulsado=oEvento.target;
	var oTr = oBotonPulsado.parentElement.parentElement;
	var oTd = oTr.querySelectorAll("td");
	if(oTd[1].firstElementChild.disabled)
		for(var i=1; i<oTd.length-1; i++)
		{
			oTd[i].firstElementChild.disabled=false;
			compara+=oTd[i].firstElementChild.value;
		}
	else
		for(var i=0; i<oTd.length-1; i++)
			oTd[i].firstElementChild.disabled=true;	
}

function habilitaGuardado(oEvento)
{
	var oEvento = oEvento || window.event;
	var oBotonPulsado = oEvento.target;
	var oTr = oBotonPulsado.parentElement.parentElement;
	var oTd = oTr.querySelectorAll("td");
	var nuevoCompara="";
	
		for(var i=1; i<oTd.length-1; i++)
		{
			nuevoCompara+=oTd[i].firstElementChild.value;
		}
	
	if(compara!=nuevoCompara){
		oTr.lastElementChild.firstElementChild.disabled=false;
		oTr.lastElementChild.firstElementChild.classList.add("btn-primary");
	}
	else{
		oTr.lastElementChild.firstElementChild.disabled=true;
		oTr.lastElementChild.firstElementChild.classList.remove("btn-primary");
	}
}

function guardarProveedor(oEvento)
{
	var oEvento = oEvento || window.event;
	var oBotonPulsado = oEvento.target;
	var oTr = oBotonPulsado.parentElement.parentElement;
	var sIdentificacion = oTr.firstElementChild.firstElementChild.value;
	var oProveedor=oModelo.buscarProveedor(sIdentificacion);
	
	var oTd = oTr.querySelectorAll("td");
	
	oProveedor.nombre=oTd[1].firstElementChild.value;
	oProveedor.direccion=oTd[2].firstElementChild.value;
	oProveedor.telefono=oTd[3].firstElementChild.value;
	oProveedor.email=oTd[4].firstElementChild.value;
	oProveedor.descripcion=oTd[5].firstElementChild.value;
	oProveedor.web=oTd[6].firstElementChild.value;
	
	for(var i=0; i<oTd.length-1; i++)
			oTd[i].firstElementChild.disabled=true;
			
	oBotonPulsado.disabled=true;
	oBotonPulsado.classList.remove("btn-primary");
	
}

function guardarEmpleado(oEvento)
{
	var oEvento = oEvento || window.event;
	var oBotonPulsado = oEvento.target;
	var oTr = oBotonPulsado.parentElement.parentElement;
	var sIdentificacion = oTr.firstElementChild.firstElementChild.value;
	var oEmpleado=oModelo.buscarEmpleado(sIdentificacion);
	
	var oTd = oTr.querySelectorAll("td");
	
	oEmpleado.nombre=oTd[1].firstElementChild.value;
	oEmpleado.apellidos=oTd[2].firstElementChild.value;
	oEmpleado.departamento=oTd[3].firstElementChild.value;
	
	for(var i=0; i<oTd.length-1; i++)
			oTd[i].firstElementChild.disabled=true;
			
	oBotonPulsado.disabled=true;
	oBotonPulsado.classList.remove("btn-primary");
	
}

function guardarAseguradora(oEvento)
{
	var oEvento = oEvento || window.event;
	var oBotonPulsado = oEvento.target;
	var oTr = oBotonPulsado.parentElement.parentElement;
	var sIdentificacion = oTr.firstElementChild.firstElementChild.value;
	var oAseguradora=oModelo.buscarAseguradora(sIdentificacion);
	
	var oTd = oTr.querySelectorAll("td");
	
	oAseguradora.nombre=oTd[1].firstElementChild.value;
	oAseguradora.telefono=oTd[2].firstElementChild.value;
	oAseguradora.email=oTd[3].firstElementChild.value;
	
	for(var i=0; i<oTd.length-1; i++)
			oTd[i].firstElementChild.disabled=true;
			
	oBotonPulsado.disabled=true;
	oBotonPulsado.classList.remove("btn-primary");
}

function guardarCliente(oEvento){
	var oEvento = oEvento || window.event;
	var oBotonPulsado = oEvento.target;
	var oTr = oBotonPulsado.parentElement.parentElement;
	var sIdentificacion = oTr.firstElementChild.firstElementChild.value;
	var oCliente=oModelo.buscarCliente(sIdentificacion);
	
	var oTd = oTr.querySelectorAll("td");
	
	oCliente.nombre=oTd[1].firstElementChild.value;
	oCliente.apellidos=oTd[2].firstElementChild.value;
	oCliente.telefono=oTd[3].firstElementChild.value;
	oCliente.direccion=oTd[4].firstElementChild.value;
	oCliente.email=oTd[5].firstElementChild.value;
	
	for(var i=0; i<oTd.length-1; i++)
			oTd[i].firstElementChild.disabled=true;
			
	oBotonPulsado.disabled=true;
	oBotonPulsado.classList.remove("btn-primary");
}

function guardarAveria(oEvento){
	var oEvento = oEvento || window.event;
	var oBotonPulsado = oEvento.target;
	var oTr = oBotonPulsado.parentElement.parentElement;
	var sIdentificacion = oTr.firstElementChild.firstElementChild.value;
	var oAveria=oModelo.buscarAveria(sIdentificacion);
	
	var oTd = oTr.querySelectorAll("td");
	
	oAveria.matriculaVehiculo=oTd[1].firstElementChild.value;
	oAveria.dniEmpleado=oTd[2].firstElementChild.value;
	oAveria.descripcion=oTd[3].firstElementChild.value;
	
	for(var i=0; i<oTd.length-1; i++)
			oTd[i].firstElementChild.disabled=true;
			
	oBotonPulsado.disabled=true;
	oBotonPulsado.classList.remove("btn-primary");
}

function guardarVehiculo(oEvento){
	var oEvento = oEvento || window.event;
	var oBotonPulsado = oEvento.target;
	var oTr = oBotonPulsado.parentElement.parentElement;
	var sIdentificacion = oTr.firstElementChild.firstElementChild.value;
	var oVehiculo=oModelo.buscarVehiculo(sIdentificacion);
	
	var oTd = oTr.querySelectorAll("td");
	
	oVehiculo.idCategoria=oTd[1].firstElementChild.value;
	oVehiculo.idAseguradora=oTd[2].firstElementChild.value;
	oVehiculo.dniCliente=oTd[3].firstElementChild.value;
	oVehiculo.marca=oTd[4].firstElementChild.value;
	oVehiculo.modelo=oTd[5].firstElementChild.value;
	
	for(var i=0; i<oTd.length-1; i++)
			oTd[i].firstElementChild.disabled=true;
			
	oBotonPulsado.disabled=true;
	oBotonPulsado.classList.remove("btn-primary");
}

function guardarProducto(oEvento){
	var oEvento = oEvento || window.event;
	var oBotonPulsado = oEvento.target;
	var oTr = oBotonPulsado.parentElement.parentElement;
	var sIdentificacion = oTr.firstElementChild.firstElementChild.value;
	var oProducto=oModelo.buscarProducto(sIdentificacion);
	
	var oTd = oTr.querySelectorAll("td");
	
	oProducto.dni_proveedor=oTd[1].firstElementChild.value;
	oProducto.nombre=oTd[2].firstElementChild.value;
	oProducto.precio=oTd[3].firstElementChild.value;
	oProducto.descripcion=oTd[4].firstElementChild.value;
	oProducto.stock=oTd[5].firstElementChild.value;
	
	for(var i=0; i<oTd.length-1; i++)
			oTd[i].firstElementChild.disabled=true;
			
	oBotonPulsado.disabled=true;
	oBotonPulsado.classList.remove("btn-primary");
}

function guardarCategoria(oEvento){
	var oEvento = oEvento || window.event;
	var oBotonPulsado = oEvento.target;
	var oTr = oBotonPulsado.parentElement.parentElement;
	var sIdentificacion = oTr.firstElementChild.firstElementChild.value;
	var oCategoria=oModelo.buscarCategoria(sIdentificacion);
	
	var oTd = oTr.querySelectorAll("td");
	
	oCategoria.nombre=oTd[1].firstElementChild.value;
	
	for(var i=0; i<oTd.length-1; i++)
			oTd[i].firstElementChild.disabled=true;
			
	oBotonPulsado.disabled=true;
	oBotonPulsado.classList.remove("btn-primary");
}

function guardarPresupuesto(oEvento){
	var oEvento = oEvento || window.event;
	var oBotonPulsado = oEvento.target;
	var oTr = oBotonPulsado.parentElement.parentElement;
	var sIdentificacion = oTr.firstElementChild.firstElementChild.value;
	var oPresupuesto=oModelo.buscarPresupuesto(sIdentificacion);
	
	var oTd = oTr.querySelectorAll("td");
	
	oPresupuesto.idLineaProductos=oTd[1].firstElementChild.value;
	oPresupuesto.idAveria=oTd[2].firstElementChild.value;
	oPresupuesto.precio=oTd[3].firstElementChild.value;
	oPresupuesto.fecha=oTd[4].firstElementChild.value;
	
	for(var i=0; i<oTd.length-1; i++)
			oTd[i].firstElementChild.disabled=true;
			
	oBotonPulsado.disabled=true;
	oBotonPulsado.classList.remove("btn-primary");
}

function guardarFactura(oEvento){
	var oEvento = oEvento || window.event;
	var oBotonPulsado = oEvento.target;
	var oTr = oBotonPulsado.parentElement.parentElement;
	var sIdentificacion = oTr.firstElementChild.firstElementChild.value;
	var oFactura=oModelo.buscarFactura(sIdentificacion);
	
	var oTd = oTr.querySelectorAll("td");
	
	oFactura.idPresupuesto=oTd[1].firstElementChild.value;
	oFactura.dniCliente=oTd[2].firstElementChild.value;
	oFactura.pagada=oTd[3].firstElementChild.value;
	oFactura.fecha=oTd[4].firstElementChild.value;
	
	
	for(var i=0; i<oTd.length-1; i++)
			oTd[i].firstElementChild.disabled=true;
			
	oBotonPulsado.disabled=true;
	oBotonPulsado.classList.remove("btn-primary");
}

function guardarLinea(oEvento){
	var oEvento = oEvento || window.event;
	var oBotonPulsado = oEvento.target;
	var oTr = oBotonPulsado.parentElement.parentElement;
	var sIdentificacion = oTr.firstElementChild.firstElementChild.value;
	var oLinea=oModelo.buscarLinea(sIdentificacion);
	
	var oTd = oTr.querySelectorAll("td");
	
	oLinea.idProducto=oTd[1].firstElementChild.value;
	oLinea.Cantidad=oTd[2].firstElementChild.value;
	
	
	for(var i=0; i<oTd.length-1; i++)
			oTd[i].firstElementChild.disabled=true;
			
	oBotonPulsado.disabled=true;
	oBotonPulsado.classList.remove("btn-primary");
}


function muestraMensaje(sTitulo, sColor, arrayMensaje){
	var oTituloCapa = document.querySelector("#alerta strong");
	var oTitulo = texto(sTitulo);
	if(oTituloCapa.firstChild!==null)
		oTituloCapa.firstChild.remove();
	oTituloCapa.appendChild(oTitulo);
	var oCapa = document.querySelector("#alerta div");
	var oElementosCapa = Array.prototype.slice.call(oCapa.children);
	for(var i=0; i<oElementosCapa.length; i++){
		oElementosCapa[i].remove();
	}
	for(var i=0; i<arrayMensaje.length; i++){
		oCapa.appendChild(arrayMensaje[i]);
	}
	document.querySelector("#alerta").style.backgroundColor=sColor;
	document.querySelector("#alerta").style.display="block";
}
function ocultaMensaje(){
	document.querySelector("#alerta").style.display="none";
}

function cargarDatos(oEvento){
	var oEvento = oEvento || window.event;
	var oBotonPulsado = oEvento.target;
	oXML = loadXMLDoc("datos.xml");
	var oDatos =oXML.querySelector("datos");
	
	//EMPLEADOS
	var oEmpleados = oDatos.querySelector("empleados").querySelectorAll("empleado");
	for(var i=0; i<oEmpleados.length; i++){
		var sDni = oEmpleados[i].getAttribute("dni");
		var sNombre = oEmpleados[i].querySelector("nombre").firstChild.nodeValue;
		var sApellidos = oEmpleados[i].querySelector("apellidos").firstChild.nodeValue;
		var iDepartamento = oEmpleados[i].querySelector("departamento").firstChild.nodeValue;
		var oEmpleado = new Empleado(sDni, sNombre, sApellidos, iDepartamento);
		oModelo.empleados.push(oEmpleado);
	}
	
	//PROVEEDORES
	var oProveedores = oDatos.querySelector("proveedores").querySelectorAll("proveedor");
	for(var i=0; i<oProveedores.length; i++){
		var sNif = oProveedores[i].getAttribute("nif");
		var sNombre = oProveedores[i].querySelector("nombre").firstChild.nodeValue;
		var sDireccion = oProveedores[i].querySelector("direccion").firstChild.nodeValue;
		var iTelefono = oProveedores[i].querySelector("telefono").firstChild.nodeValue;
		var sEmail = oProveedores[i].querySelector("email").firstChild.nodeValue;
		var sWeb = oProveedores[i].querySelector("web").firstChild.nodeValue;
		var sDescripcion = oProveedores[i].querySelector("descripcion").firstChild.nodeValue;
		var oProveedor = new Proveedor(sNif, sNombre, sDireccion, iTelefono, sEmail, sDescripcion, sWeb);
		oModelo.proveedores.push(oProveedor);
	}
	
	//ASEGURADORAS
	var oAseguradoras = oDatos.querySelector("aseguradoras").querySelectorAll("aseguradora");
	for(var i=0; i<oAseguradoras.length; i++){
		var iId = oAseguradoras[i].getAttribute("id");
		var sNombre = oAseguradoras[i].querySelector("nombre").firstChild.nodeValue;
		var iTelefono = oAseguradoras[i].querySelector("telefono").firstChild.nodeValue;
		var sEmail = oAseguradoras[i].querySelector("email").firstChild.nodeValue;
		var oAseguradora = new Aseguradora(iId, sNombre, iTelefono, sEmail);
		oModelo.aseguradoras.push(oAseguradora);
	}
	
	//CLIENTES
	var oClientes = oDatos.querySelector("clientes").querySelectorAll("cliente");
	for(var i=0; i<oClientes.length; i++){
		var sDni = oClientes[i].getAttribute("dni");
		var sNombre = oClientes[i].querySelector("nombre").firstChild.nodeValue;
		var sApellidos = oClientes[i].querySelector("apellidos").firstChild.nodeValue;
		var iTelefono = oClientes[i].querySelector("telefono").firstChild.nodeValue;
		var sDireccion = oClientes[i].querySelector("direccion").firstChild.nodeValue;
		var sEmail = oClientes[i].querySelector("email").firstChild.nodeValue;
		var oCliente = new Cliente(sDni, sNombre, sApellidos, iTelefono, sDireccion, sEmail);
		oModelo.clientes.push(oCliente);
	}
	
	//PRODUCTOS
	var oProductos = oDatos.querySelector("productos").querySelectorAll("producto");
	for(var i=0; i<oProductos.length; i++){
		var iId = oProductos[i].getAttribute("id");
		var sDniProveedor = oProductos[i].querySelector("proveedor").firstChild.nodeValue;
		var sNombre = oProductos[i].querySelector("nombre").firstChild.nodeValue;
		var fPrecio = oProductos[i].querySelector("precio").firstChild.nodeValue;
		var sDescripcion = oProductos[i].querySelector("descripcion").firstChild.nodeValue;
		var iStocks = oProductos[i].querySelector("stocks").firstChild.nodeValue;
		var oProducto = new Producto(iId, sDniProveedor, sNombre, fPrecio, sDescripcion, iStocks);
		oModelo.productos.push(oProducto);
	}
	
	//LINEAS
	var oLineas = oDatos.querySelector("lineas").querySelectorAll("linea");
	for(var i=0; i<oLineas.length; i++){
		var iId = oLineas[i].getAttribute("id");
		var iIdProducto = oLineas[i].querySelector("producto").firstChild.nodeValue;
		var iCantidad = oLineas[i].querySelector("cantidad").firstChild.nodeValue;
		var oLinea = new LineaProductos(iId, iIdProducto, iCantidad);
		oModelo.lineasProductos.push(oLinea);
	}
	
	//FACTURAS
	var oFacturas = oDatos.querySelector("facturas").querySelectorAll("factura");
	for(var i=0; i<oFacturas.length; i++){
		var iId = oFacturas[i].getAttribute("id");
		var iIdPresupuesto = oFacturas[i].querySelector("presupuesto").firstChild.nodeValue;
		var sDniCliente = oFacturas[i].querySelector("cliente").firstChild.nodeValue;
		var bPagada = oFacturas[i].querySelector("pagada").firstChild.nodeValue;
		var sFecha = oFacturas[i].querySelector("fecha").firstChild.nodeValue;
		var oFactura = new Factura(iId, iIdPresupuesto, sDniCliente, bPagada, sFecha);
		oModelo.facturas.push(oFactura);
	}
	
	//CATEGORIAS
	var oCategorias = oDatos.querySelector("categorias").querySelectorAll("categoria");
	for(var i=0; i<oCategorias.length; i++){
		var iId = oCategorias[i].getAttribute("id");
		var sNombre = oCategorias[i].querySelector("nombre").firstChild.nodeValue;
		var oCategoria = new Categoria(iId, sNombre);
		oModelo.categorias.push(oCategoria);
	}
	
	//VEHICULOS
	var oVehiculos = oDatos.querySelector("vehiculos").querySelectorAll("vehiculo");
	for(var i=0; i<oVehiculos.length; i++){
		var sMatricula = oVehiculos[i].getAttribute("matricula");
		var iIdCategoria = oVehiculos[i].querySelector("categoria").firstChild.nodeValue;
		var iIdAseguradora = oVehiculos[i].querySelector("aseguradora").firstChild.nodeValue;
		var sDniCliente = oVehiculos[i].querySelector("cliente").firstChild.nodeValue;
		var sMarca = oVehiculos[i].querySelector("marca").firstChild.nodeValue;
		var sModelo = oVehiculos[i].querySelector("modelo").firstChild.nodeValue;
		var oVehiculo = new Vehiculo(sMatricula, iIdCategoria, iIdAseguradora, sDniCliente, sMarca, sModelo);
		oModelo.vehiculos.push(oVehiculo);
	}
	
	//AVERIAS
	var oAverias = oDatos.querySelector("averias").querySelectorAll("averia");
	for(var i=0; i<oAverias.length; i++){
		var iId = oAverias[i].getAttribute("id");
		var sMatricula = oAverias[i].querySelector("vehiculo").firstChild.nodeValue;
		var sDniEmpleado = oAverias[i].querySelector("empleado").firstChild.nodeValue;
		var sDescripcion = oAverias[i].querySelector("descripcion").firstChild.nodeValue;
		var oAveria = new Averia(iId, sMatricula, sDniEmpleado, sDescripcion);
		oModelo.averias.push(oAveria);
	}
	
	//PRESUPUESTOS
	var oPresupuestos = oDatos.querySelector("presupuestos").querySelectorAll("presupuesto");
	for(var i=0; i<oPresupuestos.length; i++){
		var iId = oPresupuestos[i].getAttribute("id");
		var iIdLinea = oPresupuestos[i].querySelector("linea").firstChild.nodeValue;
		var iIdAveria = oPresupuestos[i].querySelector("averia").firstChild.nodeValue;
		var fPrecio = oPresupuestos[i].querySelector("precio").firstChild.nodeValue;
		var sFecha = oPresupuestos[i].querySelector("fecha").firstChild.nodeValue;
		var oPresupuesto = new Presupuesto(iId, iIdLinea, iIdAveria, fPrecio, sFecha);
		oModelo.presupuestos.push(oPresupuesto);
	}
	
	var oParrafo = document.createElement("P");
	var oTexto = texto("- Datos insertados.");
	oParrafo.appendChild(oTexto);
	oBotonPulsado.style.display="none";
	muestraMensaje("SUCCESSFULLY!", "green", new Array(oParrafo));
}

function loadXMLDoc(filename)
{
	if (window.XMLHttpRequest)
	  {
	  xhttp=new XMLHttpRequest();
	  }
	else // code for IE5 and IE6
	  {
	  xhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xhttp.open("GET",filename,false);
	
	xhttp.send();
	
	return xhttp.responseXML;
} 


















