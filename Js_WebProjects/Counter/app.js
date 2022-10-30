let coutn = 0; ///set initial coutn

const btns = document.querySelectorAll('.btn')
const value = document.querySelector('#span')


btns.forEach(function (btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')){
            coutn--;
        }else if ( styles.contains('increase')){
            coutn++;
        }else
            coutn = 0;
        value.textContent = coutn
        changeTextColor()
    })
})

function changeTextColor(){
    if(coutn < 0)
        value.style.color = 'red'
    else if(coutn == 0)
        value.style.color = 'black'
    else
        value.style.color = 'green'
}