/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldoIngresado;
	var sueldoConAumento;
	var porcentaje;
	var aumento;

	sueldoIngresado = txtIdSueldo.value;
	sueldoIngresado = parseInt(sueldoIngresado);

	porcentaje = 10 / 100

	aumento = sueldoIngresado*porcentaje;

	sueldoConAumento = sueldoIngresado + aumento;

	txtIdResultado.value = sueldoConAumento;

}


//este ejercicio lo hice solo y lo cargue para que lo corrijan 
//me corrigieron bien, el tema fue como simplifique las cuentas, esta mas desglosado en el 10, asi si 