const rowSize = 10
const playingField = []
let player = 0
const youWon = document.createElement('h1')


const body = document.querySelector('body')
const h1Turn = document.createElement('h1')
h1Turn.id = 'playerTurn'

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
                
                // diagonalWinner(i, j, event.currentTarget.textContent)
                playerTurn.textContent = "Player two's turn."

                // console.log(winner)
                // if(!winner<5){
                //     for(let i=0; i<rowSize; i++){
                //         for(let j = 0; j<rowSize; j++){
                //             playingField[i][j].disabled = true
                //         }
                //     }
                // }
            }
            else{

                // console.log("andra " +winner)
                event.currentTarget.textContent = '❌'
                event.currentTarget.disabled = true
                
                verticalWinner(i, j, event.currentTarget.textContent)
                
                horisontalWinner(i, j, event.currentTarget.textContent)
                
                // diagonalWinner(i, j, event.currentTarget.textContent)
                playerTurn.textContent = "Player one's turn."

                // console.log("andra " +winner)


            }
            player++
            winner = 0
        })
    }
}

// Spelplanets funktion ovan





playerTurn = body.appendChild(h1Turn) // Vilken spelare
playerTurn.textContent = "Player one's turn."

// Style

const buttonStyle = document.querySelectorAll('body')


let winner = 0



function verticalWinner(row, col, content){

    // Nedan läser lodrätt
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
                    youWon.textContent = 'PLAYER ONE WON!!!'
                    body.prepend(youWon)
                    for(let i=0; i<rowSize; i++){
                        for(let j = 0; j<rowSize; j++){
                            playingField[i][j].disabled = true
                        }
                    }
                break
                }
            }else{
                winner = 0
            }
        }else{
            if(playingField[i][col].textContent === '❌'){
                winner++
                if(winner === 5){
                    youWon.textContent = 'PLAYER TWO WON!!!'
                    body.prepend(youWon)
                    for(let i=0; i<rowSize; i++){
                        for(let j = 0; j<rowSize; j++){
                            playingField[i][j].disabled = true
                        }
                    }
                break
                }
            }else{
                    winner = 0
            }
        }
    }
    winner = 0
}


function horisontalWinner(row, col, content){
    // Nedan läser vågrätt
    let startCol = col - 4
    if(startCol<0){
        startCol = 0
    }

    let endCol = col + 4
    if(endCol > rowSize - 1){
        endCol = rowSize -1
    }

    for (let i = startCol; i <= endCol; i++) {
        console.log(rowSize + " " + startCol + " " + endCol + " " + col)
        console.log(row, i)

        if(player % 2 === 0){
            if(playingField[row][i].textContent === '🔵'){
                console.log("        " + row, i)
                winner++

                if(winner === 5){
                    youWon.textContent = 'PLAYER ONE WON!!!'
                    body.prepend(youWon)
                    for(let i=0; i<rowSize; i++){
                        for(let j = 0; j<rowSize; j++){
                            playingField[i][j].disabled = true
                        }
                    }
                    break
                }
            }else{
                winner = 0
            }
        }else{
            if(playingField[row][i].textContent === '❌'){
                winner++
                if(winner === 5){
                    youWon.textContent = 'PLAYER TWO WON!!!'
                    body.prepend(youWon)
                    for(let i=0; i<rowSize; i++){
                        for(let j = 0; j<rowSize; j++){
                            playingField[i][j].disabled = true
                        }
                    }
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
    while(endDiagonalCol > rowSize-2 || endDiagonalRow > rowSize-2){
        endDiagonalRow--
        endDiagonalCol--
    }
    // let correctionOfEndDiagonal = 0
    let endDiagonal = 0

    if(endDiagonalCol>endDiagonalRow){
        // correctionOfEndDiagonal = endDiagonalRow-(rowSize+1)
        endDiagonal = endDiagonalRow
    }else{
        // correctionOfEndDiagonal = endDiagonalCol-(rowSize + 1)
        endDiagonal = endDiagonalCol
    }



    // if(endDiagonalCol>rowSize || endDiagonalRow>rowSize)
    // endDiagonalRow = endDiagonalrow - correctionOfEndDiagonal
    // endDiagonalCol = endDiagonalCol - correctionOfEndDiagonal

    // console.log(playingField[startDiagonalRow][startDiagonalCol].firstChild.textContent)
    // console.log(startDiagonalRow)
    // console.log(startDiagonalCol)
    // console.log(endDiagonalRow)
    // console.log(endDiagonalCol)

    for(let i = 0; i<endDiagonal-1; i++){
        // console.log(playingField[startDiagonalRow+i][startDiagonalCol+i])
        if(player % 2 === 0){
            if(winner<5){

                if(playingField[startDiagonalRow + i][startDiagonalCol + i].firstChild.textContent === '🔵'){
                    winner++
                }else{
                    winner = 0
                }
            }else{
                youWon.textContent = 'PLAYER ONE WON!!!'
                body.prepend(youWon)
                break
            }
        }else{
            if(winner<5){

                if(playingField[startDiagonalRow + i][startDiagonalCol + i].firstChild.textContent === '❌'){
                    winner++
                }else{
                    winner = 0
                }
            }else{
                youWon.textContent = 'PLAYER TWO WON!!!'
                body.prepend(youWon)
                break
            }
        }
    }
}

    //  i, j, event.currentTarget.textContent = row, col, content = playingField[i/row][j/col]

    // let startRowBox = col - 4
    // if(startRowCol<rowSize){
    //     startRowCol = 0
    // }


    // let endColBox = (col + 4)
    // if(endColBox>rowSize){
    //     endColBox = rowSize - 1
    // }

    // let endRowBox = (row + 4)
    // if(endRowBox>rowSize){
    //     endRowBox = rowSize - 1
    // }

    // playingField[i/row][j/col]































