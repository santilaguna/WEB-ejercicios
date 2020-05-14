// Obetivo lograr que esto (iniciarSaludos) se ejecute s�lo una vez....
let saludoClasico;

function iniciarSaludos() {

	 meInvocaste = false; // Esta es la clave.
   
	return function() {  // Este es el closure que encapsula!

		if (! meInvocaste){
			   saludoClasico = "Hola Mundo por Primera Vez";
         console.log('El Saludo ha ocurrido ', saludoClasico)
         meInvocaste = true;
         
		} else {
          
         return "no te voy a saludar " //+ contador;

		}
	}
 }

// Veamos que pasa ac� al invicar la funci�n

iniciarSaludos();


const Saluda = iniciarSaludos();
console.log("Cual era el saludo? ***", saludoClasico);
console.log(Saluda());
meInvocaste = false
console.log("Cual era el saludo? >>>>", saludoClasico);
console.log(Saluda());

// Invoquemos varias veces


// Agreguemos contador....


