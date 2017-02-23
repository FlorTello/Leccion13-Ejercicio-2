function mostrarDatos(){
	var array = [ { nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "23 de enero" },
				{ nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre" }, 
				{ nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo" }, 
				{ nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleanios : "10 de octubre" }, 
				{ nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" } ];

	var mostrar = "<ul>";
	array.forEach(function(e){
		mostrar += "<div><li> Nombre: "+e.nombre+"<br /></li>"+
				   "<li>Apellido: "+e.apellido+"<br /></li>"+
				   "<li>Rol: "+e.rol+"<br /></li>"+
				   "<li>Cumpleaños: "+e.cumpleanios+"<br /></li></div><br />";
	});
	mostrar += "</ul>";
	document.write(mostrar);
}
mostrarDatos();