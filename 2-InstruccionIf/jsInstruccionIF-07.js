//Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' <>

/*function mostrar()
{
	var edadIngresada;
	var estadoCivil

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	estadoCivil=document.getElementById("estadoCivil").value; //recordar usar las comillas dobles con el getElementById

	if(edadIngresada<18 && estadoCivil!="Soltero")            //recordar usar las comillas dobles en el valor a comparar
	{
		alert("Es muy pequeño para NO ser soltero");

	}


}//FIN DE LA FUNCIÓN

Ejercicio de clase 


/*Se pide ingresar una edad y un estado cicvil
	a todos los mayores de edad, mostrar el mensaje "se responsable"
	a todos los menores de edad, mostrar el mensaje "respeta a tus mayores"
	a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
	a los niños tambien informar "hagan la tarea" 
	a los adolescentes casado o Divorciado " sos muy joven para no ser soltero"
	a los mayores de edad solteros, tambien informar "a vivir la vida"
	a los mayores de edad casados , tambien informar "a disfrutar la pareja"
	a los divorciados informar tambien "a intentarlo nuevamente"

    la menor cantidad de if 
    no repetir los alert o los mensajes 
    <>



function mostrar()
{

var edadIngresada;
var estadoCivil

edadIngresada=txtIdEdad.value;
edadIngresada=parseInt(edadIngresada);

estadoCivil=document.getElementById("estadoCivil").value;

if(edadIngresada>17){
	alert("Se responsable");
}
	else{

		alert("Respeta a tus mayores");

		if(estadoCivil=="Casado" || estadoCivil=="Divorciado"){
			alert("Sos muy joven para no ser soltero");

		}

		
  	}

if(edadIngresada>17 && estadoCivil=="Soltero"){
	alert("A vivir la vida");
}
	else{
		if(edadIngresada>17 && estadoCivil=="Casado"){
			alert("a disfrutar la pareja");
			}
	}
	

if(edadIngresada>60){
	alert("Sos persona de riesgo");
}
	else{

		if(edadIngresada<13){
			alert("Hagan la tarea");
		}
	}

if(estadoCivil=="Divorciado"){

	alert("A intentarlo nuevamente");
}

}//FIN DE LA FUNCIÓN

*/



/*
Ejercicio de clase 

Se pide ingresar una edad y un estado cicvil
	a todos los mayores de edad, mostrar el mensaje "se responsable"
	a todos los menores de edad, mostrar el mensaje "respeta a tus mayores"
	a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
	a los niños tambien informar "hagan la tarea" 
	a los adolescentes casado o Divorciado " sos muy joven para no ser soltero"
	a los mayores de edad solteros, tambien informar "a vivir la vida"
	a los mayores de edad casados , tambien informar "a disfrutar la pareja"
	a los divorciados informar tambien "a intentarlo nuevamente"

    la menor cantidad de if 
    no repetir los alert o los mensajes 
    <>



function mostrar()
{

	var edadIngresada;
	var estadoCivil

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	estadoCivil=document.getElementById("estadoCivil").value;

	if(edadIngresada>17)
	{
		alert("Se responsable");

		if(estadoCivil=="Soltero")
		{
			alert("A vivir la vida");
		}
		else
		{
			if(estadoCivil=="Casado")
			{
				alert("A disfrutar la pareja");
			}
		}
		
		if(edadIngresada>60)
		{
			alert("Sos persona de riesgo");
		}
	}
		else
		{
			alert("Respeta a tus mayores");
			if(estadoCivil!="Soltero")
			{
				alert("Sos muy joven para no ser soltero");
			}
			if(edadIngresada<13)
			{
				alert("Hagan la tarea");
			}	
		}
	if(estadoCivil=="Divorciado")
	{
		alert("A intentarlo nuevamente");
	}

}

*/

/*
Ejercicio agregado A Pagnussat Christian

Se pide ingresar una edad y un estado cicvil
	a todos los mayores de edad, mostrar el mensaje "se responsable"
	a todos los menores de edad, mostrar el mensaje "respeta a tus mayores"
	a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
	a los niños tambien informar "hagan la tarea" 
	a los adolescentes casado o Divorciado " sos muy joven para no ser soltero"
	a los mayores de edad solteros, tambien informar "a vivir la vida"
	a los mayores de edad casados , tambien informar "a disfrutar la pareja"
	a los divorciados informar tambien "a intentarlo nuevamente"

    la menor cantidad de if 
    no repetir los alert o los mensajes 
    <>
*/


function mostrar()
{
	var edadIngresada;
	var estadoCivil;
	var rangoEtario;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	estadoCivil=document.getElementById("estadoCivil").value;

	if(edadIngresada>17 && edadIngresada<60)
	{
		rangoEtario="Adultos";
	}
	else
	{
		if(edadIngresada>60)
		{
			rangoEtario="Mayores";
		}
		else
		{
			rangoEtario="Menores";
		}
	}

	switch(rangoEtario)
	{
		case "Adultos":
			alert("Se responsable");
			
			switch(estadoCivil)
			{
				case "Soltero":
					alert("A vivir la vida");
					break;
				case "Casado":
					alert("A disfrutar la pareja");
					break;
				default:
					alert("A intentarlo nuevamente");
					break;
			}
			break;

		case "Mayores":
			alert("Se responsable");
			alert("Sos persona de riesgo");				
			switch(estadoCivil)
			{
				case "Soltero":
					alert("A vivir la vida");
					break;
				case "Casado":
					alert("A disfrutar la pareja");
					break;
				default:
					alert("A intentarlo nuevamente");
					break;
			}
			break;

		case "Menores":
			alert("Respeta a tus mayores");
			switch(edadIngresada)
			{
	  			case 13:
	  			case 14:
	  			case 15:
	  			case 16:
	  			case 17:
			  		switch(estadoCivil)
					{
						case "Casado":
							alert("Sos muy joven para no estar soltero");
							break;
						case "Divorciado":
							alert("A intentarlo nuevamente");
							alert("Sos muy joven para no estar soltero");
							break;
					}
					break;
				default:
	  				alert("Hagan la tarea");
	  				break;
			}		
			break;	
	}
}
