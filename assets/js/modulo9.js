// let pessoa = JSON.parse('{"nome":"Santhiago", "idade": 90}'); //JSON chegará dessa maneira
// console.log(pessoa.nome);

// function saudacao(name) {
//     alert('Olá ' + name);
// } 
    
// function digitarNome(callback) {
//     var name = prompt('Por favor, digite seu nome.');
//     callback(name);
// }

// digitarNome(saudacao);

// //criando promise
// function pegarTemperatura() {
//     return new Promise(function(resolve, reject) {
//         console.log("pegando temperatura...");

//         setTimeout(() => {
//             resolve('36º');
//         }, 2000);
//     })
// }

// //usando promise
// console.log('código antes!');
// let promise = pegarTemperatura();

// console.log('codigo durante!');
// promise.then((resultado) => {
//     console.log('Temperatura: '+ resultado);
// });
// promise.catch((erro)=>{
//     console.log('Deu erro!');
// });

// console.log('codigo depois!');

async function loadPosts() {
    document.getElementById('posts').innerHTML = 'Carregando...';

    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await req.json();
    montaPosts(json);

    // fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then(json => montaPosts(json));
    //     //.catch(erro => console.log(erro)); dá erro, pois pede um try, não entendi!
}

function montaPosts(lista) {
    let html = '';

    for ( let i in lista) {
        html += '<h3>'+lista[i].title+'</h3>';
        html += lista[i].body+'<br>';
        html += '<hr>';
    }

    document.getElementById('posts').innerHTML = html;
}
