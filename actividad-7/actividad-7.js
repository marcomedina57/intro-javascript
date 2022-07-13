

// 1.- reciba dos parametros y retorne true o false si contiene palabra

const contienePalabra = (cadena = "", textoBuscar) => cadena.includes(textoBuscar)


console.log(contienePalabra("Marco", "a"))

// 2.- encuentra la suma de elementos 

const sumarArreglo = (arreglo = []) => {
    let total = 0;
    for(let i = 0; i < arreglo.length; i++){
        total = total + arreglo[i];
    }
    return total;
}

console.log(sumarArreglo([1,2,3,4,10,11]))

// 3.- desarrolla metodo para verificar si palabra es palindromo 
const esPalindromo = (palindromo = "") => {
    if (palindromo === palindromo.split("").reverse().join("")){
        return true;
    } 
    return false;
}

console.log(esPalindromo("madam"));
console.log(esPalindromo("computadora"));

// 4 numero de ocurrencias de letra en cadena 
const ocurrenciasPalabra = (cadena, textoBuscar) => {
    cadena = cadena.split(textoBuscar);

    return `LA palabra se repite: ${cadena.length - 1} veces`;


}

console.log(ocurrenciasPalabra("Marco hola", "a"))

// 5 .- valro de arreglo

const mayorArreglo = (arreglo) => {
    let mayor = arreglo[0];
    for(let i = 0; i < arreglo.length; i++){
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }
    return mayor;
}

console.log(mayorArreglo([45,56,32,98,1000,5,23]))


// 6 .- temperaturas delcius a fahrenheit
const convertirTemperaturas = (celcius, fahrenheit) => {
    const celciusAFahrenheit = (celcius * 1.8) + 32;

    const fahrenheitACelcius = (fahrenheit - 32) / 1.8;

    return [celciusAFahrenheit, fahrenheitACelcius]
}

const respuesta = convertirTemperaturas(32, 65);

console.log(`Celcius a fahrenheit: ${respuesta[0]}, fahrenheit a Celcuus: ${respuesta[1]}`);