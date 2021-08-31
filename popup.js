let changeOptions = document.getElementById("options")
changeOptions.addEventListener("click", async () => {
    chrome.runtime.openOptionsPage()
})

let changePlantVsUndead = document.getElementById("PlantVsUndead")
changePlantVsUndead.addEventListener("click", () => {
    window.open('https://marketplace.plantvsundead.com/login#/farm', "_blank")
})

let changePanCakeSwap = document.getElementById("PanCakeSwap")
changePanCakeSwap.addEventListener("click", async () => {
    window.open('https://pancakeswap.finance/swap', "_blank")
})
