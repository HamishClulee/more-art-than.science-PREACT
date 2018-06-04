import Router from 'preact-router'
import { h } from 'preact'
import Header from '../components/Header/'
import Home from '../views/Home/'

export const App = () => (
    <div>
        <Header/>
        <Router>
            <Home path="/" />
        </Router>
    </div>
)


export default () => (
    <App />
)
