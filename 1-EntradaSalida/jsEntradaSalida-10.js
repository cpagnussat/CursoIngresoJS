/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importeIngresado;
	var importeConDescuento;
	var porcentaje;
	var descuento;

	porcentaje = 25;
	porcentaje = porcentaje / 100;

	importeIngresado = txtIdImporte.value;
	importeIngresado = parseInt(importeIngresado);


	descuento = importeIngresado*porcentaje;

	importeConDescuento = importeIngresado - descuento;

	txtIdResultado.value = importeConDescuento;
}


// ahora si esta bien declarado el porcentaje xd tmr 