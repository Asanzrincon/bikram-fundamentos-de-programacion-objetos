//DECLARACIÓN
// 1.- 

let Coche={
    marca: "Audi", 
    modelo: "A6", 
    matricula: "XXXX0000"
};

// 2.- Crea un objeto de nombre Casa que tenga las propiedades: codPostal, calle, portal, piso

let Casa={codPostal: 0000, calle: "Calle ABCDEFG", portal: 0, piso: 0};

// 3.- 

const FullStackDeveloper = {
    lenguajes: ["js", "java", "css"],
    proyectos: ["KOKEA"]
};

// 4.- 

let Perro = {
    nombre: "Max",
    raza : "Pastor Austaliano",
    color: "Blanco y Negro",
    edad: 10,
    ladrar: function() {
      console.log("¡Guau! ¡Guau!");
    },
    popo: function() {
        return Math.random() *3;
    }
  };

//LECTURA DE PROPIEDADES
// 5.-

let marcaPortatil= Portatil.marca;

// 6.-

let marcaPortatil2=Portatil["marca"]

// 7.-

let grupos = Concierto.grupos;

// 8.-

let RGB = [Led.rojo, Led.verde, Led.azul];

// 9.-

Portatil.modelo="P345"

// 10.-

Concierto.cartelera= "Gun N' Roses";

// 11.-

Concierto.fecha=new Date();

// 12.-

let imprimiendo= {nombreArchivo: "Fundamentos de Programacion",copias: 1,numPaginas: 18};

//OBJETOS
// 13.-

let Noticia={
    titular: "Abecedario",
    cuerpo: "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
};

// 14.-

let Persona={
    nombre: "Alejandro",
    apellidos: "Sanz Rincon",
    edad: 19
}

// 15.-

let Avion={
    numPasajeros: 108,
    despegar: function() {
        console.log("despegando");
      },
      volar: function() {
        console.log("llegando al destino");
      },
      aterrizar: function() {
        console.log("aterrizando");
      }
};

// 16.-

let Paquete={contenido:["iphone 13 mini", "macbook pro 16"]};

// 17.-

let Pais={
    numHabitantes: 47.33,
    continente: "Europa",
    gentilicio: "Españoles"
};

//LECTURA DE PROPIEDADES
// 18.-

let codError= O_Error.codigo;

// 19.-

let integrantes= Grupo.integrantes;

// 20.-

let nivelesTinta= Impresora.tinta;

// 21.-

let pixeles= Pantalla.pixeles;

// 22.-

let especificaciones = Movil["especificaciones"];

//MODIFICACION DE PROPIEDADES
// 23.-

Grupo.numIntegrantes = 5;

// 24.-

Pantalla.dimensiones= "1920x1080";

// 25.-

if (Led.encendido === true) {
    Led.encendido = false;
} else if (Led.encendido === false) {
    Led.encendido = true
} else {
    console.log("error")
}

// 26.-

Movil.temperatura = "20º";