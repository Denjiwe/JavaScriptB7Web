// let kkkk = "salve mano";

// console.log (kkkk.indexOf('mano'));

// let yay = kkkk.substring(5, 10);

// console.log (yay);

// let amem = kkkk.replace('mano', 'amem');

// console.log(amem.charAt(6) + ' ' + amem);

// let numero = 2313.231223;

// numero.toFixed(4);

// console.log(numero);

// let array = ['tazts', 'eodas', 'fiuans'];

// console.log(array.toString());

// let array2 = ['lpslad', 'difasd', 'ucnau'];

// let array3 = array.concat(array2);

// console.log(array3);

// array3.sort();

// array3.splice(-1, 1);

// console.log(array3);

// let vasco = [2,65,12,86];

// let vasco2 = vasco.map(function(item) {
//     return item * 2;
// })

// console.log(vasco2);

// let vasco3 = [
//     {id:1, nome:'santriga'},
//     {id:2, nome:'sasdsdfvs'},
//     {id:3, nome:'mauwdoa'},
// ];

// let vasco4 = vasco3.find(function (item) {
//     return (item.id == 3) ? true : false;
// });

// console.log(vasco4);

let timer;

function comecar() {
    timer = setInterval(exibeHora, 1000);
}

function parar() {
    clearInterval(timer);
}

function exibeHora() {
    let t = new Date();
    let h = t.getHours();
    let m = t.getMinutes();
    let s = t.getSeconds();

    let hour = h+':'+m+':'+s;
    
    document.querySelector(".hours").innerHTML = hour;
}

let timeout
function rodar() {
    timeout = setTimeout(mostrar, 1500);
}

function parou() {
    clearTimeout(timeout);
}

function mostrar() {
    document.querySelector(".mostrar").innerHTML = 'Mostrei!!!';
}

let pessoa = {
    nome: 'Santhiago',
    sobrenome: 'Pereira',
    idade: 90,
    social: {
        discord: 'Ogaihtnas',
        github: 'Denjiwe'
    }
}

let {nome, sobrenome, idade, social:{github}} = pessoa;

console.log(`${nome} ${sobrenome}, ${idade} ${github}`);

let info = {
    ...pessoa, // operador spread
    emprego: 'Dev',
    sexo: 'Masculino'
}

let {nome:novoNome, emprego, sexo} = info;

console.log(novoNome, emprego, sexo);

function adicionar(nomes, ...novosNomes) {
    array = [...nomes, ...novosNomes];
    return array;
}

let nomes = ['santhiago', 'ruan'];

let outros = adicionar(nomes, 'ana', 'paula', 'brenda', 'carlos');

console.log(outros);

let cartao = '3412674586782342';

let lastDigits = cartao.slice(-4);

let cartaoMascarado = lastDigits.padStart(16, '*')

console.log('Esse é o seu cartão? '+cartaoMascarado);