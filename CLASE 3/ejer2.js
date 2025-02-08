/*
Determina el rango de un número:
Declara una variable número con un valor numérico y utiliza condicionales para
determinar en qué rango se encuentra.
*/

let numero= 40;

if(numero>=1 && numero<=10){
    console.log("El número está en el rango de 1 al 10")
}else if(numero>=11 && numero<=20){
    console.log("El número está en el rango de 11 al 20")
} else if(numero>=21 && numero<=30){
    console.log("El número está en el rango de 21 al 30")
} else{
    console.log("El número está fuera del rango")
}