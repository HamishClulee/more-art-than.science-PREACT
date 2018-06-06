import { h, render, Component } from 'preact';
import { Link } from 'preact-router/match';
// activeClassName="active"

module.exports = class Home extends Component {
    render(props, state) {
        return <div className="home-tab-wrapper">
            <Link activeClassName="active" className="home-tab-item" href="/"><h4>HOME</h4></Link>
            <Link activeClassName="active" className="home-tab-item" href="/tech"><h4>TECH</h4></Link>
            <Link activeClassName="active" className="home-tab-item" href="/resume"><h4>RESUME</h4></Link>
            <Link activeClassName="active" className="home-tab-item" href="/work"><h4>WORK</h4></Link>
            <Link activeClassName="active" className="home-tab-item" href="/blog"><h4>BLOG</h4></Link>
        </div>;
    }
}




