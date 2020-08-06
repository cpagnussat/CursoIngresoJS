/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;

	//nombre=txtIdNombre.value;
	edad=txtIdEdad.value;

	nombre=document.getElementById('txtIdNombre').value;


	alert("Su nombre es: " +nombre+ " y usted tiene: "+edad+" años.")
}

//lo hice en dos segundos antes de que lo empiece a explicar asi que 
//si esto me llega a complicar en algun momento me corto la poronga

//document.getElementById bla bla es lo mismo que el id.value pero no se por que mas extenso xd
// o sea que tambien sirve para salida de datos como entrada

// nombre=prompt("el texto del cuadro","un valor por defecto") de esta manera puedo ingresar un dato
