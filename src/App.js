import Router from 'preact-router'
import { h, Component, render } from 'preact'
import AsyncRoute from 'preact-async-route'

// Views
import Home from './views/Home'
// import Blog from './views/Blog'

const App = (props, state) => {
    return <div>
        <Router>
            <Home path="/" />
            <AsyncRoute
                path="/ipseity"
                getComponent={ () => import('./views/Ipseity.js').then(module => module.default)}/>
            <AsyncRoute
                path="/resume"
                getComponent={ () => import('./views/Resume.js').then(module => module.default)}/>
            <AsyncRoute
                path="/work"
                getComponent={ () => import('./views/Work.js').then(module => module.default)}/>
            <AsyncRoute
                path="/words"
                getComponent={ () => import('./views/Blog.js').then(module => module.default)}/>
            <AsyncRoute
                path="/all-projects"
                getComponent={ () => import('./views/AllProjects.js').then(module => module.default)}/>
            <AsyncRoute
                path="/magnets/:id"
                getComponent={ () => import('./views/Magnets.js').then(module => module.default)}/>
        </Router>
    </div>
}

export default App
