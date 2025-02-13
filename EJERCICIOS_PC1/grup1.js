let totalPaltas = 50;
let primeraCalidad = 40;
let segundaCalidad = 5;
let terceraCalidad = 5;
let desctJava = 1.8;
let precioPrimera = 6;
let precioSegunda = 3;
let precioTercera = 1;
let pesoTotal = parseInt(24 - desctJava);
let costoTotal = 0;
if (primeraCalidad > 0) {
  let pesoPrimera = parseInt(primeraCalidad * pesoTotal);
  let costoPrimera = parseInt(pesoPrimera * precioPrimera);
  costoTotal += costoPrimera;
}
if (segundaCalidad > 0) {
  let pesoSegunda = parseInt(segundaCalidad * pesoTotal);
  let costoSegunda = parseInt(pesoSegunda * precioSegunda);
  costoTotal += costoSegunda;
}
if (terceraCalidad > 0) {
  let pesoTercera = parseInt(terceraCalidad * pesoTotal);
  let costoTercera = parseInt(pesoTercera * precioTercera);
  costoTotal += costoTercera;
}
console.log("El precio de la compra fue de: ", parseInt(costoTotal));
