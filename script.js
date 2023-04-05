const password = document.querySelector('#field')
const button = document.querySelector('button')

let passwordLenght = 8
let characters = 'abcdefghijklmnopqrstuvwxysABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%¨&*()-_=/*-+.?|,<>;:/[]{}~^'
let passwordValue = ''


const createPassword = () => {

    passwordValue = ''

    for(let i = 0; i < passwordLenght; i++) {
    let number = Math.floor(Math.random() * characters.length)
    passwordValue += characters.substring(number, number + 1)
    }

    password.value = passwordValue
}

button.addEventListener('click', createPassword)
