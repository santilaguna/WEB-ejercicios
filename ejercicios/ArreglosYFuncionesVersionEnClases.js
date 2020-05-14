// Algo r�pido para ver m�s de arreglos.

var arregloOriginal = [5,7,11,13,17,19]; 

function operacionesConTres(a,b,c) {

  return a*b-c; 

}

let resultadoUno = operacionesConTres(arregloOriginal[0], arregloOriginal[1], arregloOriginal[2]);

console.log("Invocacion tradicional: " + resultadoUno);

// Usemos spread para invocar la funci�n.

let resultado = operacionesConTres(...arregloOriginal );

console.log("Resultado de la funcion operacionesConTres: " , resultado );


// Introducimos ahora fill =  fill: arr.fill(value[, start[, end]])

arregloOriginal.fill( 777,2 ,4 );

console.log("\n ArregloOriginal Ahora : ", arregloOriginal)

//Uso de spread con arreglos

 otroArreglo = [ "uno", "dos", ...arregloOriginal , "tres", "cuatro"];

 console.log(otroArreglo);


let arregloDos = [ 2, 4, 6, 8, 10];

// Veamos ahora, forEach() para recorrer el arreglo


function hazmeImpar(paramArreglo) {

  let arregloImpar = new Array();

  paramArreglo.forEach((valor) => {arregloImpar.push( valor*2+1) } );
  
  return arregloImpar;
}

const arregloImpar = hazmeImpar(arregloDos);
console.log("\nArreglo original " , arregloDos);
console.log(" Arreglo Impar:  " , arregloImpar);

/*********************************

MAP: Definici�n de MDN <<<<< :
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*********************/


const nuevoArregloImpar = arregloDos.map( valor => valor*2+1 ); //Ac� se provee la funcion a aplicar a los elementos del arreglo.

console.log("\n nuevoArregloImpar: ", nuevoArregloImpar);
