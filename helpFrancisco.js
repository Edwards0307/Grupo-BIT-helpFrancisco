// Ingresar el número de calcetines y los colores de los calcetines en un arreglo.
// Crear un diccionario vacío para almacenar la cantidad de calcetines por color.
// Recorrer el arreglo y para cada color:
// Si el color no está en el diccionario, agregarlo con valor 1.
// Si el color está en el diccionario, incrementar en 1 su valor.
// Inicializar la variable pares a cero.
// Para cada valor de cantidad de calcetines por color en el diccionario:
// Dividir la cantidad de calcetines por color entre dos y obtener su parte entera.
// Sumar la parte entera al contador de pares.
// Imprimir el valor de la variable pares.

function helpFrancisco(numOfSocks, colorOfSocks) {
  let peers = 0;
  const colors = {};

  if (typeof numOfSocks !== "number") {
    return "Se esta ingresando un valor diferente a un numero";
  }

if (!Array.isArray(colorOfSocks) || colorOfSocks.some(isNaN)) {
  return "Los colores de calcetines no es un array de numeros";
}

  if (numOfSocks !== colorOfSocks.length) {
    return "Error deben coincidir la cantidad de medias con la cantidad de colores";
  }

  for (let i = 0; i < numOfSocks; i++) {
    const color = colorOfSocks[i];
    if (colors[color]) {
      peers++;
      colors[color] = false;
    } else {
      colors[color] = true;
    }
  }

  return peers;
}

console.log(helpFrancisco(6, [1, 2, 5, 8, 2, 1]));

module.exports = helpFrancisco;
