import { appWrapper } from './components/appWrapper.js'
import { header } from './components/header.js'
import { playerForm } from './components/playerForm.js'
import { board } from './components/board.js'

const app = document.getElementById('app')
app.insertAdjacentElement('afterbegin', appWrapper())

const container = document.querySelector('.container')

container.insertAdjacentElement('afterbegin', header())
container.insertAdjacentElement('beforeend', playerForm())

const boardasdf = board()

console.log('board', boardasdf)

container.insertAdjacentElement('beforeend', boardasdf)

// const board = document.getElementById('game-board')

// const formRootEl = document.querySelector('.form')

// const form = playerForm()
// formRootEl.insertAdjacentElement('beforeend', form)

// for (let i = 0; i < 9; i++) {
//   board.insertAdjacentHTML('beforeend', `<div class="square square-${i + 1}"></div>`)
// }
