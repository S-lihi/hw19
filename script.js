import Results from './components/Results.js'
import Button from './components/Button.js'
import Search from './components/Search.js'
import ButtonSettings from "./components/ButtonSettings.js"

const resultsElem = new Results('results')
const buttonElem = new Button('addButton', resultsElem)
new Search('search', 'Найти / Создать', buttonElem)
new ButtonSettings(resultsElem)