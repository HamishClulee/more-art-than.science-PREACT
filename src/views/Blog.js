import { h, render, Component } from 'preact';

module.exports = class Blog extends Component {
    render(props, state) {
        return <div className="page-container">
            <h4>Blog!</h4>
        </div>;
    }
}