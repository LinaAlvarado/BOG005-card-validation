import validator from './validator.js';

const botonPagar = document.getElementById("botonPagar");

botonPagar.addEventListener("click", () => { // instrucciones al dar click al boton 
  const numTarjeta = document.getElementById("numTarjeta");
  const isValid = validator.isValid(numTarjeta.value);
  const maskify = validator.maskify(numTarjeta.value);
  console.log(maskify);

  // ALERTAS
  if (isValid === true) {
    alert("La tarjeta de crédito " + maskify + "  es válida"); 
  } else {
    alert("La tarjeta de crédito " + maskify + " no es válida");
  }





});

console.log(validator);






















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

