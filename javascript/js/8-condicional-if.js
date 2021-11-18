console.log("operador condicional");
"use strict"
console.log("condicional simple");
var edad = 18;
if (edad >=18) {
    console.log("bienvenido. dirijase a la mesa de votacion");
}

console.log("condicional compuesto");
var personas =60;
console.log("el numero de personas es de:" + personas);
if(personas<=20){
    console.log("use el ambiente 1");
}
else if(personas>20 && personas<=40){
    console.log("use el ambiente 2");
}
else if(personas>40 && personas<=100){
    console.log("use el biauditorio");
}
else if(personas>100){
    console.log("no hay ningun ambiente con capacidad para todad las personas");
}
else{
    console.log("a surgido un error");
}
console.log("condicional anidado");
/*sistema para determinar el descuento del usauario*/
/*si el usuario es menor de 10 años o mayor a 70 años tiene un descuento sobre el valor de tiquete del 10%
si el destino es cartagena tiene descuento adicioinal del 10%
si la aereolinea es Latam a dicho destino, estos usuarios tienen descuento adicional del 10%*/
var edadUsuario= 71;
var aerolineaUsuario = "latam";
var destinoUsuario = "san andres";
var valorTique = 250000;
var descuento = 10;

if (edadUsuario <=1 10; edadUsuario>=70){
    valorTiquete = ( valorTiquete - (valorTiquete * descuento));
    if (destinoUsuario === "san andres"){
        valorTiquete = (valorTiquete - (valroTiquete));
    }
}
console.log("valor del tiquete: $" + valorTiquete);