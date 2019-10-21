const rowSize = 10
const playingField = []
let player = 0

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
            console.log(i, j)
            if(player % 2 === 0){
                event.currentTarget.textContent = '🔵'
                event.currentTarget.disabled = true
                areYouAWinner(i, j, event.currentTarget.textContent)
                playerTurn.textContent = "Player two's turn."
            }
            else{
                event.currentTarget.textContent = '❌'
                event.currentTarget.disabled = true
                areYouAWinner(i, j, event.currentTarget.textContent)
                playerTurn.textContent = "Player one's turn."
            }
            player++
        })
    }
}

// Spelplanets funktion ovan





playerTurn = body.appendChild(h1Turn) // Vilken spelare
playerTurn.textContent = "Player one's turn."

// Style

const buttonStyle = document.querySelectorAll('body')


let winner = 0



function areYouAWinner(row, col, content){

    let startRow = row - 4
    if (startRow < 0) {
        startRow = 0
    }

    let endRow = row + 4
    if (endRow > rowSize - 1) {
        endRow = rowSize - 1
    }

    for (let i = startRow; i <= endRow; i++) {
        console.log(playingField[i][col])

        if(winner<4){
            if(playingField[i][col].textContent === '🔵' || playingField[i][col].textContent === '❌'){
                winner++
            }else{
                winner = 0
            }
        }else{
            const youWon = document.createElement('h1')
            if(player % 2 === 0){
                youWon.textContent = 'PLAYER ONE WON!!!'
            }else{
                youWon.textContent = 'PLAYER TWO WON!!!'
            }
            body.prepend(youWon)
            break
        }
    }
}









// if(winner<4){
//     winner = 0
// }else{
//     const youWon = document.createElement('h1')
//     if(player % 2 === 0){
//     youWon.textContent = 'PLAYER ONE WON!!!'
//     }else{
//         youWon.textContent = 'PLAYER TWO WON!!!'
//     }
//     body.prepend('youWon')
// }






























