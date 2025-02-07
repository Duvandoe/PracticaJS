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
        alert("Error")
    }
}

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

escriba = document.querySelector(".escriba");
tabla = document.querySelector(".tabla");
boton = document.querySelector(".tablaboton");

boton.addEventListener("click", function(){
    tabla.innerHTML = escriba.value;
})



