const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.sideBar');
const faTimes = document.querySelector('.fa-times');
navToggle.addEventListener('click', function(){
    const toggle = links.classList.contains('show-sideBar');
    (toggle) ? links.classList.remove('show-sideBar') : links.classList.add('show-sideBar')
})
faTimes.addEventListener('click', function(){
    links.classList.remove('show-sideBar');
})