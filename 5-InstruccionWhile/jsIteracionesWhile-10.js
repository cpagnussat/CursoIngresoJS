/*While ejercicio 10 Christian Pagnussat 
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadCeros;
	var numeroPar;
	var cantidadPar;
	var promedioPositivos;
	var promedioNegativos;

	sumaPositivos=0;
	sumaNegativos=0;
	cantidadNegativos=0;
	cantidadPositivos=0;
	cantidadCeros=0;
	cantidadPar=0;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero.");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado> 0)
		{
			sumaPositivos=sumaPositivos+numeroIngresado;
			cantidadPositivos++;
		}
		else
		{
			if(numeroIngresado<0)
			{
				sumaNegativos=sumaNegativos+numeroIngresado;
				cantidadNegativos++;
			}
			else
			{
				cantidadCeros++;
			}
		}

		numeroPar=numeroIngresado%2;

		if(numeroPar==0)// podria pone && numeroIngresado!=0, para que no me cuente el 0 como un numero par..
		{
			cantidadPar++;
		}

		respuesta=prompt("Desea ingresar otro numero?");
	}//fin del while

	document.write("La suma de los positivos es: "+sumaPositivos+"<br>");
	document.write("La suma de los negativos es: "+sumaNegativos+"<br>");	
	document.write("La cantidad de positivos es: "+cantidadPositivos+"<br>");
	document.write("La cantidad de negativos es: "+cantidadNegativos+"<br>");
	document.write("La cantidad de ceros es: "+cantidadCeros+"<br>");
	document.write("La cantidad de numeros pares es: "+cantidadPar+"<br>");
	promedioNegativos=sumaNegativos/cantidadNegativos;
	document.write("El promedio de negativos es: "+promedioNegativos+"<br>");
	promedioPositivos=sumaPositivos/cantidadPositivos;
	document.write("El promedio de positivos es: "+promedioPositivos+"<br>");
	

}//FIN DE LA FUNCIÓN

<> */

/*
Agregado while

Ingrese una edad(0 y 120), nombre y un sexo(f o m)
informar:
nivel 1:
cuantos son en total 
cuantos mayores de edad 
cuantos niños de edad 
cuantos adolescentes de edad 
la edad mas vieja;
la edad mas joven;

nivel:2

cuantas mujeres;
cuantos hombres;
cuantas adolescentes mujeres 
cuantos niños hombres 
el promedio de edad
el promedio de edad de las mujeres
el promedio de edad de los hombres
la cantidad de edades pares 

nivel 3:


el nombre de la persona mas vieja
el nombre de la persona mas joven

el sexo de la persona mas vieja
el sexo de la persona mas joven

nivel dios:

cuantas personas hay con la edad minima
cuantas personas hay con la edad maxima
el nombre de la ultima persona con la mayor edad encontrada
el nombre de la ultima persona con la menor edad encontrada

<>  */
function mostrar()
{

	var sexoIngresado;
	var edadIngresada;
	var personasTotales;
	var respuesta;
	var flagEdad;
	var edadMinima;
	var edadMaxima;
	var mayores;
	var niños;
	var adolescentes;
	var niñosHombres;
	var adolescentesMujeres;
	var mujeres;
	var hombres;
	var sumaEdad;
	var promedioEdad;
	var edadMujeres;
	var edadHombres;
	var promedioEdadMujeres;
	var promedioEdadHombres;
	var edadesPares;
	var nombreIngresado;
	var nombreJoven;
	var nombreViejo;
	var sexoJoven;
	var sexoViejo;
	var mismaEdadMinima;
	var mismaEdadMaxima;
	var flagUltimaEdad;
	var edadAnterior;//guarda la edad del ingreso anterior
	var ultimoMayor;
	var ultimoMenor;
	

	respuesta="si";		
	personasTotales=0;//esta variable hace la vez de contador
	mayores=0;
	niños=0;
	adolescentes=0;
	flagEdad=0;
	niñosHombres=0;
	adolescentesMujeres=0;
	mujeres=0;
	hombres=0;
	sumaEdad=0;
	edadMujeres=0;
	edadHombres=0;
	edadesPares=0;
	flagUltimaEdad=0;
	mismaEdadMinima=0;
	mismaEdadMaxima=0;


	while(respuesta=="si")
	{	
		//pedir edad
		edadIngresada = prompt("ingrese su edad entre 0 y 120");
		//validar edad
		while(edadIngresada>120 || edadIngresada<0)
		{
			edadIngresada=prompt("Error, ingrese su edad entre 0 y 120");
		}
		edadIngresada = parseInt(edadIngresada);

		//sumo edades
		sumaEdad=sumaEdad+edadIngresada;

		//edades pares, sin contar el numero 0 
		if((edadIngresada%2) == 0 && edadIngresada!=0)
		{
			edadesPares++;
		}

		//pedir sexo
		sexoIngresado = prompt("ingrese f ó m ");
		//validar sexo
		while(sexoIngresado!="f" && sexoIngresado!="m")
		{
			sexoIngresado=prompt("Error, ingrese f o m")
		}

		//pido nombre
		nombreIngresado=prompt("Ingrese su nombre");


		// sumo mujeres y hombres y sus edades;
		switch(sexoIngresado)
	 	{
	 		case "f":
	 			mujeres++;
	 			edadMujeres=edadMujeres+edadIngresada;//si es mujer sumar las edades
	 			break;
	 		case "m":
	 			hombres++;
	 			edadHombres=edadHombres+edadIngresada;//si es hombre sumar las edades
	 			break;
	 	}

		//edad maxima y minima
		if (flagEdad == 0)
	 	{
	 		edadMaxima = edadIngresada;
	 		edadMinima = edadIngresada;
	 		nombreJoven = nombreIngresado;
	 		nombreViejo = nombreIngresado;
	 		sexoViejo = sexoIngresado;
	 		sexoJoven = sexoIngresado;
	 		mismaEdadMaxima++;
	 		mismaEdadMinima++;
	 		
	 		flagEdad = 1;	
	 	}
	 	else
	 	{

	 		if(edadIngresada >= edadMaxima)
	 		{	
	 			if(edadIngresada==edadMaxima)
	 			{
	 				mismaEdadMaxima++;
	 			}

	 			edadMaxima = edadIngresada;
	 			nombreViejo = nombreIngresado;
	 			sexoViejo = sexoIngresado;

	 			
	 		} 		 	
	 		else
	 		{
	 			if(edadIngresada <= edadMinima)
	 			{
	 				if(edadIngresada==edadMinima)
		 			{
		 				mismaEdadMinima++;
		 			}

	 				edadMinima = edadIngresada;
	 				nombreJoven = nombreIngresado;
	 				sexoJoven = sexoIngresado;

	 				
	 			}
	 		}
 		}
	 	

	 	//nombre del ultimo mayor y menor, (compara los ultimos dos ingresos)

	 	if(flagUltimaEdad == 0)
	 	{
	 		ultimoMenor=nombreIngresado;
	 		ultimoMayor=nombreIngresado;

	 		flagUltimaEdad=1;
	 	}
	 	else
	 	{
		 	if(edadIngresada > edadAnterior)
		 	{
		 		ultimoMayor=nombreIngresado;
		 	}
		 	else
		 	{
		 		ultimoMenor=nombreIngresado;
		 	}
	 	}
	 	


	 	//cantidad de adolescentes niños y mayores
	 	if(edadIngresada<18 && edadIngresada>12)
	 	{
	 		adolescentes++;
	 		
	 		switch(sexoIngresado)
	 		{
	 			case "f":
	 				adolescentesMujeres++;
	 				break;
	 		}
	 	}
	 	else
	 	{
	 		if(edadIngresada>17)
	 		{
	 			mayores++;
	 		}
	 		else
	 		{
	 			niños++;
	 			switch(sexoIngresado)
	 			{
		 			case "m":
		 				niñosHombres++;
		 				break;
	 			}
	 		}
	 	}	 	

		personasTotales++;
		edadAnterior=edadIngresada;//variable que guarda la edad del anterior ingreso
		respuesta = prompt("Desea ingresar otra persona?");

	}//fin del while

	//nivel 1
	document.write("Las personas totales son: "+personasTotales+"<br>");
	document.write("La edad minima es: "+edadMinima+"<br>");
	document.write("La edad maxima es: "+edadMaxima+"<br>");
	document.write("La cantidad de mayores es: "+mayores+"<br>");
	document.write("La cantidad de adolescentes es: "+adolescentes+"<br>");
	document.write("La cantidad de niños es: "+niños+"<br>");
	//nivel 2
	document.write("La cantidad de adolescentes mujeres es: "+adolescentesMujeres+"<br>");
	document.write("La cantidad de niños hombres es: "+niñosHombres+"<br>");
	document.write("La cantidad de mujeres es: "+mujeres+"<br>");
	document.write("La cantidad de hombres es: "+hombres+"<br>");	
	promedioEdad=sumaEdad/personasTotales;
	document.write("El promedio de edad es: "+promedioEdad+"<br>");	
	promedioEdadMujeres=edadMujeres/mujeres;
	promedioEdadHombres=edadHombres/hombres;
	document.write("El promedio de edad de hombres es: "+promedioEdadHombres+"<br>");	
	document.write("El promedio de edad de mujeres es: "+promedioEdadMujeres+"<br>");	
	document.write("El numero de edades pares es: "+edadesPares+"<br>");	
	//nivel 3
	document.write("El nombre de la persona mas joven es: "+nombreJoven+"<br>");	
	document.write("El nombre de la persona mas vieja es: "+nombreViejo+"<br>");	
	document.write("El sexo de la persona mas joven es: "+sexoJoven+"<br>");	
	document.write("El sexo de la persona mas vieja es: "+sexoViejo+"<br>");	
	//nivel dios
	document.write("La cantidad de personas con la edad minima es: "+mismaEdadMinima+"<br>");	
	document.write("La cantidad de personas con la edad maxima es: "+mismaEdadMaxima+"<br>");	
	document.write("El nombre del ultimo mayor es: "+ultimoMayor+"<br>");	
	document.write("El nombre del ultimo menor es: "+ultimoMenor+"<br>");	
	






}//FIN DE LA FUNCIÓN
