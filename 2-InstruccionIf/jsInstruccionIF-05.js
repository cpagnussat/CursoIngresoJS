//Al ingresar una edad solo debemos informar si la persona NO es adolescente. <>
function mostrar()
{
	var edadIngresada;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

/*	if(edadIngresada>17)
	{
		alert("usted no es adolescente");
	}
	
	if(edadIngresada<13)
	{
		alert("usted no es adolescente");
	}
*/

	if(edadIngresada>17 || edadIngresada<13)	
	{
		alert("usted no es adolescente");
	}

}//FIN DE LA FUNCIÓN