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
cardsData[0] = new Card(true,`gwaling`, `A baby gwa. You start with this card!`, 96, `gwaling Roll: Deal 10 DMG to target.<br>gwaling Cry: Summon another gwaling. 3 turn cooldown.`, `Common`)
cardsData[1] = new Card(false,`gwa2`, `your unusual gwa`, 69, `SQUID GAMES!!!: un-destroy everything and force gwa to go to SQUID AGMES`, `PROTOTYPE`)