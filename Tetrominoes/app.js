document.addEventListener('DOMContentLoaded', () => {

    const grid = document.querySelector('.grid');
    let square = Array.from(document.querySelectorAll('.grid div'));
    
    const ScoreDisplay = document.querySelector('#score');
    const StartBtn = document.querySelector('#start-btn');
    const width = 10;
    let nextRandom = 0
    let timerId
    let score = 0
    const colors = [
        'orange',
        'red',
        'purple',
        'green',
        'blue'

    ]
    
    const lTetromino = [
        [1,width+1, width*2+1,2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width,width*2, width*2+1, width*2+2]
    ]

    const iTerromino = [
        [1, width+1, width*2+1,width*3+1],
        [width, width+1, width+2,width+3],
        [1, width+1, width*2+1,width*3+1],
        [width, width+1, width+2,width+3]
    ]

    const zTerromino = [
        [width+1, width+2, width*2, width*2+1],
        [0,width,width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1],
        [0,width,width+1, width*2+1]
    ]

    const oTerromino = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
    ]

    const tTerromino = [
        [1,width,width+1,width+2],
        [1,width+1,width+2,width*2+1],
        [width,width+1,width+2,width*2+1],
        [1,width,width+1,width*2+1]
    ]



    const theThetrominoes = [lTetromino,zTerromino,tTerromino,oTerromino,iTerromino]

    let currentpos = 0;
    let currentRot = 0;


    let random = Math.floor(Math.random()*theThetrominoes.length)
    let current = theThetrominoes[random][currentRot]

    function draw (){
        current.forEach (index => {
            square[currentpos + index ].classList.add('tetromino')
            square[currentpos + index].style.backgroundColor = colors[random]
        })
    }

    function undraw () {
        current.forEach(index => {
            square[currentpos+index].classList.remove('tetromino')
            square[currentpos + index].style.backgroundColor = ''
        })
    }

    let setTime = 1000;

    // MAKE THE TETROM INO MOVE DOWN EVERY SECOND
    //timerId = setInterval(moveDown,setTime)

    // assing function to keycodes
    function control(e){
        if(e.keyCode === 37){
            moveLeft()
        }else if(e.keyCode === 38){
            rotTheObj()
        }else if(e.keyCode === 39){
            rightMove()
        }else if(e.keyCode  === 40){
            moveDown()
        }
    }

    document.addEventListener('keyup', control)

    function moveDown() {
        undraw();
        currentpos+=width;
        draw();
        freeze();
    }

    // freez function
    function freeze(){
        if(current.some(index => square[currentpos+index+width].classList.contains('taken'))){
            current.forEach(index => square[currentpos + index ].classList.add('taken'))
            // start a new tetromino
            random = nextRandom;
            nextRandom = Math.floor(Math.random() * theThetrominoes.length )
            current = theThetrominoes[random][currentRot]
            currentpos = 4;
            draw();
            dispalyShap()
            addSocer()
            gameOver()
        }
    }


// move left 
function moveLeft() {
    undraw();
    const isAtleftEdge = current.some(index => (currentpos + index ) % width === 0)

    if(!isAtleftEdge) currentpos -=1;

    if(current.some(index => square[currentpos + index]. classList.contains('taken'))){
        currentpos +=1
    }

    draw()
}
function rightMove() {
    undraw();
    const isAtleftEdge = current.some(index => (currentpos + index ) % width === width-1)

    if(!isAtleftEdge) currentpos +=1;

    if(current.some(index => square[currentpos + index]. classList.contains('taken'))){
        currentpos -=1
    }

    draw()
}


// rotate the tetromino
function rotTheObj(){
    undraw()
    currentRot++
    currentRot %= current.length

    current = theThetrominoes[random][currentRot]
    draw()
}


// show up nex tetromino in minin-grid
const displaySquares = document.querySelectorAll('.mini-grid div')
const displayWidth = 4
let displayIndex = 0


// the Tetrominos without rotation
const upNextTetrominoes = [
    [1,displayWidth+1,displayWidth*2+1,2], // lTetromino
    [0, displayWidth,displayWidth+1,displayWidth*2+1], // z
    [1, displayWidth, displayWidth+1,displayWidth+2], // t
    [0, 1, displayWidth,displayWidth+1], // o
    [1,displayWidth+1,displayWidth*2+1,displayWidth*3+1] // i
]

// dispaly the shape in the mini grid
function dispalyShap(){
    displaySquares.forEach(square => {
        square.classList.remove('tetromino')
        square.style.backgroundColor = ''
    })

    upNextTetrominoes[nextRandom].forEach (index => {
        displaySquares[displayIndex + index ].classList.add('tetromino')
        displaySquares[displayIndex + index].style.backgroundColor = colors[nextRandom]
    })
}


    // add functionlity to the button
    StartBtn.addEventListener('click', ()=>{
        if(timerId) {
            clearInterval(timerId);
            timerId = null
        }else{
            draw()
            timerId = setInterval(moveDown,1000)
            nextRandom = Math.floor(Math.random()*theThetrominoes.length)
            dispalyShap()
        }
    })

// add score
function addSocer(){
    for(let i = 0; i<199; i+=width){
        const row = [i,i+1,i+2,i+3,i+4,i+5,i+6,i+7,i+8,i+9]

        if(row.every(index => square[index].classList.contains('taken'))){
            score +=10
            ScoreDisplay.innerHTML = score
            row.forEach(index => {
                square[index].classList.remove('taken')
                square[index].classList.remove('tetromino')
                square[index].style.backgroundColor = ''
            })
            const squaresRemove = square.splice(i,width)
            square = squaresRemove.concat(square)
            square.forEach(cell => grid.appendChild(cell))

        }
    }
}

function gameOver (){
    if(current.some(index => square[currentpos + index].classList.contains('taken'))){
        ScoreDisplay.innerHTML = 'end'
        clearInterval(timerId)
    }
}

















})