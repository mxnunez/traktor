/*OBJETO MODELO*/
function Modelo(){
	this.empleados = new Array();
	this.proveedores = new Array();
	this.aseguradoras = new Array();
	this.clientes = new Array();
	this.productos = new Array();
	this.lineasProductos = new Array();
	this.facturas = new Array();
	this.categorias = new Array();
	this.vehiculos = new Array();
	this.averias = new Array();
	this.presupuestos = new Array();
}
/*FUNCIONES MODELO*/
Modelo.prototype.empleadosToHTMLTable = function(){
	var cabecera=new Array("DNI","Nombre","Apellidos","Departamento");
	var cuerpo=new Array();
	for(var i=0;i<this.empleados.length;i++){
		cuerpo.push(new Array(this.empleados[i].dni,this.empleados[i].nombre,this.empleados[i].apellidos,this.empleados[i].departamento));
	}
	return creaTabla("EMPLEADOS", cabecera, cuerpo);
}

Modelo.prototype.proveedoresToHTMLTable = function(){
	var cabecera=new Array("NIF","Nombre","Dirección","Teléfono","Email","Descripción","Web");
	var cuerpo=new Array();
	for(var i=0;i<this.proveedores.length;i++){
		cuerpo.push(new Array(this.proveedores[i].nif,this.proveedores[i].nombre,this.proveedores[i].direccion,this.proveedores[i].telefono,this.proveedores[i].email,this.proveedores[i].descripcion,this.proveedores[i].web));
	}
	return creaTabla("PROVEEDORES", cabecera, cuerpo);
}

Modelo.prototype.aseguradorasToHTMLTable = function(){
	var cabecera=new Array("ID","Nombre","Teléfono","Email");
	var cuerpo=new Array();
	for(var i=0;i<this.aseguradoras.length;i++){
		cuerpo.push(new Array(this.aseguradoras[i].id,this.aseguradoras[i].nombre,this.aseguradoras[i].telefono,this.aseguradoras[i].email));
	}
	return creaTabla("ASEGURADORAS", cabecera, cuerpo);
}

Modelo.prototype.clientesToHTMLTable = function(){
	var cabecera=new Array("DNI","Nombre","Apellidos","Teléfono","Dirección","Email");
	var cuerpo=new Array();
	for(var i=0;i<this.clientes.length;i++){
		cuerpo.push(new Array(this.clientes[i].dni,this.clientes[i].nombre,this.clientes[i].apellidos,this.clientes[i].telefono,this.clientes[i].direccion,this.clientes[i].email));
	}
	return creaTabla("CLIENTES", cabecera, cuerpo);
}

Modelo.prototype.productosToHTMLTable = function(){
	var cabecera=new Array("ID","DNI_Proveedor","Nombre","Precio","Descripción","Stock");
	var cuerpo=new Array();
	for(var i=0;i<this.productos.length;i++){
		cuerpo.push(new Array(this.productos[i].id,this.productos[i].dni_proveedor,this.productos[i].nombre,this.productos[i].precio,this.productos[i].descripcion,this.productos[i].stock));
	}
	return creaTabla("PRODUCTOS", cabecera, cuerpo);
}

Modelo.prototype.lineasProductosToHTMLTable = function(){
	var cabecera=new Array("ID","ID_Producto","Cantidad");
	var cuerpo=new Array();
	for(var i=0;i<this.lineasProductos.length;i++){
		cuerpo.push(new Array(this.lineasProductos[i].id,this.lineasProductos[i].idProducto,this.lineasProductos[i].Cantidad));
	}
	return creaTabla("LINEAS DE PRODUCTOS", cabecera, cuerpo);
}

Modelo.prototype.facturasToHTMLTable = function(){
	var cabecera=new Array("ID","ID_Presupuesto","DNI_Cliente","Pagada","Fecha");
	var cuerpo=new Array();
	for(var i=0;i<this.facturas.length;i++){
		cuerpo.push(new Array(this.facturas[i].id,this.facturas[i].idPresupuesto,this.facturas[i].dniCliente,this.facturas[i].pagada,this.facturas[i].fecha));
	}
	return creaTabla("FACTURAS", cabecera, cuerpo);
}

Modelo.prototype.categoriasToHTMLTable = function(){
	var cabecera=new Array("ID","Nombre");
	var cuerpo=new Array();
	for(var i=0;i<this.categorias.length;i++){
		cuerpo.push(new Array(this.categorias[i].id,this.categorias[i].nombre));
	}
	return creaTabla("CATEGORIAS", cabecera, cuerpo);
}

Modelo.prototype.vehiculosToHTMLTable = function(){
	var cabecera=new Array("Matricula","ID_Categoria","ID_Aseguradora","DNI_Cliente","Marca","Modelo");
	var cuerpo=new Array();
	for(var i=0;i<this.vehiculos.length;i++){
		cuerpo.push(new Array(this.vehiculos[i].matricula,this.vehiculos[i].idCategoria,this.vehiculos[i].idAseguradora,this.vehiculos[i].dniCliente,this.vehiculos[i].marca,this.vehiculos[i].modelo));
	}
	return creaTabla("VEHICULOS", cabecera, cuerpo);
}

Modelo.prototype.averiasToHTMLTable = function(){
	var cabecera=new Array("ID","Matrícula","DNI_Empleado","Descripción");
	var cuerpo=new Array();
	for(var i=0;i<this.averias.length;i++){
		cuerpo.push(new Array(this.averias[i].id,this.averias[i].matriculaVehiculo,this.averias[i].dniEmpleado,this.averias[i].descripcion));
	}
	return creaTabla("AVERIAS", cabecera, cuerpo);
}

Modelo.prototype.presupuestosToHTMLTable = function(){
	var cabecera=new Array("ID","ID_LInea_Productos","ID_Averia","Precio","Fecha");
	var cuerpo=new Array();
	for(var i=0;i<this.presupuestos.length;i++){
		cuerpo.push(new Array(this.presupuestos[i].id,this.presupuestos[i].idLineaProductos,this.presupuestos[i].idAveria,this.presupuestos[i].precio,this.presupuestos[i].fecha));
	}
	return creaTabla("PRESUPUESTOS", cabecera, cuerpo);
}

Modelo.prototype.buscarProveedor=function(nif){
	var bEncontrado=false;
	var oProveedor=new Proveedor();
	for(var i=0;i<this.proveedores.length && !bEncontrado;i++)
	{
		if(this.proveedores[i].nif==nif)
		{
			bEncontrado=true;
			oProveedor=this.proveedores[i];
		}
	}
  return oProveedor;
}

Modelo.prototype.buscarEmpleado=function(dni){
	var bEncontrado=false;
	var oEmpleado = new Empleado();
	for(var i=0; i<this.empleados.length && !bEncontrado; i++){
		if(this.empleados[i].dni==dni){
			bEncontrado=true;
			oEmpleado=this.empleados[i];
		}
	}
	return oEmpleado;
}

Modelo.prototype.buscarAseguradora=function(id){
	var bEncontrado=false;
	var oAseguradora = new Aseguradora();
	for(var i=0; i<this.aseguradoras.length && !bEncontrado; i++){
		if(this.aseguradoras[i].id==id){
			bEncontrado=true;
			oAseguradora=this.aseguradoras[i];
		}
	}
	return oAseguradora;
}

Modelo.prototype.buscarCliente=function(dni){
	var bEncontrado=false;
	var oCliente = new Cliente();
	for(var i=0; i<this.clientes.length && !bEncontrado; i++){
		if(this.clientes[i].dni==dni){
			bEncontrado=true;
			oCliente=this.clientes[i];
		}
	}
	return oCliente;
}

Modelo.prototype.buscarAveria=function(id){
	var bEncontrado=false;
	var oAveria = new Averia();
	for(var i=0; i<this.averias.length && !bEncontrado; i++){
		if(this.averias[i].id==id){
			bEncontrado=true;
			oAveria=this.averias[i];
		}
	}
	return oAveria;
}

Modelo.prototype.buscarVehiculo=function(matricula){
	var bEncontrado=false;
	var oVehiculo = new Vehiculo();
	for(var i=0; i<this.vehiculos.length && !bEncontrado; i++){
		if(this.vehiculos[i].matricula==matricula){
			bEncontrado=true;
			oVehiculo=this.vehiculos[i];
		}
	}
	return oVehiculo;
}

Modelo.prototype.buscarProducto=function(id){
	var bEncontrado=false;
	var oProducto = new Producto();
	for(var i=0; i<this.productos.length && !bEncontrado; i++){
		if(this.productos[i].id==id){
			bEncontrado=true;
			oProducto=this.productos[i];
		}
	}
	return oProducto;
}

Modelo.prototype.buscarCategoria=function(id){
	var bEncontrado=false;
	var oCategoria = new Categoria();
	for(var i=0; i<this.categorias.length && !bEncontrado; i++){
		if(this.categorias[i].id==id){
			bEncontrado=true;
			oCategoria=this.categorias[i];
		}
	}
	return oCategoria;
}

Modelo.prototype.buscarPresupuesto=function(id){
	var bEncontrado=false;
	var oPresupuesto = new Presupuesto();
	for(var i=0; i<this.presupuestos.length && !bEncontrado; i++){
		if(this.presupuestos[i].id==id){
			bEncontrado=true;
			oPresupuesto=this.presupuestos[i];
		}
	}
	return oPresupuesto;
}

Modelo.prototype.buscarFactura=function(id){
	var bEncontrado=false;
	var oFactura = new Factura();
	for(var i=0; i<this.facturas.length && !bEncontrado; i++){
		if(this.facturas[i].id==id){
			bEncontrado=true;
			oFactura=this.facturas[i];
		}
	}
	return oFactura;
}

Modelo.prototype.buscarLinea=function(id){
	var bEncontrado=false;
	var oLinea = new LineaProductos();
	for(var i=0; i<this.lineasProductos.length && !bEncontrado; i++){
		if(this.lineasProductos[i].id==id){
			bEncontrado=true;
			oLinea=this.lineasProductos[i];
		}
	}
	return oLinea;
}
/*FIN OBJETO MODELO*/

/*OBJETO EMPLEADO*/
function Empleado(sDni, sNombre, sApellidos, iDepartamento){
	this.dni = sDni;
	this.nombre = sNombre;
	this.apellidos = sApellidos;
	this.departamento = iDepartamento;
}
/*FUNCIONES EMPLEADO*/

/*FIN DE OBJETO EMPLEADO*/

/*OBJETO PROVEEDOR*/
function Proveedor(sNif, sNombre, sDireccion, iTelefono, sEmail, sDescripcion, sWeb){
	this.nif = sNif;
	this.nombre = sNombre;
	this.direccion = sDireccion;
	this.telefono = iTelefono;
	this.email = sEmail;
	this.descripcion = sDescripcion;
	this.web = sWeb;
}
/*FUNCIONES PROVEEDOR*/

/*FIN DE OBJETO PROVEEDOR*/
/*OBJETO ASEGURADORA*/
function Aseguradora(iID, sNombre, iTelefono, sEmail){
	this.id = iID;
	this.nombre = sNombre;
	this.telefono = iTelefono;
	this.email = sEmail;
}
/*FUNCIONES ASEGUADORA*/

/*FIN DE OBJETO ASEGURADORA*/

/*OBJETO CLIENTE*/
function Cliente(sDni, sNombre, sApellidos, iTelefono, sDireccion, sEmail){
	this.dni = sDni;
	this.nombre = sNombre;
	this.apellidos = sApellidos;
	this.telefono = iTelefono;
	this.direccion = sDireccion;
	this.email = sEmail;
}
/*FUNCIONES CLIENTE*/

/*FIN DE OBJETO CLIENTE*/

/*OBJETO PRODUCTO*/
function Producto(iID, sDni_proveedor, sNombre, fPrecio, sDescripcion, iStock){
	this.id = iID;
	this.dni_proveedor = sDni_proveedor;
	this.nombre = sNombre;
	this.precio = fPrecio;
	this.descripcion = sDescripcion;
	this.stock = iStock;
}
/*FUNCIONES DE OBJETO PRODUCTO*/

/*FIN DE OBJETO PRODUCTO*/

/*OBJETO LINEAPRODUCTOS*/
function LineaProductos(iID, iID_producto, iCantidad){
	this.id = iID;
	this.idProducto = iID_producto;
	this.Cantidad = iCantidad;
}
/*FUNCIONES LINEAPRODUCTOS*/

/*FIN DE OBJETO LINEAPRODUCTOS*/

/*OBJETO FACTURA*/
function Factura(iID, iID_presupuesto, sDni_cliente, bPagada, oFecha){
	this.id = iID;
	this.idPresupuesto = iID_presupuesto;
	this.dniCliente = sDni_cliente;
	this.pagada = bPagada;
	this.fecha = oFecha;
}
/*FUNCIONES FACTURA*/

/*FIN DE OBJETO FACTURA*/

/*OBJETO CATEGORIA*/
function Categoria(iID, sNombre){
	this.id = iID;
	this.nombre = sNombre;
}
/*FUNCIONES CATEGORIA*/

/*FIN DE OBJETO CATEGORIA*/

/*OBJETO VEHICULO*/
function Vehiculo(sMatricula, iID_categoria, iID_aseguradora, sDni_cliente, sMarca, sModelo){
	this.matricula = sMatricula;
	this.idCategoria = iID_categoria;
	this.idAseguradora = iID_aseguradora;
	this.dniCliente = sDni_cliente;
	this.marca = sMarca;
	this.modelo = sModelo;
}
/*FUNCIONES VEHICULO*/

/*FIN DE OBJETO VEHICULO*/

/*OBJETO AVERIA*/
function Averia(iID, sMatricula_vehiculo, sDni_empleado, sDescripcion){
	this.id = iID;
	this.matriculaVehiculo = sMatricula_vehiculo;
	this.dniEmpleado = sDni_empleado;
	this.descripcion = sDescripcion;
}
/*FUNCIONES AVERIA*/

/*FIN DE OBJETO AVERIA*/

/*OBJETO PRESUPUESTO*/
function Presupuesto(iID, iID_lineaProductos, iID_averia, fPrecio, oFecha){
	this.id = iID;
	this.idLineaProductos = iID_lineaProductos;
	this.idAveria = iID_averia;
	this.precio = fPrecio;
	this.fecha = oFecha;
}
/*FUNCIONES PRESUPUESTO*/

/*FIN DE OBJETO PRESUPUESTO*/

/*OBJETO VALIDACION*/
function Validacion(sTexto){
	this.texto = sTexto;
}
/*FUNCIONES VALIDACION*/
Validacion.prototype.validarDni = function(){
	var oExpReg = /^\d{8}[-]?[A-Z]{1}$/;
	return oExpReg.test(this.texto);
}

Validacion.prototype.validarNombre = function(){
	var oExpReg = /^[a-zA-Z\s\u00f1\u00d1áéíóúÁÉÍÓÚ]{2,40}$/;
	return oExpReg.test(this.texto);
}

Validacion.prototype.validarApellidos = function(){
	var oExpReg = /^[a-zA-Z\s\u00f1\u00d1áéíóúÁÉÍÓÚ]{2,60}$/;
	return oExpReg.test(this.texto);
}

Validacion.prototype.validarDireccion = function(){
	var oExpReg = /^[a-zA-Z\s\u00f1\u00d1\dáéíóúÁÉÍÓÚ\/\º\ª]{5,80}$/;
	return oExpReg.test(this.texto);
}

Validacion.prototype.validarTelefono = function(){
	var oExpReg = /^\d{9}$/;
	return oExpReg.test(this.texto);
}

Validacion.prototype.validarEmail = function(){
	var oExpReg = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm;
	return oExpReg.test(this.texto);
}

Validacion.prototype.validarWeb = function(){
	var oExpReg = /^w{3}[\.]{1}[a-zA-Z\_\-]{2,20}[\.]{1}[a-z]{2,4}$/;
	return oExpReg.test(this.texto);
}

Validacion.prototype.validarDepartamento = function(){
	var oExpReg = /^\d{1,2}$/;
	return oExpReg.test(this.texto);
}

Validacion.prototype.validarId = function(){
	var oExpReg = /^\d{4}$/;
	return oExpReg.test(this.texto);
}

Validacion.prototype.validarMatricula = function(){
	var oExpReg = /^[A-Z]{1,2}\s\d{4}\s([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]){3}$/;
	return oExpReg.test(this.texto);
}

Validacion.prototype.validarCantidad = function(){
	var oExpReg = /^\d{1,7}$/;
	return oExpReg.test(this.texto);
}

Validacion.prototype.validarFecha = function(){
	var oExpReg = /^(\d{2})(\/{1})(\d{2})(\/{1})(\d{4})$/;
	return oExpReg.test(this.texto);
}

Validacion.prototype.validarNumeroDeStocks = function(){
	var oExpReg = /^\d{1,2}$/;
	return oExpReg.test(this.texto);
}

Validacion.prototype.validarPrecio = function(){
	var oExpReg = /^\d{1,}\.\d{1,2}$/;
	return oExpReg.test(this.texto);
}

Validacion.prototype.validarMarca = function(){
	var oExpReg = /^[a-zA-Z\d\s\u00f1\u00d1\dáéíóúÁÉÍÓÚ]{2,30}$/
	return oExpReg.test(this.texto);
}

Validacion.prototype.validarModelo = function(){
	var oExpReg = /^[a-zA-Z\d\s\u00f1\u00d1\dáéíóúÁÉÍÓÚ]{2,30}$/
	return oExpReg.test(this.texto);
}
/*FIN DE OBJETO VALIDACION*/













