import 'preloadfill'
import  { h, render } from 'preact'
import App from './App/'
import './style/index.sass'
import store from './store/'

let fetchOk = false
const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:5555' : 'https://more-art-than.science'

fetch(`${baseURL}/api/session_challenge`,  {
    method: 'GET',
    credentials: 'include'
})
.then(function(response) {
    return response.json();
})
.then(function(resp) {
    fetchOk = resp.code === 'OK1' ? true : false
    console.log(fetchOk)
    init(fetchOk)
});


function init(goBerries) {
    console.log('berries', goBerries)
    render(
        <div id="app">
            <App showMain={goBerries} />
        </div>,
        document.body
    )
}