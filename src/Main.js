let diff
function mainLoop(){
    diff = Date.now()-data.time
    data.time = Date.now()
    updateHTML()
}
function switchTab(i){
    data.currentTab = i
    let x=i-2
    if (x >= 0) data.currentTab=i
    tabChangeHTML()
}
window.setInterval(function(){
    mainLoop()
}, 50);