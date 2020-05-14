//Ahora lo anterior con clases.
//OOP en JS

class Alumno{

  constructor(numAlumno, nombreAlumno, comunaAlumno)
  {    
    this.numero = numAlumno;
    this.nombre = nombreAlumno;
    this.comuna = comunaAlumno;
    this.cntRamosCursados = 0; //contador de ramos cursados (inscritos)
    this.arrRamos = new Array();
    
  }
  
  ramoInscrito(nombreRamo) { 
    this.arrRamos.push(nombreRamo);
    this.cntRamosCursados++;
  }

  mostrarRamos() {
    return this.arrRamos;
  }

  cantidadRamosInscritos() { 
    return this.cntRamosCursados 
    }
  
  //Esto se va a caer.....
  saludoDeAlumno() {
    console.log("Hola, soy ", this.nombre, " vivo en ", this.comuna)
  }
}

const Maria = new Alumno(123456, "Maria", "San Miguel");
Maria.ramoInscrito("IIC2513")
Maria.ramoInscrito("IIC2713")
Maria.mostrarRamos()
Maria.saludoDeAlumno()


/* EJERCICIO: Mejoren los métodos, y creen alumnos, inscriban ramos como "IIC2513", etc.*/

//Herencia investiguen  extends. y hagan una clase magister

// Esto se cae por todos lados!

class alumnoMagister extends Alumno {
  constructor(nombreMagister,numeroMagister, mencionMagister)
  {
    //OJO este constructor extiende a la clase Alumno
    //por lo tanto su constructor tiene que invocar a la super clase
    //HINT:  vean  super()
    
    super(numeroMagister, nombreMagister)
    this.mencion = mencionMagister 
  }

//Acá se implementa la funcion de saludoDeMagister.(Se cae también)
  saludoDeAlumno() { 
    console.log("Hola soy ", this.nombre, " estudiante de un magister en ", this.mencion) 
    }  //ARREGLAR
}

// Ejercico: Cree a carla, alumna de magister mencion Transporte.
const Carla = new alumnoMagister("carla", 1, "Wubbalubbadubdub")  //Completar 

// Y Carla va a saludar:
Carla.saludoDeAlumno()


/* Continua el ejercicio:

El magister es un alumnno ya graduado con otros años de estudio y especialidad.
COMPLETE para el alumno de magister:

** Otros atributos: profesorGuia
                 temaDeTesis

** Métodos:

-- asignarProfesor(nombreProfesor)
(cambia el atributo de profesorGuia)

-- elegirTesis(nombreTesis, Defensa)
El nombre es un titulo de la tesis, la defensa es un string con :
año/mes por ejemplo: 2020/octubre

-- escribir tesisMagister()
retorna el mensaje: "escribiendo mi tesis"

-- defensaDeTesis()
retorna el mensaje: "Defiendo mi tesis el 2020/octubre"

-- datosDelAlumno()
retorna un mensaje con el profesor guia, el nombre de la tesis y cuando es la defensa. Si no está definido aún debe decir "Aun no tengo...." para el atributo que no esté "seteado".

Comparen con herencia prototipada.
*/
