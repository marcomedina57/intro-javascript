// ### Problema 4
// Escriba una función de JavaScript que tomará una serie de números almacenados
// y encontrará el segundo número más bajos y segundos más altos, respectivamente
// del siguiente arreglo:  *`
const arr = [3,4,6,1,5,2,9,10,23,12]

let numerosOrdenados = arr.sort((a,b) => a-b);

const segundoMasBajo = numerosOrdenados[1];

const segundoMasAlto = numerosOrdenados[numerosOrdenados.length-2];

console.log(segundoMasBajo, segundoMasAlto)