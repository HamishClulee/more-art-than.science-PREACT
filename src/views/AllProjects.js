import { h, render, Component } from 'preact';
import Footer from '../components/Footer'
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
                <h5>Currently Under Construction</h5>
            </div>
            <Footer />
        </div>;
    }
}