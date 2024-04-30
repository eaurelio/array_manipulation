// Interseção de arrays
/**
 * Função chamada `getArrayIntersection` que recebe dois arrays como argumentos e retorna um novo array contendo os elementos comuns entre os dois arrays.
 * Função chamada `getArrayUnion` que recebe dois arrays como argumentos e retorna um novo array contendo todos os elementos únicos de ambos os arrays, sem duplicidades.
 */

function getArrayIntersection(array1, array2) {
  return array1.filter(value => array2.includes(value));
}

function getArrayUnion(array1, array2) {
  return [...new Set([...array1, ...array2])];
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const intersection = getArrayIntersection(array1, array2);
console.log('Intersection:', intersection);

const union = getArrayUnion(array1, array2);
console.log('Union:', union);