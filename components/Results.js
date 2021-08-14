import {items, wrapper} from "../models/constnats.js"
export default class Results {
  elemLink
  constructor(className) {
    this.elemLink = document.createElement('ul')
    this.elemLink.className = className
    this.showResults(items)
    wrapper.appendChild(this.elemLink)
  }
  showResults(results) {
    this.elemLink.innerHTML = ''
    results.forEach((element, index) => this.elemLink.innerHTML += `<li id="${index}">
    <div>${element}</div>
    <span>
      <button>&#9998;</button>
      <button>&#10006;</button>
    </span>
  </li>`);
  }
}