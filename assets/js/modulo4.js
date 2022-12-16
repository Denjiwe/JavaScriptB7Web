class Vayne {

    kills = 0;

    _vida = 750;

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

let v1 = new Vayne (600, 18, 2500, 'Kraken');
let v2 = new Vayne (520, 18, 4530, 'Arco-escudo');

console.log(`A Vayne 1 tem ${v1.ad} de dano, está level ${v1.lvl}, possui ${v1.gold} de ouro e seu item principal é ${v1.itemPrincipal} e possui ${v1.kills} kills`);
v1.takeAKill();
v1.takeAKill();
console.log(`Agora a Vayne 1 tem ${v1.ad} de dano, está level ${v1.lvl}, possui ${v1.gold} de ouro e seu item principal é ${v1.itemPrincipal} e possui ${v1.kills} kills`)

console.log(`A Vayne 2 tem ${v2.ad} de dano, está level ${v2.lvl}, possui ${v2.gold} de ouro e seu item principal é ${v2.itemPrincipal} e possui ${v2.kills} kills`);

v2.vida = 2000;

console.log(`Vayne 2 possui agora ${v2.vida} de vida`);
