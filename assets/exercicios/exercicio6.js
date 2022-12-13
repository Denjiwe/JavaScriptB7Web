// 1. No array abaixo, qual o número que pega a Ferrai?
let carros = ['BMW', 'Ferrari', 'Mercedes'];
let x = carros[1];
console.log('1. ' + x); 

// 2. Troque a Ferrari por Audi
carros[1]= 'Audi';

console.log('2. Lista com Audi');
console.log(carros);

// 3. Adicione o Volvo a lista
carros.push('Volvo');

console.log('3. Lista com Volvo');
console.log(carros);

// 4. Exiba quantos itens tem no array
let tamanho = carros.length;

console.log(`4. Tamanho do array: ${tamanho}`);