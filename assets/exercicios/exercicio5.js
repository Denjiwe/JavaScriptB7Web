/*
Crie uma função que valide usuário e senha.
Usuário correto: pedro
Senha correta: 123
*/

//Uso da função:

function validar(usuario, senha) {
    if (usuario == 'pedro' && senha == '123') {
        console.log('Usuário e senha corretos');
        return true;
    } else if (usuario != 'pedro' && senha == '123'){
        console.log('Usuário incorreto');
        return false;
    } else if ((usuario == 'pedro' && senha != '123')) {
        console.log('Senha incorreta');
        return false;
    } else if ((usuario != 'pedro' && senha != '123')) {
        console.log('Usuário e senha incorretos');
        return false;
    }
}

let usuario = 'pedros';
let senha = '1235';
let validacao = validar(usuario, senha);
if (validacao) {
    console.log('Acesso concedido');
} else {
    console.log('Acesso NEGADO!');
}