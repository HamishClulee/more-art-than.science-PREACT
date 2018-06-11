import 'preloadfill'
import anime from 'animejs'
import  { h, render } from 'preact'
import App from './App/'
import './style/index.sass'
import './style/components/svg.scss'
import store from './store/'

render(
    <div id="app">
        <App />
    </div>,
    document.body
)

anime.timeline({loop: true})
    .add({
        targets: '.ml15 .word',
        scale: [14,1],
        opacity: [0,1],
        easing: "easeOutCirc",
        duration: 1000,
        delay: function(el, i) {
            return 1000 * i;
        }
    }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 3000,
    easing: "easeOutExpo",
    delay: 1000
});