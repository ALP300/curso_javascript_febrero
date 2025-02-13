/*
Ejercicio 6: Imprimir números que no sean divisibles por 2 ni por 3
Descripción: Pide un número N y muestra todos los números entre 1 y N que no sean divisibles ni por 2 ni por 3.


*/

let N= 10;
let pares= 0;   
let impares=0;
for(let i=1 ; i<=N; i++){
    if(i%2===0){
        pares++;
    }else{
        impares++;
    }
   
}
console.log("Pares: "+pares+ " Impares: "+impares)