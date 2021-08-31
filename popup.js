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
    window.open('https://pancakeswap.finance/swap?outputCurrency=0x31471e0791fcdbe82fbf4c44943255e923f1b794', "_blank")
})

let changeTgbot = document.getElementById("TgBot")
changeTgbot.addEventListener("click", async () => {
    window.open('https://t.me/pvu_chrome_bot', "_blank")
})
