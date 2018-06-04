import Router from 'preact-router'
import { h } from 'preact'
import Header from '../components/Header/'
import Tester from '../components/Tester/'
import Home from '../views/Home/'

export const App = () => (
    <div>
        <Header/>
        <Router>
            <Home path="/" />
        </Router>
        <div className="text-container">
            <h1>But what does that even mean?</h1>
            <Tester />
        </div>
    </div>
)


export default () => (
    <App />
)
