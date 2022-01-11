class Card {
    constructor(unlocked, name, desc, smallDesc, hp, attacks, rarity, rWeight) {
        this.unlocked = unlocked
        this.name = name
        this.desc = desc
        this.smallDesc = smallDesc
        this.hp = hp
        this.attacks = attacks
        this.rarity = rarity
        this.rWeight = rWeight //0 = no chance //1 = VOID //5 = Mythical //20 = Rare //80 = Common //80+ = Nothing
    }
}
let cardsData = []
//commons
cardsData[0] = new Card(true,`gwaling`, `A baby gwa. You start with this card!`, `Single-Target, Summoning`, 96, `gwaling Roll: Deal 10 DMG to target.<br>gwaling Cry: Summon another gwaling. 3 turn cooldown.`, `Common`, 0)
//rares
cardsData[1] = new Card(true,`gwasanta`, `A gwa wearing a Santa hat. Strange.`, `Single-Target, Healing`,96, `Angry Gift: Deal 5 DMG to target for every allie card defeated.<br>Loving Gift: Destroy gwasanta but Revive a defeated allie card. This attack starts on a 5 card cooldown.`, `Rare`, 20)
//mythicals
cardsData[2] = new Card(true,`gwapog`, `A gwa that looks ready to scream.`, `Multi-Target, Support, Effects`, 96, `gwapog Scream: Deal 5 DMG to all enemy cards<br>gwapog Roar: Apply <b>Stunned</b> to all enemy cards. This attack has a 2 turn cooldown and starts on cooldown.<br>gwapog Pog: Apply <b>DMG Boost</b> to all allie cards for 5 turns. gwapog is stunned for 2 turns after using this.`, `Mythical`, 5)
//VOID
cardsData[3] = new Card(true,`ungwa`, `The antithesis of gwa. It's motives are unknown but it seems to hate gwas.`, `Multi-Target, Single-Target, Effects, Ability`,96, `Anti-gwa: Apply <b>DMG Reduced</b> to all enemy cards for 5 turns. ungwa is <b>Target Locked</b> for 3 turns after using this.<br>Rain of Pain: Apply <b>Poison</b> to all enemy cards for the entirety of the battle. This attack starts on a 10 turn cooldown.<br>ungwa Assault: Deal 20 DMG to target.<br>Destroy all gwa: Deal 10 DMG to target. This attack is repeated based on how many allie cards have been defeated. This attack has a 10 turn cooldown and starts on cooldown. This attack halves ungwa's HP.<br>ABILITY: Rage: ungwa's cooldowns are reduced by 1 each time an allie card is defeated.`, `VOID`, 1)

