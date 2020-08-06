/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaFahrenheit;
	var temperaturaCentigrados;
	var constanteFahrenheit;
	

	temperaturaFahrenheit=txtIdTemperatura.value;
	temperaturaFahrenheit=parseInt(temperaturaFahrenheit);

	constanteFahrenheit= temperaturaFahrenheit-32;

	temperaturaCentigrados= constanteFahrenheit*(5/9);

	alert(temperaturaFahrenheit+" Fahrenheit equivale a "+temperaturaCentigrados+" centigrados");


//(F − 32) × 5/9 
}

function CentigradosFahrenheit () 
{

	var temperaturaFahrenheit;
	var temperaturaCentigrados;
	var constanteCentigrados;
	

	temperaturaCentigrados=txtIdTemperatura.value;
	temperaturaCentigrados=parseInt(temperaturaCentigrados);

	constanteCentigrados=temperaturaCentigrados*(9/5);

	temperaturaFahrenheit=constanteCentigrados+32;

	alert(temperaturaCentigrados+" grados Centigrados equivale a "+temperaturaFahrenheit+" Fahrenheit");


//(°C × 9/5) + 32 
}
