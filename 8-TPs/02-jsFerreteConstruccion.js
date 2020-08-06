/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoRectangulo;
	var anchoRectangulo;
	var perimetroRectangulo;
	var suma;
	var totalAlambreRectangulo;

	largoRectangulo=txtIdLargo.value;
	largoRectangulo=parseInt(largoRectangulo);

	anchoRectangulo=txtIdAncho.value;
	anchoRectangulo=parseInt(anchoRectangulo);


	suma=largoRectangulo+anchoRectangulo;
	perimetroRectangulo= 2 * suma;

	totalAlambreRectangulo= perimetroRectangulo*3;

	alert("La cantidad de alambre a comprar para el rectangulo es de: "+totalAlambreRectangulo);

}
function Circulo () 
{
	var radioCirculo;
	var perimetroCirculo;
	var constantePerimetro
	var totalAlambreCirculo;

	radioCirculo=txtIdRadio.value;
	radioCirculo=parseInt(radioCirculo);

	constantePerimetro=2*Math.PI;
	perimetroCirculo=constantePerimetro*radioCirculo;

	totalAlambreCirculo= perimetroCirculo*3;

	alert("La cantidad de alambre a comprar para el circulo es: "+totalAlambreCirculo);

}
function Materiales () 
{
	var largoRectangulo;
	var anchoRectangulo;
	var cemento;
	var cal;
	var metroCuadrado;

	largoRectangulo=txtIdLargo.value;
	largoRectangulo=parseInt(largoRectangulo);

	anchoRectangulo=txtIdAncho.value;
	anchoRectangulo=parseInt(anchoRectangulo);

	metroCuadrado=largoRectangulo*anchoRectangulo;

	cemento=2*metroCuadrado;
	cal=3*metroCuadrado;

	alert("Se necesitan "+cemento+" bolsas de cemento y "+cal+" bolsas de cal para el contrapiso del terreno rectangular");

}