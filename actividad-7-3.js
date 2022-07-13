
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

let num1 = multiply(2,5);
console.log(num1);


// Funcion recursiva fibonacci

