let cart = [];
let modalQntde = 1; 
const sel = (seletor) => document.querySelector(seletor);
const sels = (seletor) => document.querySelectorAll(seletor);
let modalKey = 0;

pizzaJson.map((item, index) => {
    let pizzaItem = sel('.models .pizza-item').cloneNode(true);

    const pis = (seletor) => pizzaItem.querySelector(seletor); // pis = pizza item selector

    pizzaItem.setAttribute('data-key', index);
    pis('.pizza-item--img img').src = item.img;
    pis('.pizza-item--desc').innerHTML = item.description;
    pis('.pizza-item--name').innerHTML = item.name;
    pis('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pis('.pizza-item a').addEventListener('click', (e) => {
        e.preventDefault();
        key = e.target.closest('.pizza-item').getAttribute('data-key');
        modalQntde = 1;
        modalKey = key;

        sel('.pizzaBig img').src = pizzaJson[key].img;
        sel('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        sel('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        sel('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
        sel('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        sel('.pizzaInfo--size.selected').classList.remove('selected'); // o .selected sem espaço garante que será selecionado soemente o pizzaInfo--size que contenha o .selected, pois com espaço iria se referir aos filhos que possuem .selected.
        sels('.pizzaInfo--size').forEach((size, sizeIndex) => {
            if(sizeIndex == 2) {
                size.classList.add('selected');
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex]; 
        })

        sel('.pizzaInfo--qt').innerHTML = modalQntde;

        sel('.pizzaWindowArea').style.opacity = 0;
        sel('.pizzaWindowArea').style.display = 'flex';
        setInterval(()=>{
            sel('.pizzaWindowArea').style.opacity = 1;
        }, 200);
    })

    sel('.pizza-area').append(pizzaItem);
});

// eventos do MODAL
function closeModal() {
    sel('.pizzaWindowArea').style.opacity = 0;
    setTimeout(() => {
        sel('.pizzaWindowArea').style.display = 'none';
    }, 500);
    
}
sels('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) =>{
    item.addEventListener('click', closeModal);
});
sel('.pizzaInfo--qtmenos').addEventListener('click', () => {
    if (modalQntde > 1) {
        modalQntde--;
        sel('.pizzaInfo--qt').innerHTML = modalQntde;
    }
});
sel('.pizzaInfo--qtmais').addEventListener('click', ()=> {
    modalQntde++;
    sel('.pizzaInfo--qt').innerHTML = modalQntde;
});
sels('.pizzaInfo--size').forEach((size, sizeIndex)=>{
    size.addEventListener('click', (e)=> {
        sel('.pizzaInfo--size.selected').classList.remove('selected');
        size.classList.add('selected');
    });
});
sel('.pizzaInfo--addButton').addEventListener('click', () => {
    let size = parseInt(sel('.pizzaInfo--size.selected').getAttribute('data-key'));

    let identifier = pizzaJson[modalKey].id+'&'+size;

    let check = cart.findIndex((item)=> item.identifier == identifier);

    if (check > -1) {
        cart[check].qntde += modalQntde;
    } else { 
        cart.push({
            identifier,
            id:pizzaJson[modalKey].id,
            size,
            qntde:modalQntde    
        });
    }

    closeModal();
    updateCart();
});

sel('.menu-openner').addEventListener('click', () => {
    if (cart.length > 0) {
        sel('aside').style.left = 0;
    }
});
sel('.menu-closer').addEventListener('click', ()=>{
    sel('aside').style.left = '100vw';
});

function updateCart() {
    sel('.menu-openner span').innerHTML = cart.length;
    if(cart.length > 0) {
        sel('aside').classList.add('show');
        sel('.cart').innerHTML = '';

        let subtotal = 0;
        let desconto = 0;
        let total = 0;

        for (let i in cart) {
            let pizzaItem = pizzaJson.find((item) =>item.id == cart[i].id);
            
            subtotal += pizzaItem.price * cart[i].qntde;

            let cartItem = sel('.models .cart--item').cloneNode(true);

            let pizzaSizeName;
            switch(cart[i].size) {
                case 0:
                    pizzaSizeName = 'P';
                    break;
                case 1:
                    pizzaSizeName = 'M';
                    break;
                case 2: 
                    pizzaSizeName = 'G';
                    break;
            }
            let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`;

            cartItem.querySelector('img').src = pizzaItem.img;
            cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName;
            cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qntde;
            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', ()=> {
                if(cart[i].qntde > 1) {
                    cart[i].qntde--;
                } else {
                    cart.splice(i, 1);
                }
                updateCart();
            });
            cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
                cart[i].qntde++;
                updateCart();
            });

            sel('.cart').append(cartItem);
        }

        desconto = subtotal * 0.1;
        total = subtotal - desconto;

        sel('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`;
        sel('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`;
        sel('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`;

    } else {
        sel('aside').classList.remove('show');
        sel('aside').style.left = '100vw';
    }
}   