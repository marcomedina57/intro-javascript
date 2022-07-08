// Actividad 4

// Crear un programa que preugnte al usuario un numero1Act2, y mostrar los numeros que son multiplos de 5 desde 1 

const numPedido = prompt("Ingrese un numero");
let contador = 1;
while(contador <= numPedido){

    if (contador % 5 === 0) {
        console.log(`${contador} es multiplo de 5`);
    }

    contador = contador + 1;

}


// Do - While
const numPedido2 = prompt("Ingrese un numero");
let contador2 = 1;
do {
    if (contador2 % 5 === 0) {
        console.log(`${contador2} es multiplo de 5`);
    }

    contador2 = contador2 + 1;
}
while(contador2 <= numPedido2)

//  Imprimir numeros impares del 1 al 50

for(let i = 1; i <= 50; i++){
    if (i % 2 !== 0){
        console.log(`${i} es impar`);
    }
}

// Imprimir lista de numeros del 1 al 100, excluir rango de 10 numeros determinado por usuario

const numMin1 = prompt("Ingrese un numero");
const numMin2 = prompt("Ingrese otro numero");

for(let i = 1; i<=100; i++){
    if (i >= numMin1 && i <= numMin2){
        continue;
    }
    console.log(i);
}

// Bonus 


const numUnDigito = Math.floor(Math.random() * 10);
const numDosDigitos = Math.floor(Math.random() * 1000)

const resultado = numUnDigito * numDosDigitos;

const resultadoJugador = prompt(`Cual es el resultado de multiplicar ${numUnDigito} x ${numDosDigitos}? : `);

    if (resultado === Number(resultadoJugador)) {
        alert("ganaste");
    } else {
        alert("Incorrecto")
    }