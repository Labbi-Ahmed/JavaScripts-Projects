const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function(){
    let hexCode = '#'
    for(let i = 0; i<6; i++){
        let rendom = Math.floor(Math.random()*hex.length)
        hexCode += hex[rendom];
    }
    color.textContent = hexCode
    document.body.style.backgroundColor = hexCode
})
