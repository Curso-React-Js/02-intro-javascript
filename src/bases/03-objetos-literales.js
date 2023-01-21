
// Objeto literal conocidos como diccionarios
const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 5251515,
    lat: 14.5515,
    lng: 34.92262626,
  },
};

// console.table({persona});
// console.table(persona);

console.log(persona);

// Copiamos la referencia en memoria de la persona
const persona2 = { ...persona }; // clone del objeto
persona2.nombre = 'Peter'; // Falso positivo

console.log(persona2); // objeto mutado
console.log(persona);
