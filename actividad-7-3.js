
// Regrese producto de dos numeros 
const multiply = (num1, num2) => {
    const multiplyTwo = (num2) => {
        return num1 * num2
    }
    if(!num2){
        return multiplyTwo
    }
    return num1 * num2
}

let num1 = multiply(2);
console.log(num1(3));


// Funcion recursiva fibonacci

const fibonacci = (num) => {

    if(num < 2) return num

    return fibonacci(num-1) + fibonacci(num-2)
    
}

console.log(fibonacci(8))
