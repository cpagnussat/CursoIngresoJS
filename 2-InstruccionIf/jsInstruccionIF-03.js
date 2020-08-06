function mostrar()
{
	//Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
	
	
	var edadIngresada;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>17)
	{
		alert("usted es mayor de edad");

	}

	if(edadIngresada<18) //todavia no usamos el else, por eso otra condicion
	{
		alert("usted es menor de edad");

	}



}//FIN DE LA FUNCIÓN