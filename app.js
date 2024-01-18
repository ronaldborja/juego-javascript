//Trae el texto almacenado en h1 -> Trae el objeto 
let numeroSecreto = 0; 
let intentos = 0; 
let listaNumerosSorteados = [];
let numeroMaximo = 10; 

//Función Generica -> Reutilizarla n-veces
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
    return;
}

//Nuevo Intento -> Función Llamada por el Botón 
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled'); 

    //El usuario no acertó -> Lógica: 
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor'); 
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja(); 
    }
    return; 
}

//Func para génerar el numero secreto
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1; 
    console.log(numeroGenerado); 
    console.log(listaNumerosSorteados);

    //Validador de recursividad 
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Se han sorteado todos los numeros posibles');
    } else {
        //Si el numero generado está incluido en la lista: 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); //Recursividad 
        } else {
            listaNumerosSorteados.push(numeroGenerado); 
            return numeroGenerado; 
        }
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function condicinesIniciales() {
    numeroSecreto = generarNumeroSecreto(); 
    asignarTextoElemento('h1', 'Juego del numero secreto'); 
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`); 
    intentos = 1; 
}

function reiniciarJuego() {
    //1. Limpiar la caja 
    limpiarCaja(); 

    //2. Poner mensaje de inicio (intervalo de numeros) 
    //3. Reinicia el Numero Intentos
    //4. Generar un numero aleatorio  
    condicinesIniciales(); 
    
    //5. Deshabilitar otra vez el botón "Nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
}

condicinesIniciales(); 
