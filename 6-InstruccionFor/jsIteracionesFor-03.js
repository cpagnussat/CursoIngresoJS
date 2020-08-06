/*christian pagnussat ejercicio 1 for  . <>  
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
*/
function mostrar()
{

	var repeticiones;	
	repeticiones = prompt("ingrese el número de repeticiones");

	for ( i = 1 ; i  <= repeticiones ; i++)
	{
		document.write("Hola UTN FRA" + " <br>");
	}
	


}//FIN DE LA FUNCIÓN