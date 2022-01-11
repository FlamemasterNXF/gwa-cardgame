class Card {
    constructor(unlocked, name, desc, hp, attacks, rarity) {
        this.unlocked = unlocked
        this.name = name
        this.desc = desc
        this.hp = hp
        this.attacks = attacks
        this.rarity = rarity
    }
}
let cardsData = []
cardsData[0] = new Card(true,`gwa`, `your usual gwa`, 96, `trolled: destroy everything`, `PROTOTYPE`)
cardsData[1] = new Card(false,`gwa2`, `your unusual gwa`, 69, `SQUID GAMES!!!: un-destroy everything and force gwa to go to SQUID AGMES`, `PROTOTYPE`)