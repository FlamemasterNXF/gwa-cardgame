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

//commons
data.cardsData[0] = new Card(true,`gwaling`, `A baby gwa. You start with this card!`, `Single-Target, Summoning`, 96, `gwaling Roll: Deal 5 DMG to target.<br>gwaling Cry: Summon another gwaling. 3 turn cooldown.`, `Common`, 0)
data.cardsData[4] = new Card(false,`gwatoot`, `A gwa with a party popper.`, `Single-Target, Effects`, 96, `POP!: Deal 20 DMG to target.<br>Distraction Pop: Apply <b>Target Lock</b> to gwatoot for 1 turn. This attack has a 2 turn cooldown.`, `Common`, 80)
data.cardsData[6] = new Card(false,`gwafront`, `A gwa with a terrifying stare.`, `Effects, Tank`, 96, `Stare of Doom: Apply <b>Stunned</b> to target for 1 turn. This attack has a 2 turn cooldown.<br>Look into It's Eyes: Apply <b>Target Lock</b> and <b>HP Up</b> to gwafront for 2 turns. This attack has a 4 turn cooldown.`, `Common`, 80)
data.cardsData[10] = new Card(false,`gwawoke`, `A gwa with some crazy looking eyes.`, `Single-Target, Multi-Target`, 96, `Crazed Attack: Deal 10 DMG to target. This attack has a 50% chance to hit a second time, a 25% chance to hit a third, and a 10% chance to hit a fourth.<br>Crazed Spin: Deal 5 DMG to all enemy cards. This attack has a 50% chance to hit again, and a 25% chance to hit a third time. Using this attack lowers gwawoke's HP by 20%. This attack has a 2 turn cooldown.`, `Common`, 80)
data.cardsData[11] = new Card(false,`gwastar`, `A star shaped gwa.`, `Single-Target, Multi-Target, Effects`, 96, `Star Strike: Deal 5 DMG to target.<br>Starboard: Deal 10 DMG to all enemy cards, apply <b>Stunned</b> to a random enemy card for 2 turns, apply <b>DMG Reduced</b> to a random enemy card for 2 turns, and apply <b>HP Down</b> to a random enemy card for 2 turns. This attack has a 4 turn cooldown.`, `Common`, 80)
data.cardsData[12] = new Card(false,`gwablob`, `A... blob mixed with a gwa?`, `Single-Target, Effects`, 96, `Nom: Deal 5 DMG to target.<br>NOM: Deal 10 DMG to target. This attack has a 1 turn cooldown.<br>Nom Nom: Deal 5 DMG to target and increase its lowest cooldown time by 1. This attack has a 3 turn cooldown.`, `Common`, 80)
//rares
data.cardsData[1] = new Card(false,`gwasanta`, `A gwa wearing a Santa hat. Strange.`, `Single-Target, Healing`,96, `Angry Gift: Deal 5 DMG to target for every allie card defeated.<br>Loving Gift: Destroy gwasanta but Revive a defeated allie card. This attack starts on a 5 card cooldown.`, `Rare`, 20)
data.cardsData[5] = new Card(false,`gwagician`, `A gwa with a wand!`, `Single-Target, Multi-target, Effects, Support`,96, `gwa In a Hat: Summon a gwaling. This attack has a 5 turn cooldown.<br>Magic Pokes: Deal 5 DMG to all enemy cards.<br>Targeted gwagic: Apply <b>Target Lock</b> and <b>DMG Reduced</b> to target for 3 turns. This attack has a 5 turn cooldown.<br>Card Trick: Apply <b>Target Locked</b> to an allie card of your choice for 5 turns but also apply <b>Invisible</b> to all other allie cards, including gwagician, for 5 turns. This attack starts on a 3 turn cooldown and can only be used once per battle.`, `Rare`, 20)
data.cardsData[7] = new Card(false,`gwarson`, `A gwa who <b>really</b> likes fire...`, `Single-Target, Multi-target, Effects`,96, `Arson: Deal 10 DMG to target and apply <b>Burning</b> effect for the rest of the battle.<br>Mega Arson: Deal 10 DMG to all targets. This attack has a 3 turn cooldown.<br>ULTIMATE ARSON: Deal 30 DMG to the target. This attack has a 6 turn cooldown and starts on cooldown.`, `Rare`, 20)
data.cardsData[8] = new Card(false,`gwaheart`, `A gwa who just wants everyone to be ok :)`, `No Offense, Healing, Support, Ability`,96, `Loving Magic: Heal an allie card of your choice by 10% of their total HP.<br>Big Heart: Heal all allie cards by 5% of their total HP. This attack has a 2 turn cooldown.<br>Cleanse: Remove all negative effects from an allie card of your choice. This attack has a 3 turn cooldown.<br>ABILITY: Protect to The End: When gwaheart is defeated heal all allie cards by 15% of their total HP.`, `Rare`, 20)
//mythicals
data.cardsData[2] = new Card(false,`gwapog`, `A gwa that looks ready to scream.`, `Multi-Target, Support, Effects`, 96, `gwapog Scream: Deal 5 DMG to all enemy cards<br>gwapog Roar: Apply <b>Stunned</b> to all enemy cards for 2 turns. This attack has a 3 turn cooldown and starts on cooldown.<br>gwapog Pog: Apply <b>DMG Boost</b> to all allie cards for 5 turns. gwapog is stunned for 2 turns after using this.`, `Mythical`, 5)
data.cardsData[9] = new Card(false,`gwawokeyou`, `A gwa that is pointing at you very aggressively.`, `Single-Target, Unique Effect`, 96, `The Point: Apply <b>Pointed</b> to target for 5 turns. This attack has a 5 turn cooldown.<br>Very Agreesive Poke: Deal 10 DMG to target.<br><b>Pointed</b>: Applies <b>Target Lock</b>, and when an enemy with <b>Pointed</b> is attacked deal 2x DMG.`, `Mythical`, 5)
//VOID
data.cardsData[3] = new Card(false,`ungwa`, `The antithesis of gwa. It's motives are unknown but it seems to hate gwas.`, `Multi-Target, Single-Target, Effects, Ability`,96, `Anti-gwa: Apply <b>DMG Reduced</b> to all enemy cards for 5 turns. ungwa is <b>Target Locked</b> for 3 turns after using this.<br>Rain of Pain: Apply <b>Poison</b> to all enemy cards for the entirety of the battle. This attack starts on a 10 turn cooldown.<br>ungwa Assault: Deal 20 DMG to target.<br>Destroy all gwa: Deal 10 DMG to target. This attack is repeated based on how many allie cards have been defeated. This attack has a 10 turn cooldown and starts on cooldown. This attack halves ungwa's HP.<br>ABILITY: Rage: ungwa's cooldowns are reduced by 1 each time an allie card is defeated.`, `VOID`, 1)
data.cardsData[13] = new Card(false,`gwacoin`, `gwa... but it's a currency??`, `Multi-Target, Single-Target, Effects, Ability`,96, `Spin: Reduce the highest cooldown of a allie by 1. This attack has a 1 turn cooldown.<br>Coin SMASH: Deal 15 DMG to all enemy cards and apply <b>Stunned</b> to a random enemey for 3 turns. This attack has a 4 turn cooldown.<br>Rolling Coin of Doom: Instantly defeat the target enemy and steal its HP. This attack has a 40 turn cooldown and starts on cooldown.<br>ABILITY: Indestructible Coin: Each time Coin SMASH is used reduce the cooldown of Rolling Coin of Doom by 10 and each time gwacoin receives a negative effect reduce the cooldown of Rolling Coin of Doom by 1. gwacoin is Immune to cooldown changing effects, good and bad.`, `VOID`, 1)

function unlockAll(){
    for (let i=0;i<data.cardsData.length;i++){
        data.cardsData[i].unlocked = true
    }
}