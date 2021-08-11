let items =[]
if (localStorage.length === 0){
  items = ["Молоко", "Орехи", "Кофе", "Сахар", "Хлеб", "Йогурт", "Сок", "Бананы", "Мандарины", "Шоколад", "Печенье"];
} else{
  items = (JSON.parse(localStorage.items))
}

const wrapper = document.querySelector('.wrapper')

class Results {
  elemLink
  constructor(className) {
    this.createElement(className)
  }
  createElement(className) {
    this.elemLink = document.createElement('ul')
    this.elemLink.className = className
    items.forEach(element => this.elemLink.innerHTML += `<li>${element}</li>`);
    wrapper.appendChild(this.elemLink)
  }
  showResults(results) {
    this.elemLink.innerHTML = ''
    results.forEach(element => this.elemLink.innerHTML += `<li>${element}</li>`);
  }
}

class Button {
  elemButton
  resultsContainer
  constructor(classButton, resultsContainer) {
    this.createElement(classButton, resultsContainer)
  }
  createElement(classButton, resultsContainer) {
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

class Search {
  elemLink
  buttonContainer
  constructor(id, placeholder, buttonContainer) {
    this.createElement(id, placeholder, buttonContainer)
  }
  createElement(id, placeholder, buttonContainer) {
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



const resultsElem = new Results('results')
const buttonElem = new Button('addButton', resultsElem)
const searchElem = new Search('search', 'Найти / Создать', buttonElem)