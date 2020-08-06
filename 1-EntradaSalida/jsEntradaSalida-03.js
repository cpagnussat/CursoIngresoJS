/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	nombreIngresado=txtIdNombre.value;//en la variable nombreIngresado guardo lo ingresado en el cuadro de texto
	alert("Su nombre es: " + nombreIngresado);
}


/*
txtIdNombre esta declarado en el html, se  busca ahi y aca se lo llama y se toma su valor
*/