import { createElementFromHTML } from '../helpers/createElementFromHTML.js'

export function playerForm() {
  return createElementFromHTML(`
    <div class="form-container flex-center">
      <form action="" method="" class="player-form" onsubmit="return false;">
        <div class="player-1 input-controls">
          <label for="player-1-name">Player 1:</label>
          <input type="text" tabindex="1" form minlength="1" placeholder="Name" name="player-1-name" id="player-1-name" value="" required>
        </div>
        <div class="player-2 input-controls">
          <label for="player-2-name">Player 2:</label>
          <input type="text" tabindex="2" form minlength="1" placeholder="Name" name="player-2-name" id="player-2-name" value="" required>
        </div>
        <button type="submit" formaction="' tabindex="3">Start game</button>
      </form>
    </div>
  `)
}
