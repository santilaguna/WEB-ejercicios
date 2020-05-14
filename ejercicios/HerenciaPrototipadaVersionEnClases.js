//Tenemos un juego de estrategia.(o hagamos uno)

// hay diferentes tipos de trabajadores.
// Todos inician de esta base: trabajador

let trabajador = { 
  nombre:"trabajadores esforzados",
  salud:70,
  experiencia:23,
  //Métodos  del objeto:

  saludo() { console.log("Saludos! somos ", this.nombre)}, //Se cae si no ponemos THIS.
  
  produccion(nivel){ return 25*nivel },
  
  trabajo(nivel){ return 3*nivel }
}

trabajador.saludo();

var arrTrabajador = new Array();

arrTrabajador[0] = Object.create(trabajador);  //SI, hagan esto en CASA

arrTrabajador[0].saludo();
console.log(arrTrabajador[0].salud)

// Un tipo de trabajador es un agricultor.

let agricultor = {
  nombre:"agricultores unidos",
  alianza: 1,
  tipo:"agricultor",
}

// Pero digamos que queremos que el agricultor "herede" desde el trabajador
// En particular no queremos reescribir los métodos.

// se usa el prototipo 
 agricultor.__proto__ = trabajador;  //__proto__ NO lo hagan, esto está algo obsoleto
console.log("tipo:", agricultor.tipo);
agricultor.saludo();

//Reflect.setPrototypeOf(target, prototype)
let agricultor2 = Object.create(agricultor); 

//Esta es la forma ya conocida y la buena

//Con que propiedades quedó agricultor2? Las recorremos prop

console.log("Propiedades de agricultor2\n", "==================")
for( let propiedad in agricultor2 ){
  console.log(propiedad)
}


// Y que tal si quiero las propiedasdes que son unicas para agricultor?
// Se usa objeto.hasOwnProperty(propiedad)

console.log("\nSolo las propiedadades de agricultor\n", "======================")

for( let propiedad in agricultor ){

  if (agricultor.hasOwnProperty(propiedad) ){
      console.log(propiedad)
  }
}


// Está este objeto heredando de trabajador?

trabajador.isPrototypeOf(agricultor)

/*
let industria = {
  tipo:"metalúrgica",
  nombre:"Metales pesados",
  nivel:1,
  experiencia:1250,
  mejora(){
    if(this.experiencia<1000){   //Si sacamos this, se cae
      this.experiencia = this.experiencia+75;
    }
    else{
      this.experiencia = this.experiencia+12;
    }
  }

  }

console.log("\n Experiencia Industria antes: ", industria.experiencia);

industria.mejora();

console.log(" Experiencia Industria despues: ", industria.experiencia);

// Como reuso experiencia para el agricultor sin tener que hacer una heremcia prototipada?

console.log("Experiencia agricultor antes: ", agricultor.experiencia);
industria.mejora.call(agricultor);
console.log("Experiencia agricultor antes: ", agricultor.experiencia);
*/

//Tenemos ahora un tipo de objeto nuevo "doctor", el cual no hereda de trabajador
//Podría heredar de TrabajadorProfesional, por ejemplo

let doctor = {
  nombre:"los hipocráticos",
  alianza: 1,
  salud:700,
  tipo:"doctor",
  experiencia:203,

  //Acá la función atender nos va a ayudar
  //Esta funcion recibe tres parámetros.

  atender(tipo, variable, arregloTipos){

    //Usaremos includes del arreglo.

    if (variable === true && arregloTipos.includes(tipo)){
      this.salud = this.salud + 7;

    }
  }
}

//Digamos que tenemos dos tipos solamente.

let arrTipos = ["doctor", "agricultor"];

/*
doctor.atender("doctor", true, arrTipos);

console.log("\n salud del doctor", doctor.salud);
*/ 

//Como hacemos para que sea atendido el agricultor?
//console.log("\n Salud original del agricultor: ", agricultor.salud);

//CALL al rescate.

//doctor.atender.call(agricultor, "agricultor", true, arrTipos);
//console.log("salud del agricultor", agricultor.salud);

//APPLY al rescate
//doctor.atender.apply(agricultor, ["agricultor", true, arrTipos]);
//console.log("\n salud mejorada (con apply): ", agricultor.salud);

// BIND al rescate (pero con condiciones)
//var nuevaFuncion = doctor.atender.bind(agricultor, "agricultor", true, arrTipos);
//console.log("salud mejorada (con bind sin usar) : ", agricultor.salud);

//OJO Bind retorna una función y nosotros la invocamos cuando lo estimemos
/*
let hizolostramites = true;

if( hizolostramites){
   nuevaFuncion()
}

console.log("salud mejorada usando el bind: ", agricultor.salud);
*/