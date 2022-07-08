// Actividad 1 
// ejercicio discoteca

const nombre = prompt("Nombre: ");
const edad = prompt("Edad: ");

if (Number(edad) < 18){
    alert(`${nombre} no puede entrar a la discoteca por su edad`)
} else if (nombre === "Mario" || nombre === "Carlos") {
    alert(`${nombre} puede entrar al área VIP`)
} else {
    alert(`${nombre} puede entrar a la discoteca`)
}

// Actividad 2 
// Piedra papel o tijera 

const jugadaJugador1 = prompt("Elegir tu jugada: piedra, papel o tijera").toUpperCase();
const jugadaJugador2 = prompt("Elegir jugada del contrincante: piedra, papel o tijera").toUpperCase();

switch(jugadaJugador1) {
    case "piedra".toUpperCase():
        jugadaJugador2 === "PIEDRA" ? alert("Empate") : 
        jugadaJugador2 === "PAPEL" ? alert("Perdiste") : alert("Ganaste");
    break;
    case "papel".toUpperCase():
        jugadaJugador2 === "PIEDRA" ? alert("Ganaste") : alert("Perdiste");
    break;
    case "tijera".toUpperCase():
        jugadaJugador2 === "PIEDRA" ? alert("Perdiste"): alert("Ganaste");
        break;
    default:
        break;
}

// Ejercicio 3
// Solicitar un numero y determinar si es divisble en dos o no 

    const numeroDivisible = Number(prompt("Ingrese un numero para validar si es divisible entre dos"));
    if (numeroDivisible % 2 === 0) {
        alert(`${numeroDivisible} es divisible entre 2`)
    } else {
        alert("No es divisible entre 2")
    }

// Ejercicio 4, par o no 
    const numeroPar = Number(prompt("Ingrese un numero para validar si es par"));
    if (numeroPar % 2 === 0) {
        alert(`${numeroDivisible} es par`)
    } else {
        alert("No es par")
    }

    // Ejercicio 5, numero mil ganador 

    const numeroGanador = Number(prompt("ingrese un numero para saber si ganaste premio"));
    
    numeroGanador === 1000 ? alert("Ganaste un premio") : alert("Sigue participando")

    // Ejercicio 6, mostrar cual numero es menor de dos 
    const numeroUnoMayor = Number(prompt("Ingrese un numero"));
    const numeroDosMayor = Number(prompt("Ingrese otro numero"));

    numeroUnoMayor > numeroDosMayor 
        ? alert(`${numeroUnoMayor} es mayor que ${numeroDosMayor}`)
        : alert(`${numeroDosMayor} es mayor`);
    
        // Ejercicio 7, mayor de tres numeros 
    
        const num1MayorDe3 = Number(prompt("Ingrese un numero"))
        const num2MayorDe3 = Number(prompt("Ingrese un segundo numero"))
        const num3MayorDe3 = Number(prompt("Ingrese un tercer numero"))
        let numMayor = num1MayorDe3;
        let sonIguales;

        num2MayorDe3 > num1MayorDe3 ?
                num2MayorDe3 > num3MayorDe3 
                ? numMayor = num2MayorDe3 : numMayor = num3MayorDe3 : numMayor = num1MayorDe3

        num1MayorDe3 === num2MayorDe3 && num3MayorDe3 !== num1MayorDe3 
        ? alert(`${numMayor} es el mayor y ${1}`)
        num2MayorDe3 === num3MayorDe3 && num3MayorDe3 !== num1MayorDe3 
        ? sonIguales = `, ${num2MayorDe3} y ${num3MayorDe3} son iguales`:
        num1MayorDe3 === num2MayorDe3 && num1MayorDe3 === num3MayorDe3
        ? (numMayor = '' , sonIguales  = `todos son iguales`)
        : '';

      
        
        
        
        



        