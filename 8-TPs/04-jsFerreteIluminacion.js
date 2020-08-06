/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
<>
 */
 /*
function CalcularPrecio () 
{
 	var cantidadComprada;
 	var marca;
 	var descuentoTotal;
 	var descuentoParcial;
 	var precioTotal;
 	var precioUnitario;
 	var precioFinal;	
 	var ingresosBrutos;

 	precioUnitario=35;
 	cantidadComprada=txtIdCantidad.value;
 	cantidadComprada=parseInt(cantidadComprada);
 	marca=document.getElementById("Marca").value;
 	
 	//precioDescuento=txtIdprecioDescuento.value;

 	if(cantidadComprada>5)
 	{
 		descuentoTotal=50;
 	}
 	else
 	{
 		if(marca=="ArgentinaLuz" && cantidadComprada==5)
 		{
 			descuentoTotal=40;
 		}
 		else
 		{
 			if(marca!="ArgentinaLuz" && cantidadComprada==5)
 			{
 				descuentoTotal=30;
 			}
 			else
 			{
 				if(marca=="ArgentinaLuz" && cantidadComprada==4 || marca =="FelipeLamparas" && cantidadComprada==4 )
 				{
 					descuentoTotal=25;
 				}
 				else
 				{
 					if(marca!="ArgentinaLuz" && cantidadComprada==4 || marca!="FelipeLamparas" && cantidadComprada==4 )
					{
						descuentoTotal=20;
					}
					else
					{
						if(marca=="ArgentinaLuz" && cantidadComprada==3)
						{
							descuentoTotal=15;
						}
						else
						{
							if(marca=="FelipeLamparas" && cantidadComprada==3)
							{
								descuentoTotal=10;
							}
							else
							{
								if(marca!="ArgentinaLuz" && cantidadComprada==3 || marca!="FelipeLamparas" && cantidadComprada==3)
								{
									descuentoTotal=5;
								}
								else
								{
									descuentoTotal=0;
								}
							}
						}
					}
 				}
 			}
 		}
 	}
 	console.log(descuentoTotal);//para verificacion en consola

 	precioTotal = cantidadComprada * precioUnitario;
 	descuentoParcial = descuentoTotal / 100;
 	descuentoTotal= precioTotal * descuentoParcial;
 	precioFinal = precioTotal - descuentoTotal;
 	ingresosBrutos = 10 / 100;
 	ingresosBrutos = ingresosBrutos * precioFinal;

 	if( precioFinal > 120 )
 	{
 		precioFinal = precioFinal + ingresosBrutos;

 		alert("Usted pago $"+precioFinal+" con IIBB, siendo $"+ingresosBrutos+" el impuesto que se pago.");
 	}

 	txtIdprecioDescuento.value=precioFinal;
}


*/
/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
<>
 */
 //_______________________________________________________________________
 /*

 function CalcularPrecio () 
{
 	var cantidadComprada;
 	var marca;
 	var descuentoTotal;
 	var descuentoParcial;
 	var precioTotal;
 	var precioUnitario;
 	var precioFinal;	
 	var ingresosBrutos;

 	precioUnitario=35;
 	cantidadComprada=txtIdCantidad.value;
 	cantidadComprada=parseInt(cantidadComprada);
 	marca=document.getElementById("Marca").value;
 	
 	//precioDescuento=txtIdprecioDescuento.value;

 	if(cantidadComprada>5)
 	{
 		descuentoTotal=50;
 	}
 	else
 	{
 		if(cantidadComprada==5)
 		{
 			if(marca=="ArgentinaLuz")
 			{
 				descuentoTotal=40;
 			}
 			else
 			{
 				descuentoTotal=30;
 			}
 		}
 		if(cantidadComprada==4)
 		{
 			if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
 			{
 				descuentoTotal=25;
 			}
 			else
 			{
 				descuentoTotal=20;
 			}

 		}
 		if(cantidadComprada==3)
 		{
 			if(marca=="ArgentinaLuz")
 			{
 				descuentoTotal=15;
 			}
 			else
 			{
 				if(marca=="FelipeLamparas")
 				{
 					descuentoTotal=10;
 				}
 				else
 				{
 					descuentoTotal=5;
 				}
 			}
 		}
 		if(cantidadComprada<3)
 		{
 			descuentoTotal=0;
 		}
 	}

	console.log(descuentoTotal);//para verificacion en consola

 	precioTotal = cantidadComprada * precioUnitario;
 	descuentoParcial = descuentoTotal / 100;
 	descuentoTotal= precioTotal * descuentoParcial;
 	precioFinal = precioTotal - descuentoTotal;
 	ingresosBrutos = 10 / 100;
 	ingresosBrutos = ingresosBrutos * precioFinal;

 	if( precioFinal > 120 )
 	{
 		precioFinal = precioFinal + ingresosBrutos;

 		alert("Usted pago $"+precioFinal+" con IIBB, siendo $"+ingresosBrutos+" el impuesto que se pago.");
 	}

 	txtIdprecioDescuento.value=precioFinal;
}
<>
*/


//_______________________________________________________

 function CalcularPrecio () 
{
 	var cantidadComprada;
 	var marca;
 	var descuentoTotal;
 	var descuentoParcial;
 	var precioTotal;
 	var precioUnitario;
 	var precioFinal;	
 	var ingresosBrutos;

 	precioUnitario=35;
 	cantidadComprada=txtIdCantidad.value;
 	cantidadComprada=parseInt(cantidadComprada);
 	marca=document.getElementById("Marca").value;
 	
 	 	

 	switch(cantidadComprada) 
 	{
 		
 		case 5:
 			switch(marca)
 			{
 				case "ArgentinaLuz":
 					descuentoTotal=40;
 					break;
 				default:
 					descuentoTotal=30;
 			}
 			break;
 		case 4:
 			switch(marca)
 			{
 				case "ArgentinaLuz":
 					descuentoTotal=25;
 					break;
 				case "FelipeLamparas":
 					descuentoTotal=25;
 					break;
 				default:
 					descuentoTotal=20;
 			}
 			break;
 		case 3:
 			switch(marca)
 			{
 				case "ArgentinaLuz":
 					descuentoTotal=15;
 					break;
 				case "FelipeLamparas":
 					descuentoTotal=10;
 					break;
 				default:
 					descuentoTotal=5;
 			}
 			break;
 		case 1:
 		case 2:
 			descuentoTotal=0;
 			break;
 		default:
 			descuentoTotal=50;

 	}

 	console.log(descuentoTotal);//para verificacion en consola

 	precioTotal = cantidadComprada * precioUnitario;
 	descuentoParcial = descuentoTotal / 100;
 	descuentoTotal= precioTotal * descuentoParcial;
 	precioFinal = precioTotal - descuentoTotal;
 	ingresosBrutos = 10 / 100;
 	ingresosBrutos = ingresosBrutos * precioFinal;

 	if( precioFinal > 120 )
 	{
 		precioFinal = precioFinal + ingresosBrutos;

 		alert("Usted pago $"+precioFinal+" con IIBB, siendo $"+ingresosBrutos+" el impuesto que se pago.");
 	}

 	txtIdprecioDescuento.value=precioFinal;
}
 