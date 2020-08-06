/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:<>
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{

var notaRandom;

notaRandom=Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10
console.log(notaRandom);//queria verificar con la consola que ande bien

if(notaRandom==9 || notaRandom==10){

	alert("Excelente");
	}
	else{

		if(notaRandom>3){

			alert("Aprobo");
		}

		else{

			alert("Vamos, la proxima se puede");
		}
	}


}//FIN DE LA FUNCIÓN