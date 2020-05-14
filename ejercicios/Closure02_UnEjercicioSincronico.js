const arregloEjemplo = ["ki�e", "epu", "K�la","meli"];

//bloque 1
 for(indice = 0; indice < arregloEjemplo.length; indice ++) {

/*
  setTimeout(function() { console.log('Recorriendo �ndice: ', indice, arregloEjemplo[indice]);
   },0)
 }*/

//bloque 2

//Funcion "auto invocada, la recuerdan?"

(function(closureIndice) {
    setTimeout(function(){
      console.log('Recorriendo el arreglo ', closureIndice, arregloEjemplo[closureIndice])
    }, 1273)
  })(indice)

 }
