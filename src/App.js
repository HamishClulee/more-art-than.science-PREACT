import Router from 'preact-router'
import { h, Component, render } from 'preact'
import AsyncRoute from 'preact-async-route'

// Views
import Home from './views/Home'

const App = (props, state) => {
    return <div className="god-div">
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
                getComponent={ () => import('./views/Words.js').then(module => module.default)}/>
            <AsyncRoute
                path="/all-projects"
                getComponent={ () => import('./views/AllProjects.js').then(module => module.default)}/>
            <AsyncRoute
                path="/magnets/:id"
                getComponent={ () => import('./views/Magnets.js').then(module => module.default)}/>
            <AsyncRoute
                path="/tinybanana"
                getComponent={ () => import('./views/posts/tinyb.js').then(module => module.default)}/>
            <AsyncRoute
                path="/stolencars"
                getComponent={ () => import('./views/posts/stolencars.js').then(module => module.default)}/>

            <AsyncRoute
                path="/whatsgood"
                getComponent={ () => import('./views/posts/good.js').then(module => module.default)}/>
            <AsyncRoute
                path="/interview-a-towel"
                getComponent={ () => import('./views/posts/jonathan.js').then(module => module.default)}/>
            <AsyncRoute
                path="/things"
                getComponent={ () => import('./views/posts/things.js').then(module => module.default)}/>
            <AsyncRoute
                path="/hackery"
                getComponent={ () => import('./views/hackery.js').then(module => module.default)}/>
        </Router>
    </div>
}

export default App
