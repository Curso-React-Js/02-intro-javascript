
const personajes = ['Goku', 'Vegeta', 'Trunks'];
// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

// Ignora el primero y segundo elemento
const [ , , p3 ] = personajes;
console.log(p3);

console.warn("");
const retornaArreglo = () => {
  return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);

console.warn("");
const usesStates = (valor) => {
  return [valor, () => { console.log('Hola Mundo'); }]
}

const [ nombre, setNombre ] = usesStates('Goku');
console.log(nombre);
setNombre();
// arr[1]();
