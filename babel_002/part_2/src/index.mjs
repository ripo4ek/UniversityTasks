function clickHandler() {
  this.textContent = this.id
}

document.querySelector('#bt1').addEventListener('click', clickHandler)
document
  .querySelector('#bt2')
  .addEventListener('click', ({ target }) => target::clickHandler())
