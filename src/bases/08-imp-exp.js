// import { heroes } from '../data/heroes';
// import { heroes } from '../data/heroes';

// Cerrar el otro archivo para que aparezca la ayuda de importacion
// import { heroes } from '../data/heroes';
import heroes, { owners } from '../data/heroes';

// const getHeroeById = (id) => {
//   return heroes.find((heroe) => {
//     if (heroe.id === id) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// }

// find
const getHeroeById = (id) => heroes.find(heroe => heroe.id === id);
console.log(getHeroeById(2));

// filter
const getHeroesByOwner = (owner) => heroes.filter(heroe => heroe.owner.toUpperCase() === owner.toUpperCase());
console.log(getHeroesByOwner('DC'));
console.log(getHeroesByOwner('marvel'));

console.log(owners);