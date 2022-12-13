/*
let nome = "Santhiago"; // string
let idade = 20; // number
let cidade = "Umuarama"; 
let estado = "Paraná";
let logado = true; // boolean
let lista = ["ovo", "farinha", "corante", "açucar"]; // array
let nomeCompleto = {nome: "libatea", idade: 324, sobrenome:"letacotapa"} // object

console.log(nome);
console.log(idade);
console.log(cidade);
console.log(estado);
*/

let nome = "Santhiago";
let sobrenome = "Monteiro Pereira";

let nomeCompleto = `Usuário: ${nome} ${sobrenome}`;
console.log(nomeCompleto);

let idade = 20; 

if (idade >= 18){
    console.log("MAIOR de idade");
} else {
    console.log("MENOR de idade");
}
if (idade < 18) {
    console.log("Você é uma criança")
} else if (idade >= 18 && idade <= 60) {
    console.log("Você é adulto");
} else if (idade < 60){
    console.log("Você é um idoso");
}

let verificacao = idade > 18;

if (verificacao) {
    console.log("PASSOU");
} else {
    console.log("NÃO PASSOU");
}

let profession = "policial";
console.log("Profissão: " + profession);

switch (profession) {
    case 'bombeiro':
        console.log("Sua camisa será VERMELHA");
        break;
    case 'policial':
        console.log("Sua camisa será AZUL");
        break;
    case 'fiscal':
        console.log("Sua camisa será VERDE");
        break;
    default:
        console.log("Sua camisa será PRETA");
}