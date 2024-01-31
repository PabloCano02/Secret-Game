//Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: 
//"Hora del Desafío".
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del desafío';

//Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione 
//el botón "Console".
function realizarClicado() {
    console.log('El botón fue clicado');
}

//Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de 
//una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: 
//"Estuve en {ciudad} y me acordé de ti".
function mensajeCiudad() {
    let ciudad = prompt('Ingrese el nombre de una ciudad de Brasil');
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

//Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el 
//botón "Alerta".
function generarAlerta() {
    alert('Yo amo JS');
}

//Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function realizarSuma() {
    let numero1 = parseInt(prompt('Señor usuario ingrese el primer número'));
    let numero2 = parseInt(prompt('Señor usuario ingrese el segundo número'));
    let resultado = numero1 + numero2;
    alert(`Señor usuario, la suma entre ${numero1} y ${numero2} es ${resultado}`);
}

//Desafío 2

//Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludo() {
    console.log('Hola mundo');
}
saludo();

//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludoNombre(nombre) {
    console.log(`¡Hola, ${nombre}`);
}
saludoNombre('Pablo');

//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function dobleDelNumero(numero) {
    return numero*2;
}
console.log(dobleDelNumero(5));

//Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3)/3;
}
console.log(promedio(9,14,85));

//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function retornarMayor(numero1, numero2) {
    if(numero1 >= numero2) {
        return numero1;
    } else {
        return numero2;
    }
}
console.log(retornarMayor(87,5));

//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese 
//número por sí mismo.
function cuadradoDelNumero(numero) {
    return numero*numero;
}
console.log(cuadradoDelNumero(7));

//Desafío 3

//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura 
//en metros y peso en kilogramos, que se recibirán como parámetros.
function calcularIMC(altura, peso) {
    return peso/(altura * altura);
}
let IMC = parseFloat(calcularIMC(1.8,80));
console.log(`Señor usuario su IMC es de: ${IMC}`);

//Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calcularFactorial(numero) {
    if(numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFactorial(numero - 1);
    }
}
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`Señor usuario el factorial ${numero} es: ${resultado}`);

//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor 
//equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). 
//Para esto, considera la cotización del dólar igual a R$4,80.
function convertirDolaresAReales(dolar) {
    return dolar * 4.80;
}
let dolar = 1;
let real = convertirDolaresAReales(dolar);
console.log(`Señor usuario ${dolar} ${(dolar == 1) ? 'dolar' : 'dolares'} son ${real} reales`);

//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
//utilizando la altura y la anchura que se proporcionarán como parámetros.
function calcularAreaYPerimetroRectangular(alto, ancho) {
    let area = alto * ancho;
    let perimetro = 2 * alto + 2 * ancho;
    console.log(`El área es de: ${area}`);
    console.log(`El perímetro es de: ${perimetro}`);
}
let alto = 20;
let ancho = 15;
calcularAreaYPerimetroRectangular(alto, ancho);

//Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su 
//radio que se proporcionará como parámetro. Considera Pi = 3,14.
function calcularAreaYPerimetroCircular(radio) {
    let area = Math.PI * radio * radio;
    let perimetro = 2 * Math.PI * radio;
    console.log(`El área es de: ${area}`);
    console.log(`El perímetro es de: ${perimetro}`);
}
let radio = 10;
calcularAreaYPerimetroCircular(radio);

//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function mostrarTablaDeMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}
let numero1 = 3;
mostrarTablaDeMultiplicar(numero1);


//Desafío 4

//Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes 
//elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python']

//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby' , 'GoLang');

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarLenguajesDeProgramacion() {
    console.log(lenguagesDeProgramacion);
}
mostrarLenguajesDeProgramacion();

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion 
//en orden inverso.
function mostrarLenguajesDeProgramacionOrdenInverso() {
    let lenguagesDeProgramacionOrdenInverso = [];
    for (let i = lenguagesDeProgramacion.length -1; i >= 0; i--) {
        lenguagesDeProgramacionOrdenInverso.push(lenguagesDeProgramacion[i])
    }
    console.log(lenguagesDeProgramacionOrdenInverso); 
}
mostrarLenguajesDeProgramacionOrdenInverso();

//Crea una función que calcule el promedio de los elementos en una lista de números.
let listaNumerosAleatorios = [];
let cantidadDeDatos = Math.ceil(Math.random()*10);

function llenadoListaNumerosAleatorios() {
    for (let i = 0; i < cantidadDeDatos; i++) {
        listaNumerosAleatorios[i] = Math.ceil(Math.random()*10);
    }
    console.log(listaNumerosAleatorios);
}

function calcularPromedio() {
    let sumaDeNumeros = 0;
    for (let i = 0; i < listaNumerosAleatorios.length; i++) {
        sumaDeNumeros += listaNumerosAleatorios[i];
    }
    let promedio = sumaDeNumeros / listaNumerosAleatorios.length
    console.log(`El promedio de los ${listaNumerosAleatorios.length} numeros es de: ${promedio}`)
}
llenadoListaNumerosAleatorios();
calcularPromedio();

//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function mostrarNumeroMenorYMayor() {
    let numeroMenor = listaNumerosAleatorios[0];
    let numeroMayor = listaNumerosAleatorios[0];
    for (i = 0; i < listaNumerosAleatorios.length; i++) {
        if (listaNumerosAleatorios[i] > numeroMayor) {
            numeroMayor = listaNumerosAleatorios[i];
        }
        if (listaNumerosAleatorios[i] < numeroMenor) {
            numeroMenor = listaNumerosAleatorios[i];
        }
    }
    console.log(`El número menor de la lista es ${numeroMenor} y el número mayor de la lista es ${numeroMayor}`);
}
mostrarNumeroMenorYMayor();

//Crea una función que devuelva la suma de todos los elementos en una lista.
function sumaElementosLista() {
    let sumaDeNumeros = 0;
    for (let i = 0; i < listaNumerosAleatorios.length; i++) {
        sumaDeNumeros = sumaDeNumeros + listaNumerosAleatorios[i];
    }
    console.log(`La suma de los números de la lista son ${sumaDeNumeros}`);
}
sumaElementosLista();

//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como 
//parámetro, o -1 si no existe en la lista.
function devolverPosicion(numero) {
    for (let i = 0; i < listaNumerosAleatorios.length; i++) {
        if (listaNumerosAleatorios[i] === numero) {
            return i;
        }
    }
    return -1;
}
console.log(devolverPosicion(5));

//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista 
//con la suma de los elementos uno a uno.
let resultadoSumaNumeros = [];

function sumaElementosDeListas() {
    for (let i = 0; i < listaNumerosAleatorios.length; i++) {
        resultadoSumaNumeros[i] = listaNumerosAleatorios[i] + listaNumerosAleatorios[i];
    }
    console.log(resultadoSumaNumeros);
}
sumaElementosDeListas();

//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
let cuadradosDeNumeros = [];

function listaCuadradoDeNumeros() {
    for (let i = 0; i < listaNumerosAleatorios.length; i++) {
        cuadradosDeNumeros[i] = listaNumerosAleatorios[i] * listaNumerosAleatorios[i];
    }
    console.log(cuadradosDeNumeros);
}
listaCuadradoDeNumeros();
