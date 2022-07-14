// ### Problema 3
// Cuente las ocurrencias de distintos elementos en la matriz 2D dada. La entrada dada es una matriz, cuyos elementos son matrices de cadenas.
//  El resultado es un objeto cuyos nombres de propiedad son los valores de las matrices y su valor es el número de sus ocurrencias.
const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
  ];
// Resultado esperado:
// ```jsx
// {
//     a: 1,
//     b: 1,
//     c: 2,
//     d: 2,
//     f: 2,
//     g: 1,
//   }
// ```

let total = {

};

for (let [uno, dos, tres] of input){
    total[uno] ? (total[uno] += 1) : total[uno] = 1
    total[dos] ? (total[dos] += 1) : total[dos] = 1
    total[tres] ? (total[tres] += 1) : total[tres] = 1
}

console.log(total)
