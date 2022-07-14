// ### Problema 2
// Del siguiente arreglo de numeros, retorna la suma de todos los que son positivos.



const numbers = [ 1, -4, 12, 0, -3, 29, -150];

let resultado = numbers.filter(n => n >= 0).reduce((ac, current) => {
    return ac + current
})

console.log(resultado);