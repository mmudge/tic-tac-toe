import { createElementFromHTML } from '../helpers/createElementFromHTML.js'

export function board() {
  let HTMLString = '<div class="board-container flex-center"><div class="board">'

  for (let i = 0; i < 9; i++) {
    HTMLString += `<div class="square-${i + 1}"></div>`
  }

  HTMLString += '</div></div>'

  return createElementFromHTML(HTMLString)
}
