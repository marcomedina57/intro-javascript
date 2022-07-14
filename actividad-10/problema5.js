// 1. Retorna en un array las calificaciones de todos los estudiantes.
// 2. Retorna el promedio de cada uno de los alumnos, devolviendo un arreglo con objetos como esto: 




// ### Problema 5:
// De la siguiente estructura de datos, contesta las siguientes preguntas creando un programa para cada una.
let info = [
    {
        nombre: "Diego",
        materias: [
            {
                nombreMateria: "español",
                calificacion: 100
            },
            {
                nombreMateria: "matemáticas",
                calificacion: 70
            },
            {
                nombreMateria: "ciencias",
                calificacion: 55
            }
        ]
    },
    {
        nombre: "Jorge",
        materias: [
            {
                nombreMateria: "español",
                calificacion: 60
            },
            {
                nombreMateria: "matemáticas",
                calificacion: 65
            },
            {
                nombreMateria: "ciencias",
                calificacion: 80
            }
        ]
    }
]



    let arregloCalificaciones = [];
    let arregloPromedios = [];
    for (let inf of info){
        for(let est in inf){
          if(est === "materias"){
              for (a of inf[est]){
                  arregloCalificaciones.push(a["calificacion"])
              }
          }
        }
    }
    // Calificaciones
    console.log(arregloCalificaciones)

// 1. Retorna en un array las calificaciones de todos los estudiantes.

const calificaciones = [];
for(const prop in info){

  const {nombre, materias} = info[prop];
  const calificacionesUno = materias.reduce((ac, current) => ac + current.calificacion, 0);
  const obj = {};
  obj[nombre] = {"promedio": calificacionesUno};
  calificaciones.push(obj);
}

console.log(calificaciones)

let cals = [];
for(const estudiante of calificaciones){
  for(const [key, value] of Object.entries(estudiante)){
      const {promedio} = value;
      cals.push(promedio);
  }
}

//Calificacion mas baja
console.log(`La calificacion mas alta es ${cals[0] > cals[1] ? cals[0] : cals[1]} la mas baja ${cals[0] > cals[1] ? cals[1] : cals[0]}`);


// 1. Retorna la calificación mas baja
// 2. Retorna la calificación mas alta