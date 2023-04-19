const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const cookie = document.querySelector("#cookie")
const btnReset = document.querySelector("#btnReset")
const translate = document.querySelector(".translate")
const API = "http://api.quotable.io/random"

const clicksToBreak = 3
let clicks = 0
let quote = ""
cookie.addEventListener('click', handleClick)
btnReset.addEventListener('click', handleResetClick)
translate.addEventListener('click', function() {
  let apiUrl = `https://api.mymemory.translated.net/get?q=${quote}&langpair=en|pt`
  fetch(apiUrl).then(res => res.json()).then(data => {
    message.innerText = data.responseData.translatedText
  })
})


function handleClick() {
  
  if(clicks < clicksToBreak) {
    clicks++
  }
  else {
    message = screen2.querySelector("p")
    fetch(API).then(res => res.json()).then(data => {
      message.innerText = data.content;
      quote = data.content
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
