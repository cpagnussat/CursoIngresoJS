/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN<>

*/

	
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	respuesta = 'si';
	banderaDelPrimero = 0;

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero.");
	 	numeroIngresado = parseInt(numeroIngresado);

	 	if (banderaDelPrimero == 0)
	 	{
	 		numeroMaximo = numeroIngresado;
	 		numeroMinimo = numeroIngresado;
	 		banderaDelPrimero = 1;
	 	}
	 	else
	 	{
	 		if(numeroIngresado > numeroMaximo)
	 		{
	 			numeroMaximo = numeroIngresado;
	 		}
	 		else
	 		{
	 			if(numeroIngresado < numeroMinimo)
	 			{
	 				numeroMinimo = numeroIngresado;
	 			}
	 		}
	 	}

		respuesta = prompt("Desea ingresar otro numero?");
	}

	txtIdMaximo.value = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;

}//FIN DE LA FUNCIÓN