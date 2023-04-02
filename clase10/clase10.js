function numeroAleatorio(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

function ejercicio1(){
    let lista = [];

    for(let i = 0; i < 10; i++){
        lista[i] = numeroAleatorio(1, 100);
    }

    lista.sort();

    console.log(lista);

}

function ejercicio2(){
    let lista = [1,2,3,4,5,6];
    let largo_lista = lista.length;
    let i = 0;

    while(i < largo_lista){
        console.log(lista[i]);
        i++;
    }
    console.log();
    for(let i = 0; i < largo_lista; i++){
        console.log(lista[i]);
    }

    console.log();
    lista.forEach(e => console.log(e));
    console.log();
    lista.forEach(e => console.log(e + 1));

    var copia_lista = [];
    lista.forEach(e => {copia_lista.push(e + 1)});
    console.log(copia_lista);

    var suma = lista.reduce((suma, actual) => suma + actual, 0);
    var promedio = suma/largo_lista;
    console.log(promedio);
}

function ejercicio3(){
    var lista_numeros = [1, 2, 3, 4, 5];
    var elevados = lista_numeros.map(e => e*e);
    console.log(elevados);
}

function ejercicio4(){
    var array = [1, -4, 12, 0, -3, 29, -150];
    var suma_positivos = array.filter(x => x > 0).reduce((suma, actual) => suma + actual, 0);
    console.log(suma_positivos);
}

function ejercicio5(){
    var nombres =  ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];
    var nombres_filtrados = nombres.filter(x => x.length >= 6);
    console.log(nombres_filtrados);
    
    var nombres_M = nombres.filter(x => x[0] == 'M');
    console.log(nombres_M);
    
    console.log(nombres.sort());
    
    var iniciales = nombres.map(x => x[0]);
    console.log(iniciales);
    
    var nombres_mayusculas = nombres.map(x => x.toUpperCase());
    console.log(nombres_mayusculas);
    
    console.log(nombres.some(x => x[0] == 'J'));
}

function ejercicio6(){
    var array = ["azul", "amarillo", "rojo", "verde", "café", "rosa"]
    var ingreso = prompt("Ingrese un color");

    return array.some(x => x == ingreso);
}

function ejercicio7(arreglo){
    return arreglo.filter(x => (x % 2 == 0));
}

function es_vocal(letra){
    var vocales = ['A', 'E', 'I', 'O', 'U'];

    let existe = vocales.some(x => x == letra);
    if(existe){
        return true;
    }
    vocales_minus = vocales.map(x => x.toLowerCase());
    existe = vocales_minus.some(x => x == letra);

    return existe;
}

function ejercicio8(arreglo){
    return arreglo.filter(x => es_vocal(x[0]));
}

function ejercicio9(arreglo, i, j){
    var aux = arreglo[i];
    arreglo[i] = arreglo[j];
    arreglo[j] = aux;
}

ejercicio1();
ejercicio2();
ejercicio3();
ejercicio4();
ejercicio5();
//console.log(ejercicio6());
var arreglo7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
ejercicio7(arreglo7);
var palabras = ["azul", "amarillo", "rojo", "verde", "café", "rosa"]
console.log(ejercicio8(palabras));
