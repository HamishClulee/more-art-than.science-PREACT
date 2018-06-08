import 'preloadfill'
import  { h, render } from 'preact'
import App from './App/'
import './style/index.sass'
import store from './store/'

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