import { h, render, Component } from 'preact';
import Footer from '../components/Footer'
import BackIcon from '../components/BackIcon'
module.exports = class AllProjects extends Component {
    // Vue data
    constructor() {
        super();
    }

    // Vue mounted
    componentDidMount() {
    }

    // Vue beforeDestroy
    componentWillUnmount() {
    }

    // Vue Template
    render(props, state) {
        return <div>
            <div className="page-container">
                <BackIcon />
                <h1 className="ml15">
                    <span className="word">Currently</span>
                    <span className="word">Under</span>
                    <span className="word">Construction</span>
                </h1>
            </div>
            <Footer />
        </div>;
    }
}