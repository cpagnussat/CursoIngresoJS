function mostrar()
{
	//Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive)


	var edadIngresada;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

/*	if(edadIngresada<18)
	{
		if(edadIngresada>12)

			alert("usted es adolescente");

	}
*/
	if(edadIngresada<18 && edadIngresada>12)
	{
		alert("usted es adolescente");
	}





}//FIN DE LA FUNCIÓN