let counterValue = 0

const counter = document.querySelector(`#value`)
const buttonMinus = document.querySelector(`button[data-action="decrement"]`)
const buttonPlus = document.querySelector(`button[data-action="increment"]`)
buttonMinus.addEventListener(`click`,() => {
    counterValue--
    counter.textContent = counterValue
})

buttonPlus.addEventListener(`click`,() => {
    counterValue++
    counter.textContent = counterValue
})
