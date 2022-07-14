// ## Problema 1:

// Cuadre el valor de cada elemento en el array. Suponga que solo obtendrá números en la array de entrada.

const input = [ 1, 2, 3, 4, 5 ];

const inputAlCuadraro = input.map((valor) => valor * valor);
console.log(inputAlCuadraro)

// Resultado esperado:

// `[ 1, 4, 9, 16, 25]`

// ## Problema 2:

// Calcule los valores de la media y la mediana de los elementos numéricos del siguiente arreglo.

// Resultado esperado:

//   `{ mean: 38.5, median: 32 }`

// Media 
const inputMM = [12, 46, 32, 64];
const inputMMR = inputMM.reduce((ac, current) => {
    return ac + current
})

console.log(inputMMR/inputMM.length)

let inputMediana = inputMM.sort((a,b) => a - b)
let indiceMediana = inputMediana.length / 2;

console.log(`La mediana es: ${inputMediana[indiceMediana-1]}`)



// Solución

// ## Problema 3

// Si la entrada dada es un número, debe devolver el factorial de ese número. El factorial de un número natural n es el producto de los enteros positivos menores o iguales a n. Entonces, 2! = 2, 3! = 6, 4! = 24 y así sucesivamente.

const factorial = (num) => {
    if(num === 1) return num

    return num * factorial(num-1);
}

console.log(factorial(6)) 

// Caso de prueba:

// `const input = 6;`

// Result: `720`