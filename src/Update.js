const cardsDisplay = []
for (let i=0; i<2; i++){
    cardsDisplay[i] = document.getElementById(`card${[i]}`)
}
function updateHTML(){
    if (data.currentTab===1)
    for (let i=0; i<cardsDisplay.length;i++){
        cardsDisplay[i].style.display = cardsData[i].unlocked?`inline`:`none`
        cardsDisplay[i].innerHTML = cardsData[i].unlocked?`<br>${cardsData[i].rarity} ${cardsData[i].name} [${cardsData[i].hp} HP]<br><br>${cardsData[i].desc}<br><br>Attacks:<br>${cardsData[i].attacks}`:`You shouldn't be able to see this.`
    }
}
const homeContainer = document.getElementById("homeContainer")
const deckContainer = document.getElementById(`deckContainer`)
const deckNavButton = document.getElementById(`deckNavButton`)
function tabChangeHTML(){
    deckNavButton.innerText = data.currentTab===0?`Deck`:`Home`
    deckContainer.style.display = data.currentTab===1?`flex`:`none`
    homeContainer.style.display = data.currentTab===0?`flex`:`none`
}