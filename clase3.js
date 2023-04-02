
function mostrarTipoDato(dato){
    console.log(typeof(dato));
}

function mostrar(mensaje, dato){
    if(mensaje){
        console.log(mensaje + " = ");
    }

    console.log(dato);
}

//1)
function tipoDeDato(ingreso){
    console.log(typeof(ingreso));
}

//2)
function restar(a, b){
    resultado = a - b;
    mostrar("Resultado de la resta", resultado);
}

//3)
function swap(a, b){
    p = a;
    a = b;
    b = p;
    mostrar("Valor en a", a);
    mostrar("Valor en b", b);
}

//4)
function medidasCuadrado(lado){
    perimetro = 0;
    for (let i = 0; i < 4; i++) {
        perimetro = perimetro + lado;
    }
    superficie = lado * lado;
    mostrar("Perimetro del cuadrado", perimetro);
    mostrar("Superficie del cuadrado", superficie);
}

//5)
function fahrenheitACelcius(temperatura){
    temperaturaCelcius = ((temperatura - 32) * 5)/9;
    mostrar("Valor en Fahrenheit", temperatura);
    mostrar("Valor en Celcius", temperaturaCelcius);
}

//6)

function numeroPorIngreso(){
    valor = 11;
    while(valor > 10){
        valor = prompt("Ingrese un numero no mayor a 10");
    }

    return valor;
}

function factorial(numero){
    if(numero < 0){
        return -1; //Error
    } else if(numero == 0){
        return 1;
    }

    return numero*factorial(numero - 1);
}

//7)
function esPalindromo(texto){
    var reversed = texto.toLowerCase().replace(/ /g, '').split('').reverse().join('');
    texto = texto.toLowerCase().replace(/ /g, '');
    if(texto === reversed){
        return true;
    }

    return false;
}

//8)
function minusMayus(texto){
    console.log(texto.toLowerCase());
    console.log(texto.toUpperCase());
}

//9)
function calificacion(nota){
    var devolucion = "";

    if(nota >= 0 && nota <= 3){
        devolucion = "Muy deficiente";
    } else if(nota > 3 && nota <= 5){
        devolucion = "Deficiente";
    } else if(nota > 5 && nota <= 6){
        devolucion = "Suficiente";
    } else if(nota > 6 && nota <= 7){
        devolucion = "Bien";
    } else if(nota > 7 && nota <= 9){
        devolucion = "Notable";
    } else if(nota > 9 && nota <= 10){
        devolucion = "Sobresaliente";
    } else{
        devolucion = "Error";
    }

    console.log(devolucion);
}

//10)
function mesACantidadDias(mes){
    if(mes < 8){
        if(mes % 2 == 0){
            return 30;
        } else{
            return 31;
        }
    }

    if(mes >= 8 && mes <= 12){
        if(mes % 2 == 0){
            return 31;
        } else{
            return 30;
        }
    }
    return -1; //Error
}

//11)
function piramide(filas){
    for (let i = 1; i <= filas; i++) {
        for (let j = 0; j < i; j++) {
            process.stdout.write("" + (j+1)); //Escribir sin newline
        }
        console.log("");
    }
}

//12)
function calcularCajas(bultosEnStock, bultosPorCaja){
    var cajas = 0;

    while(bultosEnStock >= bultosPorCaja){
        cajas += 1;
        bultosEnStock -= bultosPorCaja;
    }

    mostrar("Cajas necesarias", cajas);
    mostrar("Cantidad de bultos sueltos", bultosEnStock);
}

//13)
function codigoADescuento(codigo){
    if(codigo === "fiesta"){
        console.log("El descuento es del 5%");
    } else if(codigo === "focus"){
        console.log("El descuento es del 10%");
    } else{
        console.log("No hay descuentos disponibles para ese codigo :(");
    }

}

//prompt no corre en la consola, solo en un navegador.
//var nombre = prompt("Ingrese su nombre");
var nombre = "Francisco";
tipoDeDato(nombre);

restar(5, 2);

swap("aaaaaaa", "bbbbbb");

medidasCuadrado(5);

fahrenheitACelcius(85);

//prompt no corre en la consola, solo en un navegador.
//factorial(numeroPorIngreso());

factorial(4);

console.log(esPalindromo("neuquen"));
console.log(esPalindromo("Somos o no somos"));

minusMayus("Esta es una oracion");

calificacion(5);

mesACantidadDias(8);

piramide(5);

calcularCajas(55, 6);

codigoADescuento("fiesta");