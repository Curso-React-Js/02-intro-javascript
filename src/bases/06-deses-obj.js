
// Desestructuración
// Asignación desestructurante

const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
  rango: 'Soldado'
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

// Extra lo que tiene el objeto
const { nombre: name, edad, clave } = persona;

console.warn("");
console.log(name);
console.log(edad);
console.log(clave);

console.warn("");

const retornaPersona = ({ clave, nombre, edad, rango = 'Capitán' }) => {
// const { nombre, edad, clave } = persona;

  // console.log(edad, clave, nombre);
  console.log(nombre, edad, rango);
  console.warn("");

  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1234,
      lng: -12.6545
    }
  }
}

const { nombreClave, anios, latlng: { lat, lng } } = retornaPersona(persona);
console.log(nombreClave, anios);

console.log(lat, lng);

