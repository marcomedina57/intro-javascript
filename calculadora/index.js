

const numeroClicked = (valor) => {
    console.log(valor);
}

const botones = document.getElementsByTagName('button');

for (const boton of botones) {
    boton.addEventListener('click', () => {
        if (!isNaN(boton.value)){
            colocarNumero(boton.value)
        } else {
            colocarNoNumero(boton.value);
        }
    })
}

const textArea = document.getElementById('txtArea');

const colocarNumero = (valor) => {
    textArea.value = textArea.value === null ? 0 + valor : textArea.value + valor;
    
}

const limpiar = () => {
    textArea.value = "";
    numero1 = null;
    numero2 = null;
    tipoOperacion = null;
}

const borrar = () => {
    textArea.value = textArea.value.substring(0, textArea.value.length - 1);
    numero1 = textArea.value;
}

const calcular = () => {
    if(!numero1) return;
    switch(tipoOperacion) {
        case '+':
            numero2 = textArea.value;
            textArea.value = Number(numero1) + Number(numero2);
            numero1 = textArea.value;
            numero2 = null;
        break;
        case '-':
            numero2 = textArea.value;
            textArea.value = Number(numero1) - Number(numero2);
            numero1 = textArea.value;
            numero2 = null;
            
        break;
        case '*':
            numero2 = textArea.value;
            textArea.value = Number(numero1) * Number(numero2);
            numero1 = textArea.value;
            numero2 = null;
        break;
        case '/':
            numero2 = textArea.value;
            textArea.value = Number(numero1) / Number(numero2);
            numero1 = textArea.value;
            numero2 = null;
        break;
    }

}

let numero1 = null;
let numero2 = null;
let tipoOperacion = null;

const colocarNoNumero = (valor) => {
    switch(valor){
        case '+':
            if (!numero1 && !numero2){
                numero1 = textArea.value;
                textArea.value = "";
                console.log(numero1);
                tipoOperacion = "+";
            } else if (numero1 && !numero2){
                tipoOperacion = "+";
                textArea.value = "";
            }
        break;
        case '-':
            if (!numero1 && !numero2){
                numero1 = textArea.value;
                textArea.value = "";
                console.log(numero1);
                tipoOperacion = "-";
            } else if (numero1 && !numero2){
                tipoOperacion = "-";
                textArea.value = "";
            }
        break;
        case '*':
            if (!numero1 && !numero2){
                numero1 = textArea.value;
                textArea.value = "";
                console.log(numero1);
                tipoOperacion = "*";
            } else if (numero1 && !numero2){
                textArea.value = "";
                tipoOperacion = "*";
            }
        break;
        case '/':
            if (!numero1 && !numero2){
                numero1 = textArea.value;
                textArea.value = "";
                console.log(numero1);
                tipoOperacion = "/";
            } else if (numero1 && !numero2){
                textArea.value = "";
                tipoOperacion = "/";
            }
        break;

    }
}