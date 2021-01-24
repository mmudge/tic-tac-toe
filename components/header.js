import { createElementFromHTML } from '../helpers/createElementFromHTML.js'

export function header() {
  return createElementFromHTML(`
    <div class="header">
      <h1>Let's play tic tac toe!</h1>
    </div>
  `)
}
