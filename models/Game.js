import { playerInfo } from '../components/playerInfo.js'
import { createElementFromHTML } from '../helpers/createElementFromHTML.js'

export default class Game {
  constructor(playerOne, playerTwo) {
    this.playerOne = playerOne
    this.playerTwo = playerTwo
    this.gameState = null
    this.playerOneTurn = true
    this.winner = null
  }

  start() {
    this.refreshGameState()
    this.setEventListeners()
  }

  // gameState = {}
  // playerOneTurn = true

  get activePlayersTurn() {
    return this.playerOneTurn ? this.playerOne : this.playerTwo
  }

  get squares() {
    const board = document.querySelector('.board')
    return board.children
  }

  setEventListeners() {
    for (let i = 0; i < this.squares.length; i++) {
      this.squares[i].addEventListener('click', (event) => {
        this.onClickHandler(event)
      })
    }
  }

  onClickHandler(event) {
    const squareEl = event.target
    if (!squareEl.firstChild) {
      this.makeMove(squareEl)
    } else {
      console.log('first child square', squareEl.firstChild)
      // alert('That square is already taken!')
      console.log('That square is already taken!')
    }
  }

  refreshGameState() {
    this.clearGameState()
    this.createGameState()
  }

  createGameState() {
    for (let i = 0; i < 9; i++) {
      this.gameState = Object.create({})
      this.gameState[`square-${i + 1}`] = ''
    }
  }

  clearGameState() {
    this.winner = null
    if (this.gameState) {
      const keys = Object.keys(this.gameState)

      keys.forEach((key) => {
        this.gameState[key] = ''
        delete this.gameState[key]
      })
      this.gameState = {}
    }

    console.log('clearing game state', this.gameState)
    for (let i = 0; i < this.squares.length; i++) {
      this.squares[i].removeEventListener('click', (event) => this.onClickHandler(event))

      if (this.squares[i].children) {
        for (const child of this.squares[i].children) {
          child.remove()
        }
        // this.gameState[this.squares[i].className] = ''
      }
    }

    this.clearPlayerTurnText()
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

    if (!this.winner) {
      this.playerOneTurn = !this.playerOneTurn
      this.updatePlayerTurnText()
    }
  }

  updateGameState(squareName, playerMarker) {
    this.gameState[squareName] = playerMarker
    this.checkIfPlayerWins()
  }

  updatePlayerTurnText() {
    this.clearPlayerTurnText()
    this.addPlayerTurnText()
  }

  clearPlayerTurnText() {
    const playerTurnEl = document.querySelector('.player-turn')
    playerTurnEl.innerText = ''
  }

  clearPlayerInfo() {
    const playerInfoEl = document.querySelector('.player-info')
    const h2 = playerInfoEl.querySelector('h2')
    h2.remove()
  }

  addPlayerTurnText() {
    const playerTurnEl = document.querySelector('.player-turn')
    playerTurnEl.innerText = `${this.activePlayersTurn}'s turn!`
  }

  checkIfPlayerWins() {
    // TODO make this smarter
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

    const game = Object.create(this.gameState)

    winningIndexes.forEach((combos) => {
      if (
        combos.every((combo) => {
          return game[`square-${combo + 1}`] === 'X'
        })
      ) {
        this.winner = this.playerOne
      } else if (
        combos.every((combo) => {
          return game[`square-${combo + 1}`] === 'O'
        })
      ) {
        this.winner = this.playerTwo
      }
    })

    const values = Object.values(game)

    if (values && values.length && values.every((square) => square && square != '')) {
      setTimeout(() => {
        alert('Game is a draw!')
        this.clearGameState()
        this.clearPlayerInfo()
      }, 0)
    } else if (this.winner) {
      setTimeout(() => {
        alert(`${this.winner} wins!!`)
        this.clearGameState()
        this.clearPlayerInfo()
      }, 0)
    }
  }
}
