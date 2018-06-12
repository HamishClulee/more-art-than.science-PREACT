import { h, render, Component } from 'preact'

module.exports = class Hamburger extends Component {
    // Vue data
    constructor() {
        super()
    }

    // Vue mounted
    componentDidMount() {

    }

    // Vue beforeDestroy
    componentWillUnmount() {

    }

    activateLasers () {
        window.history.back()
    }

    // Vue Template
    render(props, state) {
        return <div className="hamburger-container" onClick={this.activateLasers}>
            <i className="material-icons">menu</i>
        </div>
    }
}