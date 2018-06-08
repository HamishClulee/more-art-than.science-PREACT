import Router from 'preact-router'
import { h, Component, render } from 'preact'

// Components
import UnderConstruction from './components/UnderConstruction'

// Views
import Home from './views/Home'
import Tech from './views/Tech'
import Resume from './views/Resume'
import Work from './views/Work'
import Blog from './views/Blog'


function CanView (props) {
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

function Construction(props) {
    return <UnderConstruction />
}

const App = (props, state) => {
    if (props.showMain) {
        return <CanView />
    } else {
        return <Construction />
    }
}

export default App