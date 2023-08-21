const textInput = document.querySelector(`#font-size-control`)
const textId = document.querySelector(`#text`)

textInput.addEventListener(`change`, event => {
    textId.style.fontSize = `${event.target.value}px`
})