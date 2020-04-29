/*
** Declaración
*/

//1
let Coche = {"marca": "Seat", "modelo": "leon", "matricula": "1234AAA"};
//2
let Casa = {"codPostal": 28030, "calle": "calle de la Manga", "portal": "D", "piso": "1 B"};
//3
let Noticia = {"titular": "Los niños salen a la calle", "cuerpo": "Los padres son unos irresponsables"};
//4
let Persona = {"nombre": "Romuoldo", "apellidos": "Fernán", "edad": 42};
//5
let Avion = {"numPasajeros": 232, "despegar": () => console.log("despegando"), "volar": () => console.log("llegando al destino"), "aterrizar": () => console.log("aterrizando")};
//6
let Paquete = {"contenido": ["zapatillas", "camiseta", "cubo de rubik"]};
//7
let Pais = {"numHabitantes": 2, "continente": "Europa", "gentilicio": "Almorrano"};
//8
let FullStackDeveloper = {"lenguajes": ["Js", "HTML", "CSS"], "proyectos": ["landing page"]};
//9
let Perro = {"nombre": "Golfo", "raza": "yorkshire", "color": "gris", "edad": 2, "ladrar": () => console.log("Guau"), "popo": () => Math.random() * 3};

/*
** Lectura de propiedades
*/

//10
let marcaPortatil = Portatil.marca;
//11
let marcaPortatil2 = Portatil["marca"];
//12
let codError = O_Error.codigo;
//13
let grupos = Concierto.grupos;
//14
let integrantes = Grupo.integrantes;
//15
let nivelesTinta = Impresora.tinta;
//16
let pixeles = Pantalla.pixeles;
//17
let especificaciones = Movil["especificaciones"];
//18
let RGB = [Led.rojo, Led.verde, Led.azul];

/*
** Modificación de propiedades
*/

//19
Portatil.modelo = "P345";
//20
Concierto.cartelera.push("Guns N' roses");
//21
Grupo.numIntegrantes = 5;
//22
Pantalla.dimensiones = "1920x1080";
//23
Concierto.fecha = new Date();
//24
Led.encendido = !Led.encendido;
//25
Impresora.imprimiendo = {"nombreArchivo": "tfg.docx", "copias": 2, "numPaginas": 25};
//26
Movil.temperatura = "20º";