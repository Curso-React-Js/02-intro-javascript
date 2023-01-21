

// Funciones en JS
function saludar(nombre) {
  return `Hola, ${ nombre }`;
}

// saludar = 30;

const saludar1 = function(nombre) {
  return `Hola, ${ nombre }`;
}

const saludar2 = (nombre) => {
  return `Hola, ${ nombre }`;
}

const saludar3 = (nombre) => `Hola, ${ nombre }`;

const saludar4 = () => `Hola Mundo`;

console.log(saludar3('Angel'));

// El mismo resultado con () => ({})
const getUser = () => {
  return {
    uid: 'ABC123',
    username: 'EL_developer123'
  }
}

// retornar objeto implicito
const getUser1 = () => ({
  uid: 'ABC123',
  username: 'EL_developer123'
});

console.log(getUser());
console.log(getUser1());

// Ejercicio a transformar
function getUsuarioActivo(nombre) {
  return {
    uid: 'ABC465',
    username: nombre,
  }
}

const usuarioActivo = getUsuarioActivo('Luis');
console.log(usuarioActivo);

// Ejercicio transformado
const usuarioActivo1 = (nombre) => ({
  uid: 'ABC465',
  username: nombre,
});

console.log(usuarioActivo1('Angel'));

