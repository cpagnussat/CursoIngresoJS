/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.
<>
*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	numeroIngresado = parseInt(numeroIngresado);

	while(numeroIngresado>9 || numeroIngresado<0)
	{
		numeroIngresado = prompt("Numero incorrecto, ingrese un número entre 0 y 10.");
	}
	
	txtIdNumero.value = numeroIngresado; //si esta antes del while puede mostrar un numero erroneo tambien

}//FIN DE LA FUNCIÓN