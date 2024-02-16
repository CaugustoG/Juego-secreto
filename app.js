let numeroSecreto = 0;
let intentos = 1;
let numerosSorteados = [];
let numeroMaximo = 10;

console.log (numeroSecreto);

function asignarTextoElemento (elemento , texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento (){
    let numeroDeUsuario = parseInt(document.getElementById ("valorUsuario").value);
  
    //console.log (numeroSecreto === numeroDeUsuario);
    if (numeroSecreto === numeroDeUsuario){
        asignarTextoElemento ("p" , `haz acertado el número en  ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
        document.getElementById('reiniciar').removeAttribute ('disabled');
    } else {
        if (numeroSecreto < numeroDeUsuario){
                asignarTextoElemento ("p", "El número secreto es menor");
        } else {
            asignarTextoElemento ("p" , "El número secreto es mayor");
        }
        intentos ++;
        limpiarCaja ();
    } 
    return;
}

function limpiarCaja (){
    document.querySelector("#valorUsuario").value = '';
    return;
}

function generarNumeroSecreto (){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log (numeroGenerado);
    console.log (numerosSorteados);

    if (numerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ('p', 'ya se sortearon todos los números posibles');
    }else {
        if (numerosSorteados.includes (numeroGenerado)){
            return generarNumeroSecreto();  
        } else{
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }
}

function condicionesIniciales() {
    asignarTextoElemento ("h1", "juego del número secreto!");
    asignarTextoElemento ("p", `selecciona un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto ();
    intentos = 1;
}

function reiniciarJuego (){
    //Limpiar la caja
    limpiarCaja ();
    //indicar mensaje de intervalo de números
    //generar número aleatorio
    //innicialzar el número de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector ("#reiniciar").setAttribute ("disabled" , "true");
}


condicionesIniciales ();