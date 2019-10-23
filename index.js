const sizeButton = []
let rowSize = 0
const playingField = []
let player = 0
let winner = 0
const youWon = document.createElement('h1')
youWon.style.fontSize = '50px'
youWon.style.marginTop = '1px'
const body = document.querySelector('body')
const h1Turn = document.createElement('h1')
h1Turn.id = 'playerTurn'

                // Bestämmandet av storleken på spelplan
const div = document.createElement('div')
body.appendChild(div)
for(let i = 0; i < 3; i++){
    const button = document.createElement('button')
    // button.style.fontSize = 100
    button.textContent = (10 + (i * 5)) + 'x' + (10 + (i * 5))
    sizeButton[i] = div.appendChild(button)

    sizeButton[i].addEventListener('click', function(event){
        rowSize = 10 + (i * 5)
        makeBoard(rowSize)
        body.removeChild(div)
    })
}

                // Spelplanets funktion nedanför
function makeBoard(rowSize){
    for(let i=0; i<rowSize; i++){
        playingField[i] = []
        for(let j=0; j<rowSize; j++){
            const button = document.createElement('button')
            button.textContent = '◻️'
            playingField[i][j] = body.appendChild(button)
            
            if(j === (rowSize-1)){
                const rowBreak = document.createElement('br')
                body.appendChild(rowBreak)
            }
            
            playingField[i][j].addEventListener('click', function(event){
                // console.log(i, j)
                if(player % 2 === 0){

                    // console.log(winner)

                    event.currentTarget.textContent = '🔵'
                    event.currentTarget.disabled = true
                    
                    verticalWinner(i, j, event.currentTarget.textContent)
                    
                    horisontalWinner(i, j, event.currentTarget.textContent)
                    
                    diagonalWinner(i, j, event.currentTarget.textContent)

                    invertedDiagonalWinner(i, j, event.currentTarget.textContent)

                    playerTurn.textContent = "Player two's turn."
                }
                else{
                    event.currentTarget.textContent = '❌'
                    event.currentTarget.disabled = true
                    
                    verticalWinner(i, j, event.currentTarget.textContent)
                    
                    horisontalWinner(i, j, event.currentTarget.textContent)
                    
                    diagonalWinner(i, j, event.currentTarget.textContent)

                    invertedDiagonalWinner(i, j, event.currentTarget.textContent)

                    playerTurn.textContent = "Player one's turn."
                }
                player++
                winner = 0
            })
        }
    }
    playerTurn = body.appendChild(h1Turn) // Vems tur
}



    // Nedan läser lodrätt
function verticalWinner(row, col, content){

    let startRow = row - 4
    if (startRow < 0) {
        startRow = 0
    }

    let endRow = row + 4
    if (endRow > rowSize - 1) {
        endRow = rowSize - 1
    }

    for (let i = startRow; i <= endRow; i++) {
        if(player % 2 === 0){
            if(playingField[i][col].textContent === '🔵'){
                winner++
                if (winner === 5) {
                    winning()
                    break
                }
            }else{
                winner = 0
            }
        }else{
            if(playingField[i][col].textContent === '❌'){
                winner++
                if(winner === 5){
                    winning()
                    break
                }
            }else{
                    winner = 0
            }
        }
    }
    winner = 0
}

    // Nedan läser vågrätt
function horisontalWinner(row, col, content){

    let startCol = col - 4
    if(startCol<0){
        startCol = 0
    }

    let endCol = col + 4
    if(endCol > rowSize - 1){
        endCol = rowSize -1
    }

    for (let i = startCol; i <= endCol; i++) {
        if(player % 2 === 0){
            if(playingField[row][i].textContent === '🔵'){
                winner++
                if(winner === 5){
                    winning()
                    break
                }
            }else{
                winner = 0
            }
        }else{
            if(playingField[row][i].textContent === '❌'){
                winner++
                if(winner === 5){
                    winning()
                    break
                }
            }else{
                winner = 0
            }
        }
    }
}


    // Nedan läser diagonalt ++/--
function diagonalWinner(row, col, content){

    let startDiagonalRow = row - 4
    let startDiagonalCol = col - 4

    while(startDiagonalRow<0 || startDiagonalCol<0){
        startDiagonalCol++
        startDiagonalRow++
    }
    
    let endDiagonalRow = row + 4
    let endDiagonalCol = col + 4
    while(endDiagonalCol > rowSize-1 || endDiagonalRow > rowSize-1){
        endDiagonalRow--
        endDiagonalCol--
    }

    let endDiagonal = 0
    if(endDiagonalRow > endDiagonalCol){
        endDiagonal = endDiagonalRow
    }else{
        endDiagonal = endDiagonalCol
    }

    for(let i = 0; i <= endDiagonal; i++){
        if(startDiagonalRow + i >= rowSize || startDiagonalCol + i >= rowSize){
            break
        }
        if(player % 2 === 0){
            if(playingField[startDiagonalRow + i][startDiagonalCol + i].textContent === '🔵'){
                winner++
                if(winner === 5){
                    winning()
                    break
                }
            }else{
                winner = 0
            }
        }else{
            if(playingField[startDiagonalRow + i][startDiagonalCol + i].textContent === '❌'){
                winner++
                if(winner === 5){
                    winning()
                    break
                }
            }else{
                winner = 0
            }
        }
    }
}


// Nedan läser diagonalt +-/-+

function invertedDiagonalWinner(row, col, content){

    let startInvertedDiagonalRow = row + 4
    let startInvertedDiagonalCol = col - 4

    while(startInvertedDiagonalRow > rowSize-1 || startInvertedDiagonalCol < 0){
        startInvertedDiagonalCol++
        startInvertedDiagonalRow--
    }
    
    let endInvertedDiagonalRow = row - 4
    let endInvertedDiagonalCol = col + 4
    while(endInvertedDiagonalCol > rowSize-1 || endInvertedDiagonalRow < 0){
        endInvertedDiagonalRow++
        endInvertedDiagonalCol--
    }

    let endInvertedDiagonal = 0
    if(endInvertedDiagonalRow > endInvertedDiagonalCol){
        endInvertedDiagonal = endInvertedDiagonalRow
    }else{
        endInvertedDiagonal = endInvertedDiagonalCol
    }
    for(let i = 0; i<endInvertedDiagonal; i++){
        if(startInvertedDiagonalRow - i < 0 || startInvertedDiagonalCol + i >= rowSize){
            break
        }
        if(player % 2 === 0){
            if(playingField[startInvertedDiagonalRow - i][startInvertedDiagonalCol + i].textContent === '🔵'){
                winner++
                if(winner === 5){
                    winning()
                    break
                }
            }else{
                winner = 0
            }
        }else{
            if(playingField[startInvertedDiagonalRow - i][startInvertedDiagonalCol + i].textContent === '❌'){
                winner++
                if(winner === 5){
                    winning()
                    break
                }
            }else{
                winner = 0
            }
        }
    }
}


function winning(){
    if(player % 2 === 0){
        youWon.textContent = 'PLAYER ONE WON!!!'
    }else{
        youWon.textContent = 'PLAYER TWO WON!!!'
    }
    body.append(youWon)
    for(let i=0; i<rowSize; i++){
        for(let j = 0; j<rowSize; j++){
            playingField[i][j].disabled = true
        }
    }
    playerTurn = body.removeChild(h1Turn)
}


























