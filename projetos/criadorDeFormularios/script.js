class Form {

    items = [];
    method = 'GET';

    constructor (container, method, action) {
        this.container = document.querySelector(container);
        this.method = method;
        this.action = action;
    }

    addItem(item){
        this.items.push(item);
    }

    render() {
        let formElement = document.createElement('form');
        formElement.setAttribute = ('method',this.method);
        formElement.setAttribute = ('action', this.action);

        for (let i in this.items) {
            this.items[i].render(formElement);
        }
        this.container.appendChild(formElement);
    } 
}

class Input {
    _type = 'text';
    required = false;

    constructor(name, label) {
        this.name = name;
        this.label= label;
    }

    get type() {
        return this._type;
    }

    set type(t) {
        if (['text', 'password', 'email', 'submit'].includes(t)){
            this._type = t;
        } else {
            throw new Error (`Input "${t}" type não existe`);
        }
    }

    render(formElement){
        let el = document.createElement('input');
        el.type = this.type;
        el.name = this.name;
        el.placeholder = this.label;
        el.required =this.required;

        formElement.appendChild(el);
    }
}

class Botao extends Input {
    constructor(label) {
        super('', label);
        this.type = 'submit';
    }

    render(formElement){
        let el = document.createElement('input');
        el.type = this.type;
        el.value = this.label;

        formElement.appendChild(el);
    }
}

// IMPLEMENTAÇÃO

// FORM
let form = new Form('.content', 'POST', 'https://panda.com.br');


// EMAIL
let email = new Input("email", 'Digite seu e-mail');
email.type = 'email';
email.required = true;
form.addItem(email);

// SENHA
let senha = new Input("password", 'Digite a sua senha');
senha.type= 'password';
senha.required = true;
form.addItem(senha);

// BOTÃO
let button = new Botao('Enviar');
form.addItem(button);

form.render();