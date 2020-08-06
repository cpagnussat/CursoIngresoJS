/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;

	precioUno=txtIdPrecioUno.value;
	precioUno=parseInt(precioUno);
	precioDos=txtIdPrecioDos.value;
	precioDos=parseInt(precioDos);
	precioTres=txtIdPrecioTres.value;
	precioTres=parseInt(precioTres);

	suma= precioUno+precioDos+precioTres;

	alert("La suma de los precios es "+suma);

}


function Promedio () 
{
	

	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var promedio;

	precioUno=txtIdPrecioUno.value;
	precioUno=parseInt(precioUno);
	precioDos=txtIdPrecioDos.value;
	precioDos=parseInt(precioDos);
	precioTres=txtIdPrecioTres.value;
	precioTres=parseInt(precioTres);

	suma= precioUno+precioDos+precioTres;
	promedio= suma/3;
	alert("El promedio de los precios es "+promedio);


}
function PrecioFinal () 
{
	

	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var precioFinal;
	var iva;
	var indiceIva;
	var totalIva;

	iva=21;

	precioUno=txtIdPrecioUno.value;
	precioUno=parseInt(precioUno);
	precioDos=txtIdPrecioDos.value;
	precioDos=parseInt(precioDos);
	precioTres=txtIdPrecioTres.value;
	precioTres=parseInt(precioTres);
	
	suma= precioUno+precioDos+precioTres;

	indiceIva=iva/100;

	totalIva=indiceIva*suma;

	precioFinal=suma+totalIva;



	alert("El precio final es "+precioFinal);


}