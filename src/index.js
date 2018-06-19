import 'preloadfill'
import  { h, render } from 'preact'
import App from './App/'
import './style/index.sass'
import './style/components/svg.scss'

render(
    <div id="app">
        <App />
    </div>,
    document.body
)