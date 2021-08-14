import {items, wrapper} from "../models/constnats.js"
export default class Search {
  elemLink
  buttonContainer
  constructor(id, placeholder, buttonContainer) {
    this.elemLink = document.createElement('input')
    this.elemLink.setAttribute('type', 'text')
    this.elemLink.setAttribute('placeholder', placeholder)
    this.elemLink.setAttribute('id', id)
    this.elemLink.addEventListener('input', this.onInput.bind(this))
    wrapper.prepend(this.elemLink);
    this.buttonContainer = buttonContainer
  }
  onInput() {
    const inputValue = this.elemLink.value.toLowerCase()
    const lowerCaseItems = items.map(elem => elem.toLowerCase())
    if (inputValue && lowerCaseItems.includes(inputValue)) {
      this.buttonContainer.elemButton.disabled = true
    } else if (inputValue) {
      this.buttonContainer.elemButton.disabled = false
      const filteredResults = items.filter(item => item.toLowerCase().includes(inputValue))
      this.buttonContainer.resultsContainer.showResults(filteredResults)
    } else {
      this.buttonContainer.elemButton.disabled = true
      this.buttonContainer.resultsContainer.showResults(items)
    }
  }
}