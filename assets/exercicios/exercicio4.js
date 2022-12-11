/*
Calcule o preço do imóvel
- m2 = 3.000
- Se tiver 1 quarto, o m2 é 1x
- Se tiver 2 quartos, o m2 é 1.2x
- Se tiver 3 quartos, o m2 é 1.5x
Uso da função:
*/

function calcularImovel(m, quartos) {
    let m2 = 3000;
    let preco;
    switch (quartos) {
        case 1:
            preco = (m2 * 1) * m;
            break;
        case 2:
            preco = (m2 * 1.2) * m;
            break;
        case 3: 
            preco = (m2 * 1.5)* m;
            break;
    }

    return preco;
}

let metragem = 120;
let quartos = 3;
let preco= calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);