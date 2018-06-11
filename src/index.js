import 'preloadfill'
import  { h, render } from 'preact'
import App from './App/'
import './style/index.sass'
import './style/components/svg.scss'
import store from './store/'

anime.timeline({loop: true})
    .add({
        targets: '.ml15 .word',
        scale: [14,1],
        opacity: [0,1],
        easing: "easeOutCirc",
        duration: 1000,
        delay: function(el, i) {
            return 3000 * i;
        }
    }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 3000,
    easing: "easeOutExpo",
    delay: 3000
});

const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:5555' : 'https://more-art-than.science'

fetch(`${baseURL}/api/session_challenge`,  {
        method: 'GET',
        credentials: 'include'
    })
    .then((response) => {
        return response.json()
    })
    .then((resp) => {
        init(resp.code === 'OK1')
    }
)


const init = (goBerries) => {
    render(
        <div id="app">
            <App showMain={goBerries} />
        </div>,
        document.body
    )
}