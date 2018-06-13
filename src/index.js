import 'preloadfill'
import  { h, render } from 'preact'
import App from './App/'
import './style/index.sass'
import './style/components/svg.scss'
import store from './store/'
import anime from "animejs"

render(
    <div id="app">
        <App />
    </div>,
    document.body
)