/*
Christian Pagnussat ejercicio 8 while 
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.  <>  

function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero.");
	 	numeroIngresado=parseInt(numeroIngresado);
	 	respuesta=prompt("Quiere ingresar otro numero?");
	 	contador++;

	 	while(numeroIngresado>0)
	 	{
	 		sumaPositivos=sumaPositivos+numeroIngresado;
	 		numeroIngresado="a";//para que salga del loop y no joda al while de abajo tampoco;claramente con un if es mucho mas facil
	 	}
	 	
	 	while(numeroIngresado<0)
	 	{
	 		multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;
	 		numeroIngresado="a";
	 	}
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN




function mostrar()
{
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;

	sumaPositivos=0;
	multiplicacionNegativos=1;
	
	do
	{
		numeroIngresado=prompt("Ingrese un numero.");
	 	numeroIngresado=parseInt(numeroIngresado);
	 	respuesta=prompt("Quiere ingresar otro numero?");

	 	if(numeroIngresado >= 0)
	 	{
	 		sumaPositivos=sumaPositivos+numeroIngresado;
	 	}
	 	else
	 	{
	 		multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;

	 	}
	 	
	}
	while(respuesta=="si");

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;


}//FIN DE LA FUNCIÓN

*/


function mostrar()
{
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;

	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero.");
	 	numeroIngresado=parseInt(numeroIngresado);	 	

	 	if(numeroIngresado >= 0)
	 	{
	 		sumaPositivos=sumaPositivos+numeroIngresado;
	 	}
	 	else
	 	{
	 		multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;

	 	}
	 	respuesta=prompt("Quiere ingresar otro numero?");
	}
	

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;


}//FIN DE LA FUNCIÓN