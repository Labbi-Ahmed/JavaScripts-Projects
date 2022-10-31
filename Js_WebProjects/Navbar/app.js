const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    const toggle = links.classList.contains('show-links');
    (toggle) ? links.classList.remove('show-links') : links.classList.add('show-links')
})