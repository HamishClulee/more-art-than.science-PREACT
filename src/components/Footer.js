import { h, render, Component } from 'preact';

module.exports = class Footer extends Component {
    render(props, state) {
        return <footer className="footer-container">
            <h6>I am footer</h6>
        </footer>;
    }
}