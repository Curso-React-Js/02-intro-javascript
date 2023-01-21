
// Variables y Constantes
const nombre = 'Angel';
const apellido = 'Flores';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

// var No se debe de usar...
if (true) {
  // Esta dentro del scope
  let valorDado = 6;
  const nombre = 'Peter';

  console.log({ valorDado }); // 6
  console.log({ nombre });
}

console.log(valorDado); // 4
