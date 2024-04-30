/**
 * Função chamada `customFilterUnique` que recebe um array e uma função de retorno de chamada como argumentos.
 * A função `customFilterUnique` deve filtrar o array usando a função de retorno de chamada para determinar a exclusividade.
 * A matriz resultante deve conter apenas elementos exclusivos baseados na lógica do retorno de chamada.
 * Use a função `customFilterUnique` para filtrar uma matriz de objetos com base em uma propriedade específica e retornar apenas objetos únicos.
 * */

function customFilterUnique(array, callback) {
  const counts = {};
  
  array.forEach(item => {
    const value = callback(item);
    counts[value] = (counts[value] || 0) + 1;
  });
  
  const uniqueValues = array.filter(item => {
    const value = callback(item);
    return counts[value] === 1;
  });
  
  return uniqueValues;
}

// Using array of objects
const person = [
  { id: 1, name: 'Aleksandra' }, // Duplicated
  { id: 2, name: 'Wojciech' }, // Duplicated
  { id: 3, name: 'Katarzyna' },
  { id: 4, name: 'Jakub' },
  { id: 2, name: 'Wojciech' }, // Duplicated
  { id: 5, name: 'Zofia' },
  { id: 6, name: 'Mikołaj' },
  { id: 7, name: 'Anna' },
  { id: 1, name: 'Aleksandra' }, // Duplicated
  { id: 8, name: 'Tomasz' }
];

const uniqueObjects = customFilterUnique(person, (item) => item.id);
console.log(uniqueObjects);


// Using array of numbers
const numbers = [1,1,2,3,3,4,5,6,6,6,7,8,9]

const uniqueNumbers = customFilterUnique(numbers, (el) => el)
console.log(uniqueNumbers)