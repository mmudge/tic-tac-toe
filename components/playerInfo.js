import { createElementFromHTML } from '../helpers/createElementFromHTML.js'

export function playerInfo(playerOne, playerTwo) {
  return createElementFromHTML(`
    <div class="player-info flex-center">
      <h2>${playerOne} vs ${playerTwo}</h2>
    </div>
  `)
}
