import { h, render, Component } from 'preact';
import { Link } from 'preact-router/match';
// activeClassName="active"

module.exports = class Home extends Component {
    render(props, state) {
        return <div className="home-tab-wrapper">
            <Link activeClassName="active" className="home-tab-item" href="/">HOME</Link>
            <Link activeClassName="active" className="home-tab-item" href="/tech">TECH</Link>
            <Link activeClassName="active" className="home-tab-item" href="/resume">RESUME</Link>
            <Link activeClassName="active" className="home-tab-item" href="/work">WORK</Link>
            <Link activeClassName="active" className="home-tab-item" href="/blog">BLOG</Link>
        </div>;
    }
}




