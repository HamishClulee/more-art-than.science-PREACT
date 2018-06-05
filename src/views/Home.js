import { h, render, Component } from 'preact';

module.exports = class Home extends Component {
    render(props, state) {
        return <div>
            <div className="home-tab-wrapper">
                <div className="home-tab-item"><h4>WORK</h4></div>
                <div className="home-tab-item"><h4>BLOG</h4></div>
                <div className="home-tab-item"><h4>RESUME</h4></div>
                <div className="home-tab-item"><h4>TECH</h4></div>
            </div>
            <div className="page-container">
                <h4>I'm a freelance a software engineer from New Zealand, mostly I build things for the web.</h4>
            </div>
        </div>;
    }
}
