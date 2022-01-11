class Card {
    constructor(name, desc, hp, attacks, rarity) {
        this.name = name
        this.desc = desc
        this.hp = hp
        this.attacks = attacks
        this.rarity = rarity
    }
}
let cardsData = []
cardsData[0] = new Card(`gwa`, `your usual gwa`, 96, `trolled: destroy everything`, `Rare`)
cardsData[1] = new Card(`gwa2`, `your unusual gwa`, 69, `SQUID GAMES!!!: un-destroy everything and force gwa to go to SQUID AGMES`, `Super Rare`)