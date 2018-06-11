import { h, render, Component } from 'preact'

module.exports = class BackIcon extends Component {
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
        return <div className="back-icon-container" onClick={this.activateLasers}>
            <i class="material-icons">skip_previous</i>
        </div>
    }
}