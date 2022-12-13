function gravidade() {
    let gravidade = 9.81;
    console.log(`A gravidade da terra é: ${gravidade}`);
}

function exponenciaQuadrada(num) {
    exp = num * num;
    console.log(`${num} elevado a si mesmo é igual à ${exp}`);
    return `A raiz quadrada de ${exp} é ${num}`;
}

console.log(exponenciaQuadrada(8678));

function maiorDeIdade (idade) {
    if (idade >= 18) return true; else return false; 
}

let idade = 45;
let verificacao = maiorDeIdade(idade);

console.log(verificacao);


const nome = sob => `Santhiago ${sob}`;

console.log(nome('Monteiro Pereira'));

let cont = 0;

function add() {
    cont++; //muito pika tá
}

add();
add();

console.log(cont); 

function addSquares(a, b) {
    const square = (x) => x * x;

    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}

console.log(addSquares(2, 5));


let produto = ['carne de boi',['perdigão', '10/05/2023','R$45.00']];
let caracteristicas = produto[1];
let marca = caracteristicas[0];
let vencimento = caracteristicas[1];
let preco = caracteristicas[2];

console.log(`A ${produto[0]} é da marca ${marca}, tem o vencimento no dia ${vencimento} e custa ${preco}`);

caracteristicas.pop();
caracteristicas.shift();
caracteristicas.push('R$ 25.00');
preco = caracteristicas[1];
let size = caracteristicas.length;

console.log(`removidos primeiro e ultimo index de caracteristicas[], adicionado novo preço de ${preco}. Tamanho do array é de ${size}`)

let vayne = {
    tipo: 'ranged',
    role: 'adc',
    status: {
        vida: 550,
        ad: 77,
        mana: 560
    }
}

console.log(`A campeã Vayne é do tipo ${vayne.tipo}, sua função é de ${vayne.role}, sua vida base é de ${vayne.status.vida} e seu ad inicial é de ${vayne.status.ad}`);

let personagem = {
    nome: 'Santhiago',
    idade: 25,
    motos: [
        {modelo: 'Yamaha R6', cor: 'Azul', ano: 2024},
        {modelo: 'Honda Hornet', cor: 'Preta', ano: 2025}
    ]
}

console.log(`O ${personagem.nome} possui uma ${personagem.motos[0].modelo} do ano ${personagem.motos[0].ano} ${personagem.motos[0].cor}, 
e uma ${personagem.motos[1].modelo} do ano ${personagem.motos[1].ano} ${personagem.motos[1].cor}`)

let eu = {
    nome: 'Santhiago',
    sobrenome: 'Monteiro',
    idade: 20,
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

console.log(eu.nomeCompleto());

for (let i = 0; i <= 10; i++){
    console.log('Número ' + i);
}

let champions = ['EZ', 'Morde', 'GP', 'MF', 'TF'];
console.log(`Campeões com nomes abreviados: ${champions.join(', ')}`);


let carros = [
    {modelo: 'volo', ano: 1923},
    {modelo: 'tesle', ano: 2023}
]

let carros2 = [
    {modelo: 'volo', ano: 1923},
    {modelo: 'tesle', ano: 2023}
]
carros.sort((a, b) => a.ano - b.ano);

console.log('Operação (a, b) => a.ano - b.ano irá organizar os anos de forma crescente:')
console.log(carros);

carros2.sort((a, b) => b.ano - a.ano);

console.log('Já a operação (a, b) => b.ano - a.ano irá organizar os anos de forma decrescente:')
console.log(carros2);

let frutas = ['Banana', 'Maçã', 'Uva', 'Pocã', 'Acerola'];

let bigFrutas = frutas.filter((fruta) => fruta.length > 4);
console.log('Frutas cadastradas com mais de 4 letras:')
console.log(bigFrutas);

let oFrutas = frutas.filter((fruta) => fruta.includes('o'));
console.log('Frutas que contém a letra O:');
console.log(oFrutas);