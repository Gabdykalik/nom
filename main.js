let btn = document.querySelector('.hamburger')
let nav = document.querySelector('.nav_banner')
btn.addEventListener('click', ()=> {
    btn.classList.toggle('is-active')
    nav.classList.toggle('nav_active')
})