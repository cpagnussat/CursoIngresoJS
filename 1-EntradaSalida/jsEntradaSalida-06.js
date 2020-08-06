/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;

	var resultado;

	numeroUno = txtIdNumeroUno.value;
	numeroUno = parseInt(numeroUno); // pasa de string a integer no ? 
	numeroDos = txtIdNumeroDos.value;
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno+numeroDos;
	alert(resultado);


}

//lla funcion Number tambien funciona PERO ES MUY especifica de js, con lo cual preferimos
//parseInt(dato)

