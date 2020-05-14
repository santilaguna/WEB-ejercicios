// Objetivo lograr que esto (iniciarSaludos) se ejecute sólo una vez....
let saludoClasico;

function iniciarSaludos() {

	 let meInvocaste = false; // Esta es la clave.
   let contador = 0
   
	return function() {  // Este es el closure que encapsula!

		if (! meInvocaste){
			   saludoClasico = "Hola Mundo por Primera Vez";
         console.log('El Saludo ha ocurrido ', saludoClasico)
         meInvocaste = true;
         
		} else {
          contador = contador + 1
         return "no te voy a saludar " + contador;

		}
	}
 }

// Veamos que pasa acá al invicar la función

//iniciarSaludos();


const Saluda = iniciarSaludos();

console.log("Cual era el saludo? ***", saludoClasico);

console.log(Saluda());

console.log("Cual era el saludo? >>>>", saludoClasico);

console.log(Saluda());

// Invoquemos varias veces

console.log(Saluda());
console.log(Saluda());
console.log(Saluda());

Saluda.meInvocaste = false;  //Acá vemos que meInvocaste es una vaqriabe "privada"
console.log("REINICILAZADO", Saluda());
//*****
/*
const Saluda2 = iniciarSaludos();
console.log("Cual era el saludo? ***", saludoClasico);
console.log(Saluda2());
console.log(Saluda2());
// Agreguemos contador....
*/

