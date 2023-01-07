let campoAtk = document.getElementById("campo-atk")
campoAtk.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault()
    $('#submit-ataque').click()
  }
})

let campoAtkE = document.getElementById("campo-atk-e")
campoAtkE.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault()
    $('#submit-ataque').click()
  }
})

let campoCrit = document.getElementById("campo-crit")
campoCrit.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault()
    $('#submit-crit').click()
  }
})

let campoAtkCalc = document.getElementById("campo-atk-calc")
campoAtkCalc.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault()
    $('#submit-ataque-calc').click()
  }
})

let campoAtkECalc = document.getElementById("campo-atk-e-calc")
campoAtkECalc.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault()
    $('#submit-ataque-calc').click()
  }
})

let campoCritCalc = document.getElementById("campo-crit-calc")
campoCritCalc.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault()
    $('#submit-crit-calc').click()
  }
})