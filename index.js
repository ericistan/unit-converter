/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-button")
let inputEl = document.getElementById("input-el")
let convertLength = document.getElementById("convert-length")
let convertArea = document.getElementById("convert-area")
let convertVolume = document.getElementById("convert-volume")
let convertMass = document.getElementById("convert-mass")


convertBtn.addEventListener("click", function(){
    let baseValue = inputEl.value
    convertLength.textContent = `${baseValue} meters = ${(baseValue * 3.281).toFixed(2)} feet | ${baseValue} feet = ${(baseValue / 3.281).toFixed(2)} meters`
    convertArea.textContent = `${baseValue} square meters = ${(baseValue * 	10.7639).toFixed(2)} square feet | ${baseValue} square feet = ${(baseValue / 10.7639).toFixed(2)} square meters`
    convertVolume.textContent =`${baseValue} liters = ${(baseValue * 0.264).toFixed(2)} gallons | ${baseValue} gallons = ${(baseValue / 0.264).toFixed(2)} liters` 
    convertMass.textContent =`${baseValue} kilos = ${(baseValue * 2.204).toFixed(2)} pounds | ${baseValue} pounds = ${(baseValue / 2.204).toFixed(2)} kilos` 

})
