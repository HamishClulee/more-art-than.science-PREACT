import { h, render, Component } from 'preact';

module.exports = class Footer extends Component {
    render(props, state) {
        return <footer className="footer-container">
            <h4>Looka foota</h4>
        </footer>;
    }
}