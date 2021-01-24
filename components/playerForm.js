import { createElementFromHTML } from '../helpers/createElementFromHTML.js'

export function playerForm() {
  return createElementFromHTML(`
    <div class="form-container flex-center">
      <form class="player-form">
        <div class="player-1">
          <label for="player-1-name">Player 1:</label>
          <input type="text" form minlength="1" placeholder="Player 1 name" name="player-1-name" required>
        </div>
        <div class="player-2">
          <label for="player-2-name">Player 2:</label>
          <input type="text" form minlength="1" placeholder="Player 2 name" name="player-2-name" required>
        </div>
        <button>Start game</button>
      </form>
    </div>
  `)
}
