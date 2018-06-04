import { h, render } from 'preact'
import App from './App/'
import './index.sass'
import store from './store/'

const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:5555' : 'https://more-art-than.science'

render(
  <div id="app">
    <App />
  </div>,
  document.body
)
