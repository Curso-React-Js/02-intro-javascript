import { getHeroeById, getHeroesByOwner } from './bases/08-imp-exp';

// const promesa = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     // console.log('2 segundos después');
//     // resolve();

//     const heroe = getHeroeById(2);
//     resolve(heroe);
//     // reject('No se pudo encontrar el heroe');

//   }, 2000);

// });

// promesa.then((heroe) => {
//   console.log('heroe', heroe);
// })
// .catch(console.warn);


const getHeroeByIdAsync = (id) => {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const heroe = getHeroeById(id);

      if (heroe) {
        resolve(heroe);
      } else {
        reject('No se pudo encontrar el heroe');
      }

    }, 2000);
  
  });

}

getHeroeByIdAsync(3)
    // .then(heroe => console.log('Heroe', heroe))
    .then(console.log)
    .catch(console.warn);