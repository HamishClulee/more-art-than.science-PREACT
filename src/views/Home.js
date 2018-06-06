import { h, render, Component } from 'preact';

module.exports = class Home extends Component {
    render(props, state) {
        return <div className="page-container">
            <h4>I'm a freelance a software engineer from New Zealand, mostly I build things for the web.</h4>
        </div>;
    }
}
