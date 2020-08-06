//Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).

/*function mostrar()
{
	
	var edadIngresada;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>17)
	{
		alert("usted es mayor de edad");

	}
	else{

		if(edadIngresada<18 && edadIngresada>12)
		{
			alert("usted es adolescente");
		}

		else{

			alert("usted es un niño");//cualquier numero que sea menor a 13 va a venir aca, no hace falta condicion 
		}



	}

}//FIN DE LA FUNCIÓN

*/
function mostrar()
{
	var edadIngresada;
	var mensaje;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>17){
		
	mensaje="Usted es un adulto.";
	}
	
	else{

		if(edadIngresada<18 && edadIngresada>12){
		
		mensaje="Usted es un adolescente.";
		}

		else{
			
			if(edadIngresada<13){
			
			mensaje="Usted es un niño.";
			}

			else{

				mensaje="Ingrese una edad valida."; //para cualquier ingreso de datos que no sea una edad
			} 
		}
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN