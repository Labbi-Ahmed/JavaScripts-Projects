const navToggle = document.querySelector('.nav-toggle');
const sideBar = document.querySelector('.sideBar');
const faTimes = document.querySelector('.fa-times');
navToggle.addEventListener('click', function(){
    // const toggle = links.classList.contains('show-sideBar');
    // (toggle) ? links.classList.remove('show-sideBar') : links.classList.add('show-sideBar')
    sideBar.classList.toggle('show-sideBar');
    console.log(sideBar.classList);
})
faTimes.addEventListener('click', function(){
    sideBar.classList.remove('show-sideBar');
    console.log(sideBar.classList);
})