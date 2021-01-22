const board = document.getElementById('game-board')

for (let i = 0; i < 9; i++) {
  board.insertAdjacentHTML('beforeend', `<div class="square square-${i + 1}"></div>`)
}
