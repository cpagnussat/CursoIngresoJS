/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;
	var resto;

	dividendo = txtIdNumeroDividendo.value;
	dividendo = parseInt(dividendo);

	divisor = txtIdNumeroDivisor.value;
	divisor = parseInt(divisor);

	resto = dividendo%divisor;

	alert("El resto es: "+resto);

	

}


// el % (resto) mas que nada se usa para encontrar numeros pares o impares
// si le metes el %2 a algo y da 0 es par, si da otra cosa es impar, corta