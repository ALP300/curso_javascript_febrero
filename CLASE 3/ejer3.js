/*
Calculadora simple:
Declara tres variables: a (un número), operador (un operador aritmético como
cadena), y b (otro número). Utiliza condicionales para realizar la operación
correspondiente y muestra el resultado.
*/
//let num= parseInt(prompt("Ingresa un número: "))
let a=10, b=20;
let operador="*"; //* , - , + , /
let resultado;

if(operador=="+"){
    resultado= a+b;
} else if(operador=="-"){
    resultado= a-b;
}else if(operador=="-"){
    resultado= a-b;
} else if(operador=="/"){
    resultado= a/b;} 
else if(operador=="*"){
        resultado= a*b;
}else{
    console.log("Operador inválido")
}
console.log("El resultado es: "+resultado)