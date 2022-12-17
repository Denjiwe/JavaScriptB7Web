class Adc {

    kills = 0;

    _vida = 750;

    static role = 'adc'

    constructor(ad, lvl, gold, itemPrincipal) {
        this.ad = ad;
        this.lvl = lvl;
        this.gold = gold;
        this.itemPrincipal = itemPrincipal;
    }

    takeAKill() {
        this.kills++
        this.lvl++
        this.gold += 300;
    }

    set vida(newVida) {
        this._vida = newVida; 
    }

    get vida(){
        return this._vida;
    }
}

class Vayne extends Adc {

    rColldown = 60;

    constructor(nick, ad, lvl, gold, itemPrincipal) {
        super(ad, lvl, gold, itemPrincipal);
        this.nick = nick;
    }

    saySpecs() {
        console.log(`A ${this.nick} tem ${this.ad} de dano, está level ${this.lvl}, 
        possui ${this.gold} de ouro e seu item principal é ${this.itemPrincipal} e possui 
        ${this.kills} kills, sua role ${Adc.role}`);
    }
}

function createVayne(nick, ad, lvl, gold, itemPrincipal, _vida, kills) {
    let v = new Vayne(nick, ad, lvl, gold, itemPrincipal);
    v._vida = _vida;
    v.kills = kills;

    return v;
}

let v1 = createVayne('Projeto: Vayne', 600, 18, 2500, 'Kraken', 3222, 5);
let v2 = new Vayne ('Vayne Sentinela', 520, 18, 4530, 'Arco-escudo');

v1.saySpecs();
v2.saySpecs();

v1.takeAKill();
v1.takeAKill();
console.log(`Agora a ${v1.nick} tem ${v1.ad} de dano, está level ${v1.lvl}, possui ${v1.gold} de ouro e seu item principal é ${v1.itemPrincipal} e possui ${v1.kills} kills`)

v1.saySpecs();

v2.vida = 2000;

console.log(`${v1.nick} possui agora ${v1.vida} de vida`);
