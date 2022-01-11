//create all the variables in a data object for saving
function getDefaultObject() {
    return {
        isPrototype: true,
        time: Date.now(),
        currentTab: 1,
    }
}
let data = getDefaultObject()
//saving and loading
function save(){
    window.localStorage.setItem('gwaCardGameSave', JSON.stringify(data))
}
function load() {
    let savedata = JSON.parse(window.localStorage.getItem('gwaCardGameSave'))
    if (savedata !== undefined) fixSave(data, savedata)
    fixOldSaves()
}
//fix saves
function fixSave(main=getDefaultObject(), data) {
    if (typeof data === "object") {
        Object.keys(data).forEach(i => {
            if (typeof main[i]  == "object") {
                fixSave(main[i], data[i])
            } else {
                main[i] = data[i]
            }
        })
        return main
    }
    else return getDefaultObject()
}
function fixOldSaves(){
    //fix important things from old versions
}
function exportSave(){
    save()
    let exportedData = btoa(JSON.stringify(data));
    const exportedDataText = document.createElement("textarea");
    exportedDataText.value = exportedData;
    document.body.appendChild(exportedDataText);
    exportedDataText.select();
    exportedDataText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(exportedDataText);
}
function importSave(){
    let importedData = prompt("Paste your save data here!")
    data = Object.assign(getDefaultObject(), JSON.parse(atob(importedData)))
    save()
    location.reload()
}
window.setInterval(function(){
    save()
}, 10000);
window.onload = function (){
    load()
    switchTab(0)
    if (data.isPrototype) window.alert(`Warning! Prototype Save Detected, Proceed with Caution!`)
}
//full reset
function fullReset(){
    exportSave()
    window.localStorage.removeItem('gwaCardGameSave')
    location.reload()
}
function deleteSave(){
    window.localStorage.removeItem('gwaCardGameSave')
    location.reload()
}