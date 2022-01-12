const cardsDisplay = []
for (let i=0; i<data.cardsData.length; i++){
    cardsDisplay[i] = document.getElementById(`card${[i]}`)
}
const rollButton = document.getElementById("rollButton")
function updateHTML(){
    if (data.currentTab===1)
    for (let i=0; i<cardsDisplay.length;i++){
        cardsDisplay[i].style.display = data.cardsData[i].unlocked?`inline`:`none`
        cardsDisplay[i].innerHTML = data.cardsData[i].unlocked?`<br>${data.cardsData[i].rarity} ${data.cardsData[i].name} [${data.cardsData[i].hp} HP]<br><br>${data.cardsData[i].desc}<br><br>${data.cardsData[i].smallDesc}<br>Click to learn more!`:`You shouldn't be able to see this.`
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

let viewingCard = false
function viewCard(x){
    viewingCard = true
    for (let i=0;i<cardsDisplay.length;i++){
        cardsDisplay[i].style.display = `none`
    }
    cardsDisplay[x].style.height = `500px`
    cardsDisplay[x].style.width = `550px`
    cardsDisplay[x].innerHTML = `<br>${data.cardsData[x].rarity} ${data.cardsData[x].name} [${data.cardsData[x].hp} HP]<br><br>${data.cardsData[x].desc}<br><br>${data.cardsData[x].attacks}<br><br><br>Click again to go back.`
    cardsDisplay[x].style.display = `inline`
    data.currentTab = -1
    deckNavButton.style.display = `none`
}
function stopViewingCard(x){
    viewingCard = false
    cardsDisplay[x].style.height = `300px`
    cardsDisplay[x].style.width = `250px`
    data.currentTab = 1
    deckNavButton.style.display = `inline`
}