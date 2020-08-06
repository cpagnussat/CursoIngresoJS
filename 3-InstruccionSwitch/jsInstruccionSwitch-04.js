/*
Christian Pagnussat, ejercicio 4 switch
Enunciado:
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/

function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	//alert(mesDelAño);
	
	switch(mesDelAño)
	{	
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 dias");
			break;
		case "Febrero":
			alert("Este mes tiene 28 dias");
			break;
		default:
			alert("Este mems tiene 31 dias");
			break;
	}
	



}//FIN DE LA FUNCIÓN