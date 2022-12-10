import './sass/main.scss'

let hamburgerButton = document.querySelector('.hamburger')
let navigation = document.querySelector('.navigation')
let html = document.documentElement

hamburgerButton.addEventListener('click', () => {
    hamburgerButton.classList.toggle('is-open')
    navigation.classList.toggle('menu-open')
    html.classList.toggle('disable-scroll')
})