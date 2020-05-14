// Veamos algo de encapsulamiento.
// Esta funci�n configura aspectos de los alumnos de una clase.

const setVarAlumno = () => {
  let cntRamosCursados = 0; //contador de ramos cursados (inscritos)
  arrRamos = new Array();
  
  const ramoInscrito = (nombreRamo) => { 
    arrRamos.push(nombreRamo);
    cntRamosCursados++;
  }

  const mostrarRamos = () => {
    return arrRamos;
  }

  const cantidadRamosInscritos = () => { return cntRamosCursados };

//Ac� usamos la magia de closure.  
  return {
     mostrarRamos : mostrarRamos,
     ramoInscrito : ramoInscrito,
     cantidadRamosInscritos :cantidadRamosInscritos,
  }
  
}


//Y ac� usamos los closures.

const alumno = setVarAlumno();

alumno.ramoInscrito("IIC2513");  // es un setter
alumno.cantidadRamosInscritos();  // es un getter
alumno.ramoInscrito("IIC2277");
console.log("num ramos inscritos por alumno1: ", alumno.cantidadRamosInscritos());
console.log("alumno1: ", alumno.mostrarRamos());




const alumno2 = setVarAlumno();

alumno2.ramoInscrito("IIC2713");
alumno2.cantidadRamosInscritos();
alumno2.ramoInscrito("IIC2714");
alumno2.ramoInscrito("IIC2513");
console.log("num ramos inscritos por alumno2: ", alumno2.cantidadRamosInscritos());
console.log("alumno2: ", alumno2.mostrarRamos());




// TAREA: creen metodos para cursos aprobados, cursos eliminados, contadores apra todo eso
// Ademas deben crear una estrcutura adecuada que permita variados alumnos (muchos, todos), por lo tanto 
// hay que trabajar con IDs de alumnos para setear sus valores
//recuerden el Object.create
//Creen un hash para llevar un ID de alumno a algo mas indexable en un arreglo
//ojo con las colisiones del hash.
//Nota: tengan a bien  generar un objeto mas decriptivo tambien apra los alumnos que incluya ID, nombre,
//y otra info personal que crean relvante. A su vez,funciones que hagan set y get de lo anterior.
// BONUS : Inserten todo o guarden todo en una BDD y actualicen, etc... 
//