import { createElementFromHTML } from '../helpers/createElementFromHTML.js'

export function appWrapper() {
  return createElementFromHTML(`
    <div class="wrapper">
      <div class="container"></div>
    </div>
  `)
}
