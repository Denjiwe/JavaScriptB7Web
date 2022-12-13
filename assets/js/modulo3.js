let titulos = document.getElementsByTagName("h1");

let primeiro = document.querySelector("#kkkk ul li");
console.log(primeiro);

function clicouOn() {
    console.log('Clicou no botão Onclick');
}

let botao = document.querySelector("#btnEventListener");

botao.addEventListener("click", clicouEvent); 
// não deve colocar (), pois irá fazer a chamada dda função independentemente 
// do clique e depois não irá funcionar

function clicouEvent() {
    console.log('Clicou no botão Event Listener');

    const li = document.querySelector("ul").children[1];
    console.log(li);
    li.innerHTML += "<li>Clicou!</li>";

    const elem = document.createElement('li');
    elem.innerHTML = 'Novo elemento!';
    li.appendChild(elem);

    const ul = document.querySelector("ul");
    newUl = document.createElement("ul");

    for (i = 0; i < 5; i++) {
        newLi = document.createElement("li");
        newLi.innerHTML = "Item novo "+ (i + 1);   
        newUl.append(newLi);
    }

    ul.after(newUl);
}






