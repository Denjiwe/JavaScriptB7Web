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

    // let req = await fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         title: 'Título de teste',
    //         body:'Mensagem de teste',
    //         userId: 4
    //     }),
    //     headers: {
    //         'Content-Type' : 'application/json'
    //     }
    // });  COM POST

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



function exibir() {
    let file = document.getElementById('arquivo').files[0];

    // // SÍNCRONO
    // let img = document.createElement('img');
    // img.src = URL.createObjectURL(file);
    // img.width = 200;

    // document.getElementById('area').appendChild(img);

    // ASSÍNCRONO
    let reader = new FileReader();
    
    reader.onloadend = function() {
        let img = document.createElement('img');
        img.src = reader.result;
        img.width = 200;

        document.getElementById('area').appendChild(img);
    }

    reader.readAsDataURL(file);
}

async function enviar() {
    let file = document.getElementById('arquivo').files[0];
    
    let body = new FormData();
    body.append('title', 'Testando');
    body.append('arquivo', file);
    
    let req = await fetch ('www.stiedeteste.com.br', {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }) 
}