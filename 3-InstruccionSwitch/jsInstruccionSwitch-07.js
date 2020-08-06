/*
ejercicio 7 switch, christian pagnussat
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/


function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	//alert(destinoIngresado);

	switch(destinoIngresado)
	{
		case "Ushuaia": //en el html esta como "Cordoba"
			alert("Este destino se encuentra hacia el sur");
			break;
		case "Cataratas":
			alert("Este destino se encuentra al norte");
			break;
		case "Mar del plata":
			alert("Este destino se encuentra hacia el este");
			break;
		case "Bariloche":
			alert("Este destino se encuentra hacia el oeste");
			break;

	}

}//FIN DE LA FUNCIÓN