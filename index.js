const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const cookie = document.querySelector("#cookie")
const btnReset = document.querySelector("#btnReset")
const translate = document.querySelector(".translate")
const quoteAPI = "http://api.quotable.io/random"

const clicksToBreak = 3
let clicks = 0
let quote = ""
cookie.addEventListener('click', handleClick)
btnReset.addEventListener('click', handleResetClick)
translate.addEventListener('click', function() {
  let translateAPI = `https://api.mymemory.translated.net/get?q=${quote}&langpair=en|pt`
  fetch(translateAPI).then(res => res.json()).then(translated => {
    message.innerText = translated.responseData.translatedText
  })
})


function handleClick() {
  
  if(clicks < clicksToBreak) {
    clicks++
  }
  else {
    message = screen2.querySelector("p")
    fetch(quoteAPI).then(res => res.json()).then(quoteResponse => {
      message.innerText = quoteResponse.content;
      quote = quoteResponse.content
    })
    toggleScreen()    
  }
}

function handleResetClick() {
  toggleScreen()
  clicks = 0
}
function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
