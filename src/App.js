import Router from 'preact-router'
import { h, Component, render } from 'preact'

// Views
import Home from './views/Home'
import Ipseity from './views/Ipseity'
import Resume from './views/Resume'
import Work from './views/Work'
import Blog from './views/Blog'
import AllProjects from './views/AllProjects'

const App = (props, state) => {
    return <div>
        <Router>
            <Home path="/" />
            <Ipseity path="/ipseity" />
            <Resume path="/resume" />
            <Work path="/work" />
            <Blog path="/blog" />
            <AllProjects path="/all-projects" />
        </Router>
    </div>
}

export default App