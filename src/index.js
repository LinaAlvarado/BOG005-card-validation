import validator from './validator.js';
console.log(validator);

let numeroTarjeta="";

function captura(){
numeroTarjeta = document.getElementById("numTarjeta").value;
let numArray= numeroTarjeta.split('').reverse();
let suma = 0;
let num = 0;
for (let i= 0; i< numArray.length; i++){
  if (i % 2 === 1){
    num = Number( numArray[i] * 2);
    if (num >= 10){
      num = (num-10) + 1;
    }
  } else{
    num = Number(numArray[i]);
  }
} suma += num;
}
suma % 10 === 0? true : false;
return (suma)
}

let botonPagar = document.getElementById("botonPagar")
botonPagar.addEventListener('click',captura);

