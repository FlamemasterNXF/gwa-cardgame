function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}
let cardsLocked = [0, 0, 0, 0]
let chosenCard
function getLockedCards(){
    cardsLocked[0] = cardsData.filter(card => card.rWeight === 80 && !card.unlocked)
    cardsLocked[1] = cardsData.filter(card => card.rWeight === 20 && !card.unlocked)
    cardsLocked[2] = cardsData.filter(card => card.rWeight === 5 && !card.unlocked)
    cardsLocked[3] = cardsData.filter(card => card.rWeight === 1 && !card.unlocked)
}
function roll(){
    getLockedCards()
    let voidRoll = getRandom(1,101)
    let mythicalRoll = getRandom(1,101)
    let rareRoll = getRandom(1,101)
    let commonRoll = getRandom(1,101)
    if (voidRoll === 1){chosenCard = cardsLocked[3][getRandom(0, cardsLocked[3].length)-1]}
    else if (mythicalRoll<6){chosenCard = cardsLocked[2][getRandom(0, cardsLocked[2].length-1)]}
    else if (rareRoll<21){chosenCard = cardsLocked[1][getRandom(0, cardsLocked[1].length-1)]}
    else if (commonRoll<81){chosenCard = cardsLocked[0][getRandom(0, cardsLocked[0].length-1)]}
    else chosenCard = 0

    if (voidRoll === 1 && cardsLocked[3].length === 0) rollButton.innerText = `You rolled a VOID card, but you've unlocked them all!`
    if (mythicalRoll<6 && cardsLocked[2].length === 0) rollButton.innerText = `You rolled a Mythical card, but you've unlocked them all!`
    if (rareRoll<21 && cardsLocked[1].length === 0) rollButton.innerText = `You rolled a Rare card, but you've unlocked them all!`
    if (commonRoll<81 && cardsLocked[0].length === 0) rollButton.innerText = `You rolled a Common card, but you've unlocked them all!`
    if (chosenCard!==0) chosenCard.unlocked = true
    rollButton.innerText = chosenCard!==0?`You got a ${chosenCard.rarity} ${chosenCard.name}!`:`You got nothing :(. Better luck next time!`
}