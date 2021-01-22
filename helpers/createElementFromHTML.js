export function createElementFromHTML(htmlString) {
  const template = document.createElement('template')
  template.innerHTML = htmlString.trim()
  return template.content.firstChild
}
