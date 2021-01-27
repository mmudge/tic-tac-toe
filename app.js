import { appWrapper } from './components/appWrapper.js'
import { header } from './components/header.js'
import { playerForm } from './components/playerForm.js'
import { board } from './components/board.js'
import { playerInfo } from './components/playerInfo.js'
import { createElementFromHTML } from './helpers/createElementFromHTML.js'
import Game from './models/Game.js'

const app = document.getElementById('app')
app.insertAdjacentElement('afterbegin', appWrapper())

const container = document.querySelector('.container')

const headerEl = header()

container.insertAdjacentElement('afterbegin', headerEl)

const content = createElementFromHTML('<div class="content"></div>')

container.insertAdjacentElement('beforeend', content)

const leftContent = createElementFromHTML('<div class="left-content"></div>')

content.insertAdjacentElement('beforeend', leftContent)

leftContent.insertAdjacentElement('beforeend', playerForm())

const rightContent = createElementFromHTML('<div class="right-content"></div>')

content.insertAdjacentElement('beforeend', rightContent)

const boardEl = board()

rightContent.insertAdjacentElement('beforeend', boardEl)

function clearInputs() {
  const inputs = document.querySelectorAll('input')
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = ''
  }
}

const button = document.querySelector('button')
button.addEventListener('click', (event) => {
  const playerOne = document.getElementById('player-1-name').value
  const playerTwo = document.getElementById('player-2-name').value

  if (!(playerOne && playerTwo)) {
    setTimeout(() => {
      alert('Enter player one and twos name to start the game!')
    }, 0)
    return
  }

  const playerInfoEl = document.querySelector('.player-info')

  if (playerInfoEl) {
    playerInfoEl.remove()
  }

  headerEl.insertAdjacentElement('beforeend', playerInfo(playerOne, playerTwo))

  clearInputs()
  console.log('creating a new game')

  let game = null
  game = new Game(playerOne, playerTwo)
  game.start()
})
