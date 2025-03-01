function ValidarNumero(){
    let numero
    
    do{
        numero = prompt("Escriba un numero");
        if (isNaN(numero)){
            alert("Escriba un numero por favor");
        }
        else if (numero === null){
            alert("no se escribio numero espacio vacio");
            break;
        }else{
            alert("El numero " + numero + " es valido");
            break;
        }
    }while(isNaN(numero));   
}

function ValidarLetra(){
    let letra;
    do{
        letra = prompt("Escriba una letra");
        if (!isNaN(letra)){
            alert("Escriba una letra por favor");
        }
        else if (letra === null){
            alert("no se escribio letra espacio vacio");
            break;
        }else{
            alert("La letra " + letra + " es valida");
            break;
        }
    }while(!isNaN(letra));
}

function CalculoArea(){
    let b, h;
    b = prompt("Escriba el valor de la base");
    h = prompt("Escriba el valor de la altura");
    let area = (b * h) /2;
    alert("El area del triangulo es " + area);
}

function CalculoPerimetro(){
    let lado1, lado2, lado3;
    let P = 0;
    lado1 = parseInt(prompt("Escriba el valor del lado 1"));
    lado2 = parseInt(prompt("Escriba el valor del lado 2"));
    lado3 = parseInt(prompt("Escriba el valor del lado 3"));
    P = lado1 + lado2 + lado3;
    alert("El perimetro del triangulo es " + P);
}

function Calculadora(){
    let numero1 = parseInt(prompt("Ingrese un numero"));
    let numero2 = parseInt(prompt("Ingrese otro numero"));
    let operacion = prompt("¿Que operacion quieres hacer?: (+ , -, *, /)");
    let resultado;
    do{
        if(operacion === "+"){
            resultado = numero1 + numero2;
            alert("El resultado de la suma es: "+ resultado);
        }else if (operacion === "-"){
            resultado = numero1 - numero2;
            alert("El resultado de la resta es: "+ resultado);
        }else if (operacion === "*"){
            resultado = numero1 * numero2;
            alert("El resultado de la multiplicacion es: "+ resultado);
        }else if (operacion === "/"){
            resultado = numero1 / numero2;
            alert("El resultado de la division es: "+ resultado);
        }else{
            alert("Datos no validos")
            break;
        }
    }while(!isNaN(resultado));
}

function adivina(){
    let intentos = 0;

    do{
        let num = parseInt(prompt("Escribe un numero del 1 al 10 para adivinar"));
        let numAdiv = Math.floor(Math.random() * 10)+1;
        if (num === numAdiv){
            alert("Adivinaste el numero "+ numAdiv);
            return;
        }else{
            alert("No adivinaste el numero " + numAdiv);
            intentos++;
        }   
    }while(intentos<3);

    alert("Perdiste. El número era " + numAdiv);
}

function incremento(){
    let x = "x";
    
    for(let i = 1; i < 20; i++){
        x = x + "x";
        console.log(x);
    }
    
}

function ParyImpar(){
    let num = parseInt(prompt("Escriba un numero para ver si es par o impoar"));
    if (num % 2 === 0){
        alert("El numero es par");
    }else{
        alert("El numero es impar");
    }
}

function primo() {
    let num = parseInt(prompt("Escriba un número para ver si es primo"));
    if (num < 2) {
        alert("El número no es primo"); // Números menores que 2 no son primos
        return;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            alert("El número no es primo");
            return;
        }
    }
    alert("El número es primo");
}

function factorial(){
    let num = parseInt(prompt("Escriba un numero para ver su factorial"));
    let fact = 1;
    for(let i = 1; i <= num; i++){
        fact = fact * i;
    }
    alert("El factorial de " + num + " es: " + fact);
}

function FizzBuzz(){
    let num = parseInt(prompt("Escriba un numero para ver si es Fizz o Buzz o FizzBuzz"));
    while(num <= 30){
        if (num % 3 === 0 && num % 5 === 0){
            console.log("FizzBuzz");
        }else if (num % 3 === 0){
            console.log("Fizz");
        }else if (num % 5 === 0){
            console.log("Buzz");
        }else{
            console.log(num);
        }
        num++;
    }
}

adivinar = document.querySelector(".adivinar");
adivinar.addEventListener("click", adivina);

calculadora = document.querySelector(".Calculadora");
calculadora.addEventListener("click", Calculadora);

u = document.querySelector(".Perimetro");
u.addEventListener("click", CalculoPerimetro);

o = document.querySelector(".Calcular");
o.addEventListener("click", CalculoArea);

i = document.querySelector(".Validar2");
i.addEventListener("click", ValidarLetra);

e = document.querySelector(".Validar");
e.addEventListener("click", ValidarNumero);

incremen = document.querySelector(".incrementar");
incremen.addEventListener("click", incremento);

pares = document.querySelector(".pares");
pares.addEventListener("click", ParyImpar);

primos = document.querySelector(".primo");
primos.addEventListener("click", primo);

factori = document.querySelector(".factorial");
factori.addEventListener("click", factorial);

fizz = document.querySelector(".FizzBuzz");
fizz.addEventListener("click", FizzBuzz);

escriba = document.querySelector(".escriba");
tabla = document.querySelector(".tabla");
boton = document.querySelector(".tablaboton");

boton.addEventListener("click", function(){
    tabla.innerHTML = escriba.value;
})



