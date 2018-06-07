import { h, render, Component } from 'preact';

module.exports = class Clock extends Component {
    // Vue data
    constructor() {
        super();
        // set initial time:
        this.state.time = Date.now();
    }

    // Vue mounted
    componentDidMount() {
        // update time every second
        this.timer = setInterval(() => {
            this.setState({ time: Date.now() });
        }, 1000);
    }

    // Vue beforeDestroy
    componentWillUnmount() {
        // stop when not renderable
        clearInterval(this.timer);
    }

    // Vue Template
    render(props, state) {
        let time = new Date(state.time).toLocaleTimeString();
        return <div>{ time }</div>;
    }
}