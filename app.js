import { appWrapper } from './components/appWrapper.js'
import { header } from './components/header.js'
import { playerForm } from './components/playerForm.js'
import { board } from './components/board.js'
import { playerInfo } from './components/playerInfo.js'

const app = document.getElementById('app')
app.insertAdjacentElement('afterbegin', appWrapper())

const container = document.querySelector('.container')

container.insertAdjacentElement('afterbegin', header())
container.insertAdjacentElement('beforeend', playerForm())

const button = document.querySelector('button')
button.addEventListener('click', (event) => {
  const playerInfoEl = document.querySelector('.player-info')

  if (playerInfoEl) {
    playerInfoEl.remove()
  }

  const playerOne = document.getElementById('player-1-name').value
  const playerTwo = document.getElementById('player-2-name').value

  const formContainer = document.querySelector('.form-container')
  formContainer.insertAdjacentElement('afterend', playerInfo(playerOne, playerTwo))

  const inputs = document.querySelectorAll('input')
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = ''
  }
})

container.insertAdjacentElement('beforeend', board())
