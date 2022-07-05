// Actividad 1 - Marco Medina

// 1.- En la consola del navegador, crea un pequeño programa que le pida al usuario que ingrese un numero, multiplica ese numero por 2
// y muestra en salida el resultado de esa operacion

alert("Multiplicar numero por 2");
const numeroAct1 = prompt("Ingrese un numero");

alert(numeroAct1 * 2);

// 2.- En la consola del navegador escribe un programa que reciba 2 numeros e imprime en pantalla la resta de ambos.
alert("Resta de 2 numeros");
const numero1Act2 = prompt("Ingrese un numero", "")
const numero2Act2 = prompt("Ingrese otro numero", "")
alert(`Result: ${numero1Act2 - numero2Act2}`);

// 3.- Escribe un programa que calcule el area de un circulo con un radio r = 5.3. Imprime el area en pantalla
alert(`Area de circulo con radio de 5.3:    ${3.14 * Math.pow(5.3, 2)}`)

// 4.- Escribe un programa que calcule el area de un rombo, sabiendo que D = 8 cm, d = 6 cm. Formula: a=Dxd/2
alert(`Area de rombo D=8 cm, d = 6 cm:   ${8*(6/2)}`);
