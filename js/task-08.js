
const loginForm = document.querySelector(`.login-form`)

loginForm.addEventListener(`submit`, handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const {
        elements : {email,password },

    } = event.currentTarget
    if ( email.value === `` || password.value === ``){
        return alert(`всі поля повинні бути заповнені.`)
    }
    const userDetails = { email: email.value, password: password.value}
    console.log(userDetails)
    event.currentTarget.reset()
}