/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");

	while(claveIngresada!="utn750")
	{
		console.log("Clave incorrecta");
		claveIngresada = prompt("Clave erronea, ingrese nuevamente la clave.");
	}

	console.log("Clave correcta");
	
}//FIN DE LA FUNCIÓN
