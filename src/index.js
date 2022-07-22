import validator from './validator.js';

const botonPagar = document.getElementById("botonPagar");

// instrucciones al dar click al boton 
botonPagar.addEventListener("click", () => { 
const numTarjeta = document.getElementById("numTarjeta");
const isValid = validator.isValid(numTarjeta.value);
const maskify = validator.maskify(numTarjeta.value);

let mensaje;
// ALERTAS
if (isValid === true) {
   mensaje = "La tarjeta de crédito " + maskify + "  es válida";
   
   
    // alert("La tarjeta de crédito " + maskify + "  es válida"); 
} else {
    mensaje="La tarjeta de crédito " + maskify + " no es válida";
   
    // alert("La tarjeta de crédito " + maskify + " no es válida");
}
document.getElementById("estadoTarjeta").innerHTML=mensaje;
});























// // import validator from './validator.js';
// // console.log(validator);

// let numeroTarjeta="";
// let num = 0;
// function captura(){
// numeroTarjeta = document.getElementById("numTarjeta").value.split('').reverse();
// for (let i= 0; i< numeroTarjeta.length; i++){
//   if (i % 2 === 1)
//     num = Number( numeroTarjeta[i] * 2);
//   }
// console.log(numeroTarjeta)
// console.log(num)
// }



// let botonPagar = document.getElementById("botonPagar")
// botonPagar.addEventListener('click',captura);

