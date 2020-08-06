/*
ejercicio 8 switch, Christian Pagnussat
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	alert(destinoIngresado);

	switch (destinoIngresado)
	{
		case "Cataratas":
		case "Mar del plata":
			alert("En este destino hace calor");
			break;
		case "Bariloche":
		case "Ushuaia":
			alert("En este destino hace frio");
			break;
	}

}//FIN DE LA FUNCIÓN