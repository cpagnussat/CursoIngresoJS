/*
ejercicio 9 switch christian pagnussat
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y 
localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/

function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value;
	var precioEstadia;
	var descuento;	
	var descuentoAplicado;
		
	precioEstadia= 15000

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Mar del plata":
					descuento=20;
					break;
				case "Bariloche":
					descuento=-20;
					break;
				default:
					descuento=10;
					break;		
			}
				break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Mar del plata":
					descuento=-20;
					break;
				case "Bariloche":
					descuento=20;
					break;
				default:
					descuento=-10;
					break;		
			}
				break;
		default:
			switch(destinoIngresado)
			{
				case "Cordoba":
					descuento=0;
					break;
				default:
					descuento=-10;
					break;		
			}
			break;
	}

	descuentoAplicado= precioEstadia * descuento/100;
	precioEstadia= precioEstadia- descuentoAplicado;
	alert("El precio final es de $"+ precioEstadia);


}//FIN DE LA FUNCIÓN