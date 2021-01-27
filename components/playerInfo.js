import { createElementFromHTML } from '../helpers/createElementFromHTML.js'

export function playerInfo(playerOne, playerTwo) {
  return createElementFromHTML(`
    <div class="player-info flex-center">
      <div>
        <h2>${playerOne} (X) vs ${playerTwo} (O)</h2>
        <p class="player-turn">${playerOne}'s turn!</p>
      </div>
    </div>
  `)
}
