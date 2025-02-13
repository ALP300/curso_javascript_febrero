/*

Ejercicio 3: Contar números pares e impares entre dos números
Descripción: Pide al usuario dos números A y B (donde A < B) y cuenta cuántos números son pares y cuántos impares en ese rango.


*/
let A= 10;
let B= 20;

if(A>=B){
    console.log("Error: A debe ser menor que B")
    return;
}
let pares= 0;
let impares=0;

for(let i=A ; i<=B; i++){
    if(i%2===0){
        pares++;
    }else{
        impares++;
    }
   
}
console.log("Pares: "+pares+ " Impares: "+impares)