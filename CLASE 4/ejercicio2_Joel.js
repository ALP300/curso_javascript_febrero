/*
Ejercicio 2: Verificar números pares
Crea una función esPar que reciba un número como parámetro y devuelva true si es par o false si es impar.
*/

function esPar(numero){
    if(numero%2===0){
        return true;
    }else{
        return false;
    }
}
let numero= 7;
console.log(esPar(numero)); //true