
/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio, <br>
de cada una debo obtener los siguientes datos: 
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),<br>
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), <br>
la Marca y 
el fabricante. <br>
Se debe Informar al usuario lo siguiente:<br>

a) Del más barato de los alcohol, la cantidad de unidades y el fabricante<br>
b) Del tipo con mas unidades, el promedio por compra <br>
c) Cuántas unidades de jabones hay en total <br><br>

function mostrar()
{
	var tipo;
	var precio;
	var cantidaUnidades;
	var marca;
	var fabricante;
	var contador;
	var alcoholMasBarato;
	var alcoholMasBaratoUnidades;
	var alcoholMasBaratoFabricante;
	var banderaPrimerAlcohol;
	var contadorJabones;
	var contadorAlcohol;
	var contadorBarbijo;
	var acumuladorJabon;
	var acumuladorAlcohol;
	var acumuladorBarbijo;
	var promedioMasUnidades;
	var tipoMasUnidades;


	 contadorJabones=0;
	 contadorAlcohol=0;
	 contadorBarbijo=0;
	 acumuladorJabon=0;
	 acumuladorAlcohol=0;
	 acumuladorBarbijo=0;
	contador=0;
	banderaPrimerAlcohol="es el primero";

	while(contador<5)
	{
		tipo=prompt("ingrese tipo");
		while(tipo!="barbijo" && tipo !="alcohol" && tipo!="jabon")
		{
			tipo=prompt("error reingrese tipo");
		}

		precio=prompt("ingrese precio");
		precio=parseInt(precio);
		while(precio<100 || precio>300)
		{
			precio=prompt("error reingrese precio");
			precio=parseInt(precio);
		}

		cantidaUnidades=prompt("ingrese cantidaUnidades");
		cantidaUnidades=parseInt(cantidaUnidades);
		while(cantidaUnidades<0 || cantidaUnidades>1000)
		{
			cantidaUnidades=prompt("error reingrese cantidaUnidades");
			cantidaUnidades=parseInt(cantidaUnidades);
		}
		marca=prompt("ingrese marca");
		fabricante=prompt("ingrese fabricante");

		// datos ingresados

		if(tipo=="alcohol")
		{
			if(banderaPrimerAlcohol=="es el primero")
			{
				alcoholMasBarato=precio;
				alcoholMasBaratoFabricante=fabricante;
				alcoholMasBaratoUnidades=cantidaUnidades;
				banderaPrimerAlcohol="ya paso";
			}else
			{
				if(precio<alcoholMasBarato)
				{
					alcoholMasBarato=precio;
					alcoholMasBaratoFabricante=fabricante;
					alcoholMasBaratoUnidades=cantidaUnidades;
				}
			}
		}	
		switch(tipo)
		{
			case "jabon":
				contadorJabones++;
				acumuladorJabon=acumuladorJabon+cantidaUnidades;
				break;
			case "alcohol":
				contadorAlcohol++;
				acumuladorAlcohol=acumuladorAlcohol+cantidaUnidades;
				break;
			case "barbijo":
				acumuladorBarbijo=acumuladorBarbijo+cantidaUnidades;
				contadorBarbijo++;
				break;
		}



		contador++;
	}//del while prncipal

	if(acumuladorBarbijo>acumuladorAlcohol && acumuladorBarbijo>acumuladorJabon)
	{
		promedioMasUnidades=acumuladorBarbijo/contadorBarbijo;
		tipoMasUnidades="barbijo";
	}else
	{
		if(acumuladorAlcohol>acumuladorJabon)
		{
			promedioMasUnidades=acumuladorAlcohol/contadorAlcohol;
			tipoMasUnidades="alcohol";
		}else
		{
			promedioMasUnidades=acumuladorJabon/contadorJabones;
			tipoMasUnidades="jobones";
		}
	}

	


}


Debemos realizar la carga de 5(cinco) productos de prevención de contagio, <br>
de cada una debo obtener los siguientes datos: 
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),<br>
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), <br>
la Marca y 
el fabricante. <br>
Se debe Informar al usuario lo siguiente:<br>

a) Del más barato de los alcohol, la cantidad de unidades y el fabricante<br>
b) Del tipo con mas unidades, el promedio por compra <br>
c) Cuántas unidades de jabones hay en total <br><br>
<>
*/

function mostrar()
{

	var tipoIngresado;
	var precioIngresado;
	var cantidadIngresada;
	var marca;
	var fabricante;
	var respuesta;
	var precioAlcoholMasBarato;
	var banderaPrimerAlcohol;
	var cantidadAlcoholBarato;
	var fabricanteAlcoholBarato;
	var acumuladorJabon;
	var acumuladorAlcohol;
	var acumuladorBarbijo;
	var contadorBarbijo;
	var contadorJabon;
	var contadorAlcohol;
	var promedioMasUnidades;

	respuesta="si";
	banderaPrimerAlcohol=0;
	acumuladorJabon=0;
	acumuladorAlcohol=0;
	acumuladorBarbijo=0;
	contadorBarbijo=0;
	contadorJabon=0;
	contadorAlcohol=0;


	while(respuesta=="si")
	{
		//pido el tipo
		tipoIngresado=prompt("Ingrese barbijo, jabon o alcohol");
		//valido el tipo
		while(tipoIngresado!="barbijo" && tipoIngresado!="jabon" && tipoIngresado!="alcohol")
		{
			tipoIngresado=prompt("Error, por favor ingrese el tipo correcto");
		}

		//pido precio
		precioIngresado=prompt("Ingrese el precio entre 100 y 300");
		precioIngresado=parseInt(precioIngresado);
		//valido precio
		while(precioIngresado < 100 || precioIngresado > 300)
		{
			precioIngresado=prompt("Error, ingrese el precio entre 100 y 300");
		}

		//pedir cantidad
		cantidadIngresada=prompt("Ingrese la cantidad, no mayor a 1000");
		cantidadIngresada=parseInt(cantidadIngresada);
		//valido cantidad
		while(cantidadIngresada == 0 || cantidadIngresada < 0 || cantidadIngresada > 1000)
		{
			cantidadIngresada=prompt("Error, ingrese la cantidad correcta, no mayor a 1000");
		}

		marca=prompt("Ingrese la marca");
		fabricante=prompt("Ingrese el fabricante");


		//alcohol mas barato

		if(tipoIngresado=="alcohol")
		{
			if(banderaPrimerAlcohol==0)
			{
				precioAlcoholMasBarato=precioIngresado;
				cantidadAlcoholBarato=cantidadIngresada;
				fabricanteAlcoholBarato=fabricante;

				banderaPrimerAlcohol++;
			}
			else
			{
				if(precioIngresado<precioAlcoholMasBarato)
				{
					precioAlcoholMasBarato=precioIngresado;
					cantidadAlcoholBarato=cantidadIngresada;
					fabricanteAlcoholBarato=fabricante;

				}
			}
		}

		switch(tipoIngresado)
		{
			case "barbijo":
				acumuladorBarbijo=acumuladorBarbijo+cantidadIngresada;
				contadorBarbijo++;
				break;
			case "alcohol":
				acumuladorAlcohol=acumuladorAlcohol+cantidadIngresada;
				contadorAlcohol++;
				break;
			case "jabon":
				acumuladorJabon=acumuladorJabon+cantidadIngresada;
				contadorJabon++;
				break;
		}

		


		respuesta=prompt("Desea ingresar otro producto?");

	}//fin del while


	if(acumuladorBarbijo > acumuladorJabon && acumuladorBarbijo > acumuladorAlcohol)
	{
		promedioMasUnidades=acumuladorBarbijo/contadorBarbijo;
	}
	else
	{
		if(acumuladorJabon > acumuladorAlcohol)
		{
			promedioMasUnidades=acumuladorJabon/contadorJabon;
		}
		else
		{
			promedioMasUnidades=acumuladorAlcohol/contadorAlcohol;
		}
	}


	document.write("La cantidad de alcohol mas barato es "+cantidadAlcoholBarato+"<br>");
	document.write("El fabricante de alcohol mas barato es "+fabricanteAlcoholBarato+"<br>");
	document.write("El promedio de compra del tipo de mas unidades es  "+promedioMasUnidades+"<br>");
	document.write("La cantidad total de jabones es  "+acumuladorJabon+"<br>");



}