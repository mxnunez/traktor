function Cliente(sDni, sNombre, sApellidos, iTelefono, iProvincia){
	this.dni = sDni;
	this.nombre = sNombre;
	this.apellidos = sApellidos;
	this.telefono = iTelefono;
	this.provincia = iProvincia;
}

function Vehiculo(sMatricula, sDniCliente, sMarca, sModelo, sCombustible){
	this.matricula = sMatricula;
	this.dniCliente = sDniCliente;
	this.marca = sMarca;
	this.modelo = sModelo;
	this.combustible = sCombustible;
}

function Reparacion(iId, sMatriculaVehiculo, dFecha, sDescripcion){
	this.id = iId;
	this.matriculaVehiculo = sMatriculaVehiculo;
	this.fecha = dFecha;
	this.descripcion = sDescripcion;
}

function TipoOperacion(iId, sNombre, fImporte){
	this.id = iId;
	this.nombre = sNombre;
	this.importe = fImporte;
}

function Operacion(iId, iIdReparacion, iIdTipoOperacion, iUnidades){
	this.id = iId;
	this.idReparacion = iIdReparacion;
	this.idTipoOperacion = iIdTipoOperacion;
	this.unidades = iUnidades;
}