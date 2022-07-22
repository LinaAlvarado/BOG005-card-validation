const validator = {
    isValid: (numTarjeta) => {
      let convertir = numTarjeta.split('').reverse(); //Crear una variable para pasar los números de tarjeta ingresados en un arreglo. Con split se divide el arreglo y con reverse los números se dan vuelta
      let suma = 0;
      let num = 0;
      for (let j = 0; j < convertir.length; j++) { //Se asigna la posición 0 al string y que recorra el string tomando las posiciones impares.
        if (j % 2 === 1) {
          num = Number(convertir[j]) * 2; //Se multiplican los números en posición impar x2
          if (num >= 10) {
            num = (num - 9); // si el resultado es >=10 se le resta 9 dando el resultado de la suma de ambos digitos
          }
        } else {
          num = Number(convertir[j]);
        }
        suma += num; // sumar los múmeros finales 
      }
      return suma % 10 === 0 ? true : false; // si el residuo división de 10 del numero final es 0 retorna true (o válida) si es otro número retorna false (o inválida)
    },
    // ENMASCARAR NÚMEROS DE LA TARJETA 
    maskify: (numTarjeta) => {
      let numMaskify = numTarjeta;  
      let numFinal = "";
      for (let i = 0; i < numMaskify.length; i++) { // se cuentan las cifras ingresadas y se enmascaran excepto las 4 últimas 
        if (i < numMaskify.length - 4) {
          numFinal = numFinal + "#";
        } else {
          numFinal = numFinal + numMaskify[i];
        }
      }
      return numFinal;
    }
  }
  
  export default validator;

