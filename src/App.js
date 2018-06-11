import Router from 'preact-router'
import { h, Component, render } from 'preact'

// Views
import Home from './views/Home'
import Tech from './views/Tech'
import Resume from './views/Resume'
import Work from './views/Work'
import Blog from './views/Blog'


const App = (props, state) => {
    return <div>
        <Router>
            <Home path="/" />
            <Tech path="/tech" />
            <Resume path="/resume" />
            <Work path="/work" />
            <Blog path="blog" />
        </Router>
    </div>
}

export default App