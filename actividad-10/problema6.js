//  Problema 6
// Dadas dos matrices de enteros, encuentra qué elementos faltan en la segunda matriz de la primera matriz.
const matriz = [7,2,5,3,5,3];
const br = [7,2,5,4,6,3,5,3]
//  Los números que faltan en arr son `[4,6]`

 for(let num of br){
     if(!matriz.includes(num)){
         console.log(`Hace falta el numero ${num}`)
     }
 }


