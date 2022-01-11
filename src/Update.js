const cardsDisplay = []
for (let i=0; i<2; i++){
    cardsDisplay[i] = document.getElementById(`card${[i]}`)
}
function updateHTML(){
    for (let i=0; i<cardsDisplay.length;i++){
        cardsDisplay[i].innerHTML = `${cardsData[i].rarity} ${cardsData[i].name}<br><br>${cardsData[i].desc}<br><br>Attacks:<br>${cardsData[i].attacks}`
    }
}
function tabChangeHTML(){
}