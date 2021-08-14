import {items, wrapper} from "../models/constnats.js"
export default class Button {
  elemButton
  resultsContainer
  constructor(classButton, resultsContainer) {
    this.elemButton = document.createElement('button')
    this.elemButton.className = classButton
    this.elemButton.disabled = true
    this.elemButton.textContent = '+'
    this.elemButton.addEventListener('click', this.addNewPosition.bind(this))
    wrapper.prepend(this.elemButton)
    this.resultsContainer = resultsContainer
  }
  addNewPosition() {
    const inputValue = document.querySelector('#search').value
    const inputValueUpperFirst = inputValue[0].toUpperCase() + inputValue.slice(1)
    items.push(inputValueUpperFirst)
    localStorage.items = JSON.stringify(items)
    this.resultsContainer.elemLink.innerHTML = `<li>${inputValueUpperFirst}</li>`
    this.elemButton.disabled = true
  }
}