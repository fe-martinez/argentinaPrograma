const PRECIO_DOLAR = 300;


function ejercicios1a3 (){
    var arrayDeColores = ["ROJO", "VERDE", "AZUL", "AMARILLO", "NARANJA"];
    
    let tercerColor = arrayDeColores[2];
    
    console.log(arrayDeColores[0][0]);
}

function numeroAleatorio(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

function llenarArray1al10(){
    let numeros = [];

    for (let i = 1; i <= 10; i++) {
       numeros.push(i);
    }

    return numeros;
}

function llenarArrayAleatorios(){
    let numeros = [];

    for(let i = 0; i < 10; i++){
        numeros.push(numeroAleatorio(1, 99));
    }

    return numeros;
}

function concatenarIngresos(){
    let resultado = "";

    let ingreso = prompt("Ingrese el texto o escriba cancelar para salir");

    while(ingreso != "cancelar" && ingreso != "CANCELAR" && ingreso != "Cancelar"){
        resultado = resultado + ingreso;
        resultado = resultado + "-";
        ingreso = prompt("Ingrese el texto o escriba cancelar para salir");
    }

    console.log(resultado);
}

function ingresosEnArray(){
    let resultado = [];

    let ingreso = prompt("Ingrese el texto o escriba cancelar para salir");

    while(ingreso != "cancelar" && ingreso != "CANCELAR" && ingreso != "Cancelar"){
        resultado.push(ingreso);
        ingreso = prompt("Ingrese el texto o escriba cancelar para salir");
    }

    for(let i = 0; i < resultado.length; i++){
        console.log(resultado[i]);
    }
}

function dolaresAPesos(cantidadDolares){
    return cantidadDolares * PRECIO_DOLAR;
}

function dolaresAPesos() {
    const cantidadDolares = document.getElementById("dolares").value;
    const resultPesos = cantidadDolares * PRECIO_DOLAR;
    document.getElementById("resultadoPesos").value = resultPesos;
}

function pesosADolares() {
    const cantidadPesos = document.getElementById("pesos").value;
    const resultDolares = cantidadPesos/PRECIO_DOLAR;
    document.getElementById("resultadoDolares").value = resultDolares;
}

function centigradosAFahrenheit() {
    const centigrados = document.getElementById("centigrados").value;
    const resultFahrenheit = (centigrados * 9/5) + 32;
    document.getElementById("resultadoFahrenheit").value = resultFahrenheit;
}


ejercicios1a3();

console.log(numeroAleatorio(1, 99));

var unoAlDiez = llenarArray1al10();
console.log(unoAlDiez);

var arrayNumerosAleatorios = llenarArrayAleatorios();
console.log(arrayNumerosAleatorios);