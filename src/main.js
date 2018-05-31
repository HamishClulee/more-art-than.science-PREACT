import { render } from 'preact'
import './index.sass'

let elem, App
function init() {
    App = require('./views').default
    elem = render(App, document.getElementById('app'), elem)
}

init()

if (process.env.NODE_ENV === 'development') {
    // use preact's devtools
    require('preact/devtools')
    // listen for HMR
    if (module.hot) {
        module.hot.accept('./views', init)
    }
}