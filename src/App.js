import Router from 'preact-router'
import { h } from 'preact'
// Components
import Header from './components/Header'
import NavTabs from './components/NavTabs'
import Footer from './components/Footer'

// Views
import Home from './views/Home'
import Tech from './views/Tech'
import Resume from './views/Resume'
import Work from './views/Work'
import Blog from './views/Blog'


export const App = () => (
    <div>
        <Header/>
        <NavTabs />
        <Router>
            <Home path="/" />
            <Tech path="/tech" />
            <Resume path="/resume" />
            <Work path="/work" />
            <Blog path="blog" />
        </Router>
        <Footer />
    </div>
)


export default () => (
    <App />
)
