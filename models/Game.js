import { createElementFromHTML } from '../helpers/createElementFromHTML.js'

export default class Game {
  constructor(playerOne, playerTwo) {
    this.playerOne = playerOne
    this.playerTwo = playerTwo

    this.refreshGameState()
    this.setEventListeners()
  }

  gameState = {}
  playerOneTurn = true

  get activePlayersTurn() {
    return this.playerOneTurn ? this.playerOne : this.playerTwo
  }

  setEventListeners() {
    const board = document.querySelector('.board')
    const squares = board.children

    for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener('click', (event) => {
        const squareEl = event.target
        if (!squareEl.firstChild) {
          this.makeMove(squareEl)
        } else {
          alert('That square is already taken!')
        }
      })
    }
  }

  refreshGameState() {
    console.log('game state', this.gameState)
    this.clearGameState()
    this.createGameState()
  }

  createGameState() {
    for (let i = 0; i < 9; i++) {
      this.gameState[`square-${i + 1}`] = ''
    }
  }

  clearGameState() {
    this.gameState = {}
  }

  updateGameState(squareName, playerMarker) {
    this.gameState[squareName] = playerMarker

    console.log('updated game state', this.gameState)
    this.checkIfPlayerWins()
  }

  makeMove(eventTarget) {
    let playerMarker = ''
    if (this.playerOneTurn) {
      playerMarker = 'X'
    } else {
      playerMarker = 'O'
    }

    eventTarget.insertAdjacentElement('beforeend', createElementFromHTML(`<div>${playerMarker}</div>`))
    this.updateGameState(eventTarget.className, playerMarker)

    this.playerOneTurn = !this.playerOneTurn
    this.updatePlayerTurnText()
  }

  updatePlayerTurnText() {
    const playerTurnEl = document.querySelector('.player-turn')
    playerTurnEl.innerText = ''
    playerTurnEl.innerText = `${this.activePlayersTurn}'s turn!`
  }

  checkIfPlayerWins() {
    const winningIndexes = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    let winner = null

    winningIndexes.forEach((combos) => {
      if (combos.every((combo) => this.gameState[`square-${combo + 1}`] === 'X')) {
        winner = this.playerOne
      } else if (combos.every((combo) => this.gameState[`square-${combo + 1}`] === 'O')) {
        winner = this.playerTwo
      }
    })

    if (winner) {
      alert(`${winner} wins!!`)
    }
  }
}
