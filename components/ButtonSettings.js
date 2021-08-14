import { items } from "../models/constnats.js"
export default class ButtonSettings {
  editButton
  resultsElem
  _li
  _cloneLi
  _inputValue
  constructor(resultsElem){
    this.resultsElem = resultsElem
    this.editButton = document.querySelector('.results')
    this.editButton.addEventListener('click', e => {
      this._li = e.target.closest('li')
      if (e.target.innerHTML === '✖') {
        items.splice(this._li.id, 1)
        this.resultsElem.showResults(items)
      } else if (e.target.innerHTML === '✎') {
        this._cloneLi = this._li.cloneNode(true)
        this._cloneLi.innerHTML = `<input value="${items[this._li.id]}"></input>
        <span>
          <button>&#9998;</button>
        </span>`
        this._cloneLi.addEventListener('click', e => {
          if (e.target.innerHTML === '✎') {
            this._inputValue = document.querySelector('li>input').value
            items[this._li.id] = this._inputValue            
            this.resultsElem.showResults(items)
          }
        })
        if (document.querySelectorAll('li>input').length < 1) {
          this._li.after(this._cloneLi)
        }
      }
    })
  }
}