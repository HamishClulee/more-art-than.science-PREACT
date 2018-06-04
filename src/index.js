import { h, render } from 'preact'
import App from './App/'
import './index.sass'
import store from './store/'

fetch('http://localhost:5555/test')
    .then(function(response) {
        return response.json()
    })
    .then(function(myJson) {
        console.log(myJson)
    })

render(
  <div id="app">
    <App />
  </div>,
  document.body
)