//Ejemplo para ver lo feliz que es JavaScript.

//La variable varEjemplo pasa a ser global.
// 'use strict'

function felizJS() {
  varEjemplo = "Hola Mundo"
  return varEjemplo
}

felizJS();

console.log(varEjemplo); // Esto se va a caer mientras la linea de arriba est� comentada.

/*
 function noHagoNada() {

    return "No hago ninguna cosa 1";
}

console.log(noHagoNada());
*/


//Cambiemos el SCOPE(comentemos arriba)
var variableNueva = function noHagoNada2(){

    return "No hago ninguna cosa 2";
};

console.log(variableNueva());


//console.log(variableNueva.noHagoNada2()); //NohagoNAda2() est� en otro scope, es variableNueva la del scope global.

// noHagoNada2 est� en su propio scope algo asi como "encerrada en si misma"

var array = new Array();
array = [1,2,3]
array.__proto__.__proto__ = variableNueva // NO HAGAN ESTO EN CASA -> no se cae pero se rompe todo 
console.log(array)
//console.log(array.noHagoNada2())