import { h, render, Component } from 'preact';
import Footer from '../components/Footer'
import BackIcon from '../components/BackIcon'

module.exports = class Blog extends Component {

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

    render(props, state) {
        return <div>
            <div className="page-container">
                <BackIcon />
                <h4>No Recent Posts To Display</h4>
            </div>
            <Footer />
        </div>;
    }
}