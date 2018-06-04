import { h, render } from 'preact'
import App from './App/'
import './index.sass'
import store from './store/'

render(
  <div id="app">
    <App />
  </div>,
  document.body
)