function suma(){
    var A;
    var B;
    var C;

    alert("Este algoritmo realiza una suma con 2 valores ingresados por el usuario")
    A = parseInt(prompt("por favor ingrese el primer valor"))
    B = parseInt(prompt("por favor ingrese el segundo valor valor"))

    C = A + B
    alert("El resultado de la suma es: "+ C )
}
function operaciones(){
    var A;
    var B;
    var suma;
    var resta;
    var mult;
    var div;

    alert("Este algoritmo realiza una suma, resta, multiplicacion y division con 2 valores ingresados por el usuario")
    A = parseInt(prompt("por favor ingrese el primer valor"))
    B = parseInt(prompt("por favor ingrese el segundo valor valor"))

    suma = A + B
    resta = A - B
    mult = A * B
    div = A / B
    alert("El resultado de la suma es: "+ suma )
    alert("El resultado de la resta es: "+ resta )
    alert("El resultado de la multiplicacion es: "+ mult )
    alert("El resultado de la division es: "+ div )
}
function cuadrado(){
    var A;
    var B;

    alert("Este algoritmo eleva un numero ingresado por el usuario")
    A = parseInt(prompt("por favor ingrese el numero a elevar"))

    B = A * A
    alert("El resultado es: "+ B )
}
function areat(){
    var B;
    var H;
    var A;

    alert("Este algoritmo da el cuadrado de un triangulo")
    B = parseInt(prompt("por favor ingrese el valor de la base"))
    H = parseInt(prompt("por favor ingrese el valor de la altura"))

    A =(B * H)/2
    alert("El area del triangulo es: "+ A )
}
function pulgadas(){
    var vp;
    var cm;
    var m;
    var km;

    alert("Este algoritmo da el valor en pulgadas")
    vp = parseInt(prompt("por favor ingrese el valor en pulgadas"))

    cm = vp* 2.54
	m = vp*0.0254
	km = vp*0.000254

    alert("El valor en centimetro es: "+ cm )
    alert("El valor en metros es: "+ m )
    alert("El valor en kilometros es: "+ km )
}
function menor(){
    var A;
    var B;
    var C;
    var resultado;

    alert("Este algoritmo compara y da el numero menor de tres")
    A = parseInt(prompt("por favor ingrese el primer valor"))
    B = parseInt(prompt("por favor ingrese el segundo valor"))
    C = parseInt(prompt("por favor ingrese el tercer valor"))

if (A<=B && A<=C){
    resultado = A;

}else if (B<=A && B<=C){
    resultado = B;

}else{
    resultado = C;
}    

    alert("El numero menor es: "+ resultado )
}

function calificaciones(){
    var A;
    var B;
    var C;
    var D;
    var E;
    var F;
    var G;
    var nota;
    var calificacion;

    alert("Este algoritmo promedia el valor de las notas y dice si aprueba o no")
    A = parseInt(prompt("por favor ingrese la primera nota"))
    B = parseInt(prompt("por favor ingrese la segundo nota"))
    C = parseInt(prompt("por favor ingrese la tercer notas"))
    D = parseInt(prompt("por favor ingrese la cuarta nota"))
    E = parseInt(prompt("por favor ingrese la quinta nota"))
    F = parseInt(prompt("por favor ingrese la sexta nota"))
    G = parseInt(prompt("por favor ingrese la septima nota"))

nota = (A + B + C + D + E + F + G) / 2

if (nota <= 6.2){
    alert("El estudiante reprobo con: " + nota);
}
else{
    alert("El estudiante aprobo con: " + nota);
}

}

function nacimiento(){
    var edad;
    var año;

    alert("Este sistema determina el año en que nacio el usuario");

    edad = parseInt(prompt("INGRESE SU EDAD"));

    año = 2022 - edad;

    alert("El usuario nacio en el año: " + año )
}

function banco(){
    var c;
    var a;
    var g;
    var ga;
    var gt;

    alert("Este sistema calcula cuanto gana el usuario al invertir su capital");

    c = parseInt(prompt("INGRESE LA CANTIDAD A INVERTIR"));
    a = parseInt(prompt("INGRESE EL NUMERO DE AÑOS"));

    ga = (c * 0.02) * 12,
    g = ga * a;
    gt = g + c;

    alert("La cantidad a ganar en " + a + " años es igual a: "+ g);
    alert("La suma de las ganacias mas el capital invertido es igual a: " + gt);

}

function fruteria(){
    var kilo;
    var desc;
    var precio;
    var total;

    alert("Este sistema calcula cuanto debe pagar un cliente por su compra");

    kilo = parseInt(prompt("INGRESE LA CANTIDAD DE KILOS COMPRADOS")); 

    precio = kilo * 4500;

    if (kilo <= 2){
        desc = precio * 0.0;
        total = precio - desc;
        alert("Su compra tiene un descuento de: " + desc);
        alert("El total a pagar es un valor de: " + total);
    }
    else if (kilo <= 5){
        desc = precio * 0.10;
        total = precio - desc;
        alert("Su compra tiene un descuento de: " + desc);
        alert("El total a pagar es un valor de: " + total);
    }
    else if (kilo <= 10){
        desc = precio * 0.15;
        total = precio - desc;
        alert("Su compra tiene un descuento de: " + desc);
        alert("El total a pagar es un valor de: " + total);
    }
    else{
        desc = precio * 0.20;
        total = precio - desc;
        alert("Su compra tiene un descuento de: " + desc);
        alert("El total a pagar es un valor de: " + total);
    }
}








